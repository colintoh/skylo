/*!
 * jQuery lightweight plugin boilerplate
 * Original author: @ajpiano
 * Further changes, comments: @addyosmani
 * Licensed under the MIT license
 */


// the semi-colon before the function invocation is a safety
// net against concatenated scripts and/or other plugins
// that are not closed properly.
;(function ( $, window, document, undefined ) {

    //Defaults
    var pluginName = 'skylo',
        defaults = {
            state: 'info', // Info, Success, Warning, Danger
          inchSpeed: 200,  // Milliseconds
          initialBurst: 5,  // Range 1 - 100.
          flat: false
        };

    // The actual plugin constructor
    function Plugin(options ) {

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._width = 0;
        this._shown = false;
        this._name = pluginName;

        this.init();

    }

    Plugin.prototype.init = function () {
      _validate(this.options);
    };

    Plugin.prototype.show = function(callback){
      if(!this._shown){
        var body =
        $('<div/>', {
            "class":"progress-bar bar "+ ((this.options.state) ? ("progress-bar-"+this.options.state+" bar-"+this.options.state):"")
        }).append($("<span/>"));


        $('<div/>',{
            "class":"progress "+((this.options.flat) ? "" : "progress-striped active") +" skylo",
        }).append(body).appendTo('body');

        this._shown = true;
        this._width = 0;
      }

      if(typeof callback === "function"){
        callback();
      }

    };

    Plugin.prototype.remove = function(){
      $('.skylo').remove();
      this._shown = false;
      this._width = 0;
    };

    Plugin.prototype.set = function (params) {
        // Place initialization logic here
        // You already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options
       clearTimeout(this.interval);
       this._width = params;
       $('.progress.skylo .bar').width(this.get()+'%');
    };

    Plugin.prototype.inch = function(params){
      var that = this;
      if(params > 0 && that.get() <= 100){
        this.interval = setTimeout(function(){
          var width = that.get() + 1;
          that.set(width);
          that.inch(--params);
        },that.options.inchSpeed);
      } else if(that.get() === 100){
        that.end();
      }
    };

    Plugin.prototype.start = function(){
      var that = this;
      this.show(function(){
        that.set(that.options.initialBurst);
      });
    };

    Plugin.prototype.end = function () {
      var that = this;
      clearTimeout(this.interval);
      $('.progress.skylo .bar').width('100%');
      _disappear(400,function(){
        that.remove();
      });
    };

    Plugin.prototype.get = function(){
      return this._width;
    }

    function _disappear(delay,callback){

      callback = callback || null;

      setTimeout(function(){
          $('.progress.skylo .bar').animate({'opacity':0},1000,callback);
        },delay);
    }

    function _validate(options){

      var prefix = "Skylo: ";

      if(options.initialBurst > 100 || options.initialBurst <0){
        $.error(prefix + 'Initial Burst must range from 0 to 100');
      }

      if(options.state !== 'info' && options.state !== 'success' && options.state !== 'danger' && options.state !== 'warning' && options.state !== 'primary' && options.state !== 'default'){
        $.error(prefix + 'Invalid state. Please choose one of these states: ["info","success","danger","warning"]');
      }

    }


    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.skylo = function ( options ) {
      var _arguments = arguments;
      var retVal = null;

      if (!$.data(document, 'plugin_' + pluginName)) {
          $.data(document, 'plugin_' + pluginName,
          new Plugin( options ));
      }

      var data = $.data(document, 'plugin_'+pluginName);

      if(data[options]){
        retVal = data[options].apply(data,Array.prototype.slice.call(_arguments,1));
      } else if(typeof options === 'object' || !options){
        data.options = $.extend({},data.options,options);
        _validate(data.options);
      } else {
        $.error('Skylo have no such methods');
      }

      return retVal;

    }

})( jQuery, window, document );
