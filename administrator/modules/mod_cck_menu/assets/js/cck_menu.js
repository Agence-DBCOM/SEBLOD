var Joomla=Joomla||{};JCCKjSeblod_Menu=new Class({Implements:[Options],options:{disabled:false},initialize:function(a,b){this.setOptions(b);this.element=document.id(a);this.element.getElements("li").filter(".node").getElement("ul").each(this._equalizeWidths);if(!this.options.disabled){this._addMouseEvents()}this.element.store("menu",this)},disable:function(){var a=this.element.getElements("li");$$(this.element,a).addClass("disabled");a.removeEvents("mouseenter").removeEvents("mouseleave")},enable:function(){$$(this.element,this.element.getElements("li")).removeClass("disabled");this._addMouseEvents()},_addMouseEvents:function(){this.element.getElements("li").removeEvents("mouseenter").removeEvents("mouseleave").addEvents({mouseenter:function(){var a=this.getElement("ul");if(a){a.fireEvent("show")}this.addClass("hover")},mouseleave:function(){var a=this.getElement("ul");if(a){a.fireEvent("hide")}this.removeClass("hover")}})},_equalizeWidths:function(a){var b=0;var c=a.getElements("li");c.each(function(a){b=b>=a.offsetWidth?b:a.offsetWidth});$$(c,a).setStyle("width",b)}});window.addEvent("domready",function(){var a=document.id("menu");new JCCKjSeblod_Menu(a,a.hasClass("disabled")?{disabled:true}:{})})