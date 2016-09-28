/*! Unmark - http://unmark.it - 2016-09-28 - http://plainmade.com */ 
if(void 0===unmark)var unmark={};!function(a){unmark.ajax=function(b,c,d,e,f,g){var h=unmark.urlEncode(unmark.vars.csrf_token),f=void 0!==f?f:"json",g=void 0!==g?g:!0,i="csrf_token="+h+"&content_type="+f;d=unmark.empty(d)?i:d+"&"+i,a.ajax({dataType:f,cache:!1,url:b,type:c.toUpperCase(),data:d,async:g,success:function(b){a.isFunction(e)&&e(b)},error:function(b,c,d){var f={error:d,status:c,request:b};a.isFunction(e)&&e(f)}})},unmark.readQuery=function(a){for(var b=window.location.search.substring(1),c=b.split("&"),d=0;d<c.length;d++){var e=c[d].split("=");if(e[0]==a)return e[1]}return!1},unmark.swapClass=function(b,c,d){var e=b;if(-1===c.indexOf("*"))return e.removeClass(c),d?e.addClass(d):e;var f=new RegExp("\\s"+c.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return e.each(function(b,c){for(var d=" "+c.className+" ";f.test(d);)d=d.replace(f," ");c.className=a.trim(d)}),d?e.addClass(d):e},unmark.replaceSpecial=function(a){if(void 0!==a&&null!==a){var b=null;for(var c in unmark.special_chars)b=new RegExp(c,"gi"),a=a.replace(b,unmark.special_chars[c])}return a},unmark.urlEncode=function(a){return a=unmark.replaceSpecial(a),encodeURIComponent(a)},unmark.empty=function(a){var b=void 0!==a&&null!==a?a.length:0;return a===!1||""===a||null===a||0===a||void 0===a||1>b},unmark.createCookie=function(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+24*c*60*60*1e3);var e="; expires="+d.toGMTString()}else var e="";document.cookie=a+"="+b+e+"; path=/"},unmark.readCookie=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null},unmark.prettyLink=function(a){return a=a.replace(/https?:\/\/(www.)?/,""),"/"===a.substr(-1)&&(a=a.substr(0,a.length-1)),a},unmark.read_query_str=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null==c?"":decodeURIComponent(c[1].replace(/\+/g," "))},unmark.extendFunction=function(a,b){this[a]=function(a,b,c){return function(){var d=b.apply(a,arguments),e=c.apply(a,arguments);return null!==e?e:d}}(this,this[a],b)}}(window.jQuery),function(a){unmark.updateDom=function(){var b=a("div.marks").data("label-class"),c=a("body");c.removeClass().addClass(b),unmark.page_setup(a("body").height())},unmark.sidebar_collapse=function(){Modernizr.mq("only screen and (max-width: 480px)")&&(a(".mark-actions").hide(),a(".sidebar-content").animate({right:"-85%"},600,function(){a(this).hide()})),a(".mark").removeClass("view-inactive").removeClass("view-active"),a("[id^=mark-] h2").attr("contenteditable",!1).removeClass("editable"),unmark.sidebar_expand(!0),unmark.sidebar_mark_info.fadeOut(400,function(){unmark.sidebar_default.fadeIn(400)})},unmark.sidebar_expand=function(a){var b=unmark.sidebar_content.find('a[data-action="sidebar_expand"] i');return a===!0?unmark.sidebar_content.animate({width:"40.2914%"},800,function(){b.removeClass("icon-heading_collapse").addClass("icon-heading_expand"),unmark.sidebar_content.removeClass("wide")}):void(b.hasClass("icon-heading_collapse")?unmark.sidebar_content.animate({width:"40.2914%"},800,function(){b.removeClass("icon-heading_collapse").addClass("icon-heading_expand"),unmark.sidebar_content.removeClass("wide")}):unmark.sidebar_content.animate({width:"75%"},800,function(){b.removeClass("icon-heading_expand").addClass("icon-heading_collapse"),unmark.sidebar_content.addClass("wide")}))},unmark.hideNavigation=function(){Modernizr.mq("only screen and (min-width: 480px)")&&(a(".mark-actions").hide(),a(".branding").fadeOut()),unmark.nav_panel.stop().animate({left:-285},400),unmark.main_panel.stop().animate({left:80},200,function(){a(".nav-panel").hide(),a(".menu-item").removeClass("active-menu"),a(".navigation-pane-links").show(),a(".menu-activator i").removeClass("icon-menu_close").addClass("icon-menu_open")})},unmark.interact_nav=function(b,c){var d=c.attr("href"),e=d.replace(/^#/,""),f=parseInt(c.attr("rel")),g=f+80,h=c.parent(),i=parseInt(unmark.nav_panel.css("left"));return unmark.sidebar_collapse(),d.match(/\//)?(unmark.hideNavigation(),!0):(b.preventDefault(),a(".mark-actions").hide(),h.hasClass("active-menu")?(a(".menu-item").removeClass("active-menu"),unmark.hideNavigation()):(a(".menu-item").removeClass("active-menu"),a(".navigation-content").find("[data-menu='"+e+"']").addClass("active-menu"),"#panel-menu"===d&&i>0?unmark.hideNavigation():(a(".menu-activator i").removeClass("icon-menu_open").addClass("icon-menu_close"),unmark.nav_panel.animate({left:80},{duration:200,queue:!1}),unmark.main_panel.animate({left:g},{duration:200,queue:!1}),unmark.nav_panel.animate({width:f},200),unmark.nav_panel.find(".nav-panel").animate({width:f},200),a(".branding").fadeIn(),void("#panel-menu"===d?(a(".navigation-pane-links").show(),a(".nav-panel").hide()):(a(".navigation-pane-links").hide(),a(".nav-panel").not(d).hide(),a(d).show())))))},unmark.scrollPaginate=function(a){var b,c,d,e,f,g="",e=window.unmark_current_page+1,h=window.unmark_total_pages;a.scrollTop()+a.innerHeight()>=a[0].scrollHeight&&h>=e&&(d=Hogan.compile(unmark.template.marks),b=window.location.pathname,unmark.ajax(b+"/"+e,"post","",function(a){if(a.marks){for(f=Object.keys(a.marks).length,c=1;f>c;c++)a.marks[c].prettyurl=unmark.prettyLink(a.marks[c].url),g+=d.render(a.marks[c]);unmark.main_content.find(".marks_list").append(g),window.unmark_current_page=e}}))},unmark.updateCounts=function(){unmark.getData("stats",function(b){var c=b.stats.archived,d=(b.stats.saved,b.stats.marks);a(".na-today").text(c.today),a(".ns-year").text(d["ages ago"])})},unmark.getData=function(a,b){unmark.ajax("/marks/get/"+a,"post","",b)},unmark.close_window=function(b){if(b)return window.close();var c=a(".mark-added-note").find("textarea").val(),d=a(".mark-added-note").find("textarea").data("id");unmark.saveNotes(d,c),window.close()},unmark.dismiss_this=function(a){a.parent().parent().fadeOut()},unmark.page_setup=function(b){unmark.main_content.height(b),unmark.sidebar_content.height(b),a(".nav-panel").height(b),a("body").height(b)},unmark.overlay=function(b){if(b===!0){unmark.mainpanels.addClass("blurme");var c=a('<div id="unmark-overlay"><a href="#" id="unmarkModalClose"><i class="icon-big_close"></i></a></div>');c.appendTo(document.body)}else a(".hiddenform").hide().css("top","-300px"),unmark.mainpanels.removeClass("blurme"),a("#unmark-overlay").remove(),a("#helperforms input").val("")}}(window.jQuery),function(a){var b=0;unmark.show_mark_info=function(c){function d(){b=arguments[0]||b,isNaN(b)?a("ul.sidebar-label-list").prepend(unmark.label_list(b)):unmark.getData("labels",d)}var e,f,g=c.data("mark"),h=a("#"+g).html(),i=jQuery.parseJSON(h),j=g.replace("mark-data-",""),k=a("#mark-"+j).find(".note-placeholder").text();mark_nofade=c.data("nofade");var l=a("#mark-"+j+" h2");l.hasClass("editable")||(a("[id^=mark-] h2").attr("contenteditable",!1).removeClass("editable"),mark_nofade||(a(".mark").removeClass("view-inactive").removeClass("view-active"),a(".mark").not("#mark-"+j).addClass("view-inactive"),a("#mark-"+j).addClass("view-active")),""!==k&&(i.notes=k),e=Hogan.compile(unmark.template.sidebar),f=e.render(i),Modernizr.mq("only screen and (max-width: 480px)")&&a("#mobile-sidebar-show").trigger("click"),unmark.sidebar_mark_info.fadeOut(400,function(){unmark.sidebar_default.is(":visible")?unmark.sidebar_default.fadeOut(400,function(){unmark.sidebar_mark_info.html(f).fadeIn(400,function(){unmark.tagify_notes(a("#notes-"+j)),d(),a("section.sidebar-info-preview").fitVids()})}):(unmark.sidebar_mark_info.html(f),unmark.tagify_notes(a("#notes-"+j)),d(),unmark.sidebar_mark_info.fadeIn(400,function(){a("section.sidebar-info-preview").fitVids()}))}))},unmark.update_label_count=function(){function b(a){var b,d,e=a.labels;for(b in e)d=e[b].total_active_marks,"1"===d?d+=" mark":"0"===d?d="no marks":d+=" marks",c.find(".label-"+e[b].label_id+" span").text(d)}var c=a("ul.label-list");unmark.getData("labels",b),unmark.updateCounts()},unmark.mark_archive=function(b){var c=b.data("id");unmark.ajax("/mark/archive/"+c,"post","",function(b){null!==b.mark.archived_on?(a("#mark-"+c).fadeOut(),unmark.sidebar_collapse(),unmark.update_label_count()):alert("Sorry, We could not archive this mark at this time.")})},unmark.mark_restore=function(b){var c=b.data("id");unmark.ajax("/mark/restore/"+c,"post","",function(b){null===b.mark.archived_on?(a("#mark-"+c).fadeOut(),unmark.sidebar_collapse(),unmark.update_label_count()):alert("Sorry, We could not restore this mark at this time.")})},unmark.archive_all=function(){unmark.ajax("/marks/archive/old","post","",function(a){a.archived===!0?window.location="/marks":alert("Sorry, We could not archive the links at this time. Please try again.")})},unmark.marks_editMarkInfo=function(b){function c(b,c,d){""!==b&&(f="title="+unmark.urlEncode(b)+"&notes="+unmark.urlEncode(c),unmark.ajax("/mark/edit/"+d,"post",f,function(){a("#mark-"+d).find(".note-placeholder").text(c)}))}function d(a){switch(a){case 1:heading='Notes (click to edit)<i class="icon-edit"></i>';break;case 2:heading='Editing Mark Info <i class="icon-heading_close"></i>';break;case 3:heading='Edit Note/Mark Info<i class="icon-edit"></i>'}b.html(heading)}function e(a){a.preventDefault(),(13===a.which||"blur"===a.type)&&(g.hasClass("contentsChanged")||h.hasClass("contentsChanged"))&&(c(h.text(),g.text(),i),g.removeClass("contentsChanged"),h.removeClass("contentsChanged"))}var f,g=b.next(),h=a("#mark-"+a(g).data("id")+" h2"),i=a(g).data("id");g.unbind(),h.unbind(),h.attr("contenteditable",!0).addClass("editable"),h.find("a").contents().unwrap(),g.attr("contenteditable",!0).addClass("editable"),g.find("a").contents().unwrap(),g.focus(),d(2),b.unbind(),b.attr("data-action","marks_quitEdit"),b.data("action","marks_quitEdit"),g.on("keydown",function(){a(this).addClass("contentsChanged")}),h.on("keydown",function(){a(this).addClass("contentsChanged")}),g.on("blur",e),h.on("blur",e)},unmark.marks_addNotes=function(b){var c=b.next();b.hide();var d=a(".mark-added-info h1");d.attr("contenteditable",!0).addClass("editable"),c.fadeIn(),c.focus()},unmark.saveNotes=function(a,b,c){if(""!=c){var d="title="+unmark.urlEncode(c)+"&notes="+unmark.urlEncode(b);unmark.ajax("/mark/edit/"+a,"post",d)}},unmark.marks_addLabel=function(b){var c,d,e,f,g,h,i=b.next(),j=b.parent();return i.is(":visible")?i.fadeOut():(i.find("a").unbind(),i.fadeIn(),void i.find("a").on("click",function(k){k.preventDefault(),c=i.data("id"),d=a(this).attr("rel"),f=a(this).text(),g=a("body").attr("class"),h=new RegExp("label"),e="label_id="+d,unmark.ajax("/mark/edit/"+c,"post",e,function(e){i.fadeOut(),b.text(f),unmark.swapClass(b,"label-*","label-"+d),i.find("a").unbind(),unmark.update_label_count(),j.hasClass("sidebar-label")&&(unmark.swapClass(j,"label-*","label-"+d),unmark.swapClass(a("#mark-"+c),"label-*","label-"+d),unmark.update_mark_info(e,c),h.test(g)&&g!=="label-"+d&&(a("#mark-"+c).fadeOut(),unmark.sidebar_collapse()))})}))},unmark.update_mark_info=function(b,c){var d=b.mark;d=JSON.stringify(d),a("#mark-data-"+c).html(d)},unmark.label_list=function(a){var b,c,d=a.labels,e="";for(b in d)c=d[b],e+='<li class="label-'+c.label_id+'"><a href="#" rel="'+c.label_id+'"><span>'+c.name+"</span></a></li>";return e},unmark.marks_quitEdit=function(b){if('EDITING MARK INFO <i class="icon-heading_close"></i>'==b.html()){var c=b.next(),d=a(c).data("id"),e=a("#mark-"+d+" h2"),f=a("#mark-"+d+" .mark-link a").attr("href");c.attr("contenteditable",!1).removeClass("editable"),e.attr("contenteditable",!1).removeClass("editable"),e.html('<a target="_blank" href="'+f+'">'+e.text()+"</a>"),unmark.tagify_notes(c),b.unbind(),c.unbind(),e.unbind(),b.html('Notes (click to edit)<i class="icon-edit"></i>'),b.attr("data-action","marks_editMarkInfo"),b.data("action","marks_editMarkInfo"),setTimeout(function(){b.addClass("action")},500)}},unmark.tagify_notes=function(a){var b=a.text();""!==b?(b=b.replace(/(https?:\/\/[^\]\s]+)(?: ([^\]]*))?/g,"<a target='_blank' href='$1'>$1</a>"),b=b.replace(/#(\S*)/g,'<a href="/marks/tag/$1">#$1</a>')):a.prev().html('Click To Add A Note or Edit Mark <i class="icon-edit"></i>'),a.html(b)},unmark.delete_mark=function(b){var c=b.data("id"),d=b.data("view");unmark.ajax("/mark/delete/"+c,"post","",function(b){"0"===b.mark.active?"bookmarklet"===d?unmark.close_window(!0):(unmark.sidebar_collapse(),a("#mark-"+c).fadeOut()):alert("This mark could not be deleted, please try again laster.")})}}(window.jQuery),function(a){a(document).ready(function(){function b(b){var c=unmark.label_list(b);a("ul.label-choices").prepend(c)}function c(){var b=a(".mark-added").data("label"),c=a(".mark-added").data("label-name");a("#currLabel").addClass("label-"+b).text(c)}unmark.getData("labels",b),a(document).ready(function(){c(),a(".mark-added-notes-area").on("blur keydown",function(b){if(13===b.which||"blur"===b.type){b.preventDefault();var c=a(this).val(),d=a(this).data("id"),e=a(".mark-added-info h1").text();unmark.saveNotes(d,c,e)}})})})}(window.jQuery),function($){unmark.init=function(){this.nav_panel=$(".navigation-pane"),this.main_panel=$(".main-wrapper"),this.main_content=$(".main-content"),this.sidebar_content=$(".sidebar-content"),this.main_panel_width=unmark.main_panel.width(),this.sidebar_default=$(".sidebar-default"),this.sidebar_mark_info=$(".sidebar-mark-info"),this.body_height=$(window).outerHeight(!0),this.special_chars={"\\+":"&#43;"},this.mainpanels=$("#unmark-wrapper");var load=unmark.readQuery("load");load!==!1&&(unmark.overlay(!0),$("#"+load).show().animate({top:0},1e3)),window.unmark_current_page=1,Modernizr.mq("only screen and (min-width: 480px)")&&$("body").animate({opacity:1},1e3),$(".navigation-content a, .navigation-pane-links a").on("click",function(a){unmark.interact_nav(a,$(this))}),$(document).on("mouseenter",".mark",function(){$(this).addClass("hide-dot"),$(this).find(".mark-actions").fadeIn(200)}),$(document).on("mouseleave",".mark",function(){$(this).removeClass("hide-dot"),$(this).find(".mark-actions").fadeOut(200)}),$(document).on("click","button[data-action], .action",function(e){e.preventDefault(),e.stopPropagation();var action=$(this).data("action"),funct;(funct=eval("unmark."+action))($(this))}),$(document).on("click",".sidebar-info-panel h4.prev-coll",function(a){a.preventDefault();var b=$(this).next("section"),c=$(this).find("i");b.is(":visible")?(c.removeClass("icon-up"),c.addClass("icon-down"),b.slideUp()):(c.removeClass("icon-down"),c.addClass("icon-up"),b.slideDown())}),$(document).on("click",".mark",function(a){var b=a.target.className,c=$(this).find("a.mark-info");"icon-check"!==b&&"action mark-archive"!==b&&"hideoutline editable"!==b&&"hideoutline editable contentsChanged"!==b&&unmark.show_mark_info(c),unmark.hideNavigation()}),$("#unmark").length>0&&($(document).pjax("a[href*='/']",unmark.main_content),$(document).on("submit","#search-form",function(a){$.pjax.submit(a,unmark.main_content)}),$(document).on("pjax:complete",function(){Modernizr.mq("only screen and (max-width: 480px)")&&unmark.mobile_nav(!0),window.unmark_current_page=1,unmark.main_content.scrollTop(0),unmark.main_content.find(".marks").hide().fadeIn(),unmark.updateDom()})),$("form.ajaxsbmt").on("submit",function(e){e.preventDefault();var form=$(this),formid=form.attr("id");funct=eval("unmark."+formid),funct(form,e)}),$("#helperforms input.field-input").on("keydown change",function(){$(this).parent().parent().find(".response-message").hide()}),$(document).on("click","#unmarkModalClose",function(a){return a.preventDefault(),unmark.overlay(!1)}),$(document).on("mouseenter",".label-choices li, .sidebar-label-list li",function(){var a=$(this),b=a.find("span").text(),c=a.attr("class");$("#label-chosen").show().text(b).removeClass().addClass(c)}),$(document).on("mouseleave",".label-choices li, .sidebar-label-list li",function(){$("#label-chosen").show().hide()}),unmark.main_content.on("scroll",function(){unmark.scrollPaginate($(this))}),$("#importerUnmark").change(function(){return $("#importForm").submit()}),$("#importerReadability").change(function(){return $("#importFormReadability").submit()}),$(".importerHTML").change(function(){return $("#importFormHTML").submit()})},$(document).ready(function(){unmark.init()})}(window.jQuery);