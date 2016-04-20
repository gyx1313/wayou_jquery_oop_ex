// $.fn.myplugin = function(options){
// 	var defaults = {
// 		'color':'red',
// 		'fontSize':'12px'
// 	};

// 	var settings = $.extend({},defaults, options);
// 	return this.css({
// 		'color' : settings.color,
// 		'fontSize' : settings.fontSize
// 	});
// };



;(function($, window, document, undefined){
	//定义Beautifier的构造函数
	var Beautifier = function(ele, options){
		this.$element = ele;
		this.defaults = {
			'color' : 'red',
			'fontSize' : '20px',
			'textDecoration':'none'
		};
		this.options = $.extend({}, this.defaults, options);
	};
	//定义Beautifier的方法
	Beautifier.prototype = {
		beautify : function(){
			this.$element.css({
				'color' : this.options.color,
				'fontSize' : this.options.fontSize,
				'textDecoration': this.options.textDecoration
			});
			return this;
		}
	};
	//在插件中使用Beautifier对象
	$.fn.myplugin = function(options){
		//创建Beautifier的实例
		var beautifier = new Beautifier(this, options);
		//调用其方法
		beautifier.beautify();
	};
})(jQuery, window, document);