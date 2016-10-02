/**
 * Combobox UI Ver 1.0
 * @author mulder21c
 */
;(function(window,$){
	/**
	 * @class Combobox
	 * @param {object} elem HTMLElement
	 */
	var ComboboxUI = function(elem){
		this.origin = elem;
	}

	var defaults = {
		useAria : true,
		cssPrefix : "mulder21c-"		
	};

	ComboboxUI.prototype.initialize = function(settings){
		var me = this;
		// merging plugin settings with default options
		me.settings = $.extend({}, defaults, settings);

		// initialize additional required Markup
		me.wrapper = $(me.origin).wrap("<span />");
	};

	/**
	 * @function external:"jQuery.fn".ComboboxUI
	 */
	$.fn.ComboboxUI = function(settings){
		return this.each(function() {
			new ComboboxUI(this).initialize(settings);
		});
	};

	window.ComboboxUI = ComboboxUI;
})(window, jQuery);