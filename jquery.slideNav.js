;(function ( $, window, document, undefined ) {

  var pluginName = "slideNav",
  defaults = {
    hasSubNavs: false,
    toggleButtonSelector: '.toggle-slide-nav',
    touch: false
  };

  var foldOutButtonClass = 'fold-out-menu',
      showSlideNavClass = 'show-slide-nav';

  function Plugin( element, options ) {
    this.element = element;

    this.options = $.extend( {}, defaults, options );

    this._defaults = defaults;
    this._name = pluginName;

    this.init();
  }

  Plugin.prototype = {

    init: function() {
      if (this.options.hasSubNavs) {
        this.findSubNavs(this.element);
        this.bindFoldOutArrows(this.element);
      }

      if ($(this.options.toggleButtonSelector).length) {
        this.bindClickEvents($(this.options.toggleButtonSelector));
      }

      if (this.options.touch) {
        this.bindTouchEvents();
      }
    },

    findSubNavs: function(el) {
      $(el).find('li').each(function(){
        if ( $(this).find('> ul').length ) {
          $(this).addClass('has-sub-nav');
          $(this).prepend('<a href="#" class="' + foldOutButtonClass + '"></a>')
        }
      });
    },

    bindFoldOutArrows: function(el) {
      $(el).find('.' + foldOutButtonClass).on('click', function(e){
        e.preventDefault();
        $(this).parent('li.has-sub-nav').toggleClass('show-sub-nav');
      });
    },

    bindClickEvents: function($buttonEl) {
      var that = this;

      $buttonEl.on('click', function(e){
        e.preventDefault();

        that.toggle();
      });
    },

    bindTouchEvents: function() {
      var that = this;

      $(window).hammer().on('swipe', function(e){
        if ( e.gesture.direction == 'right' ) {
          that.show();
        } else if ( e.gesture.direction == 'left' ) {
          that.hide();
        }
      });
    },

    showing: function() {
      if ($('body').hasClass(showSlideNavClass)) {
        return true;
      } else {
        return false;
      }
    },

    toggle: function() {
      if (this.showing()) {
        this.hide();
      } else {
        this.show();
      }
    },

    show: function() {
      $('body').addClass(showSlideNavClass);
    },

    hide: function() {
      $('body').removeClass(showSlideNavClass);
    }
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );
