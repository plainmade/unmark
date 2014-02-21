/*! Unmark Internal - http://unmark.it - v0.3.5 - 2014-02-21 - http://plainmade.com */ 
if(void 0===unmark)var unmark={};if(unmark.template=unmark.template||{},unmark.template.sidebar='<div class="sidebar-action"><a class="action" data-action="sidebar_collapse" href="#"><i class="icon-heading_close"></i></a></div><div class="sidebar-label label-{{label_id}}"><span id="label-chosen"></span><a class="action" data-action="marks_addLabel" href="#" data-id="{{mark_id}}">{{label_name}}</a><ul class="sidebar-label-list" data-id="{{mark_id}}"></ul></div><div class="sidebar-info-panel">{{#embed}}<h4 class="prev-coll">Preview <i class="icon-up"></i></h4><section class="sidebar-info-preview">{{{embed}}}</section>{{/embed}}<h4 class="action" data-action="marks_editNotes">Notes <i class="icon-edit"></i></h4><section id="notes-{{mark_id}}" data-id="{{mark_id}}" class="sidebar-info-notes hideoutline">{{{notes}}}</section></div>{{#archived_on}}<button data-id="{{mark_id}}" data-view="sidebar" data-action="delete_mark">Delete Link</button>{{/archived_on}}',unmark.template.marks='<div id="mark-{{mark_id}}" class="mark label-{{label_id}}"><h2><a target="_blank" href="{{url}}">{{title}}</a></h2><div class="mark-meta"><span class="mark-date">{{nice_time}}</span><span class="mark-sep">•</span><span class="mark-link"><a target="_blank" href="{{url}}">{{prettyurl}}</a></span></div><div class="mark-actions" style="display: none;"><a class="action mark-info" href="#" data-action="show_mark_info" data-mark="mark-data-{{mark_id}}"><i class="icon-ellipsis"></i></a>{{#archived_on}}<a title="Unarchive Mark" class="action mark-archive" data-action="mark_restore" href="#" data-id="{{mark_id}}"><i class="icon-label"></i></a>{{/archived_on}}{{^archived_on}}<a title="Archive Mark" class="action mark-archive" data-action="mark_archive" href="#" data-id="{{mark_id}}"><i class="icon-check"></i></a>{{/archived_on}}</div><div class="note-placeholder"></div><script id="mark-data-{{mark_id}}" type="application/json">{"mark_id":"{{mark_id}}","label_id":"{{label_id}}","label_name":"{{label_name}}","notes":"{{notes}}",{{#embed}}"preview":{{embed}},{{/embed}}"archived":{{active}}}</script></div>',void 0===unmark)var unmark={};(function(e){unmark.ajax=function(t,a,n,i,r,o){var l=unmark.urlEncode(unmark.vars.csrf_token),r=void 0!==r?r:"json",o=void 0!==o?o:!0,s="csrf_token="+l+"&content_type="+r;n=unmark.empty(n)?s:n+"&"+s,e.ajax({dataType:r,cache:!1,url:t,type:a.toUpperCase(),data:n,async:o,success:function(t){e.isFunction(i)&&i(t)},error:function(t,a,n){var r={error:n,status:a,request:t};e.isFunction(i)&&i(r)}})},unmark.swapClass=function(t,a,n){var i=t;if(-1===a.indexOf("*"))return i.removeClass(a),n?i.addClass(n):i;var r=RegExp("\\s"+a.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return i.each(function(t,a){for(var n=" "+a.className+" ";r.test(n);)n=n.replace(r," ");a.className=e.trim(n)}),n?i.addClass(n):i},unmark.replaceSpecial=function(e){if(void 0!==e&&null!==e){var t=null;for(var a in unmark.special_chars)t=RegExp(a,"gi"),e=e.replace(t,unmark.special_chars[a])}return e},unmark.urlEncode=function(e){return e=unmark.replaceSpecial(e),encodeURIComponent(e)},unmark.empty=function(e){var t=void 0!==e&&null!==e?e.length:0;return e===!1||""===e||null===e||0===e||void 0===e||1>t},unmark.createCookie=function(e,t,a){if(a){var n=new Date;n.setTime(n.getTime()+1e3*60*60*24*a);var i="; expires="+n.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"},unmark.readCookie=function(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;a.length>n;n++){for(var i=a[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null},unmark.prettyLink=function(e){return e=e.replace(/https?:\/\/(www.)?/,""),"/"===e.substr(-1)&&(e=e.substr(0,e.length-1)),e}})(window.jQuery),function(e){unmark.updateDom=function(){var t=e("div.marks").data("label-class"),a=e("body");a.removeClass().addClass(t),this.update_mark_action_btns(),unmark.page_setup(e("body").height())},unmark.sidebar_collapse=function(){e(".mark").removeClass("view-inactive").removeClass("view-active"),unmark.sidebar_mark_info.fadeOut(400,function(){unmark.sidebar_default.fadeIn(400)})},unmark.hideNavigation=function(){unmark.nav_panel.animate({left:-285},{duration:200,queue:!1}),unmark.main_panel.animate({left:65},{duration:200,queue:!1}),e(".nav-panel").hide(),e(".menu-item").removeClass("active-menu"),e(".navigation-pane-links").show(),e(".menu-activator i").removeClass("icon-menu_close").addClass("icon-menu_open")},unmark.interact_nav=function(t,a){var n=a.attr("href"),i=n.replace(/^#/,""),r=parseInt(a.attr("rel")),o=r+65,l=a.parent(),s=parseInt(unmark.nav_panel.css("left"));return unmark.sidebar_collapse(),n.match(/\//)?(unmark.hideNavigation(),!0):(t.preventDefault(),l.hasClass("active-menu")?(e(".menu-item").removeClass("active-menu"),unmark.hideNavigation()):(e(".menu-item").removeClass("active-menu"),e(".navigation-content").find("[data-menu='"+i+"']").addClass("active-menu"),"#panel-menu"===n&&s>0?unmark.hideNavigation():(e(".menu-activator i").removeClass("icon-menu_open").addClass("icon-menu_close"),unmark.nav_panel.animate({left:65},{duration:200,queue:!1}),unmark.main_panel.animate({left:o},{duration:200,queue:!1}),unmark.nav_panel.animate({width:r},200),unmark.nav_panel.find(".nav-panel").animate({width:r},200),"#panel-menu"===n?(e(".navigation-pane-links").show(),e(".nav-panel").hide()):(e(".navigation-pane-links").hide(),e(".nav-panel").not(n).hide(),e(n).show()),void 0)))},unmark.scrollPaginate=function(e){var t,a,n,i,r,o="",i=window.unmark_current_page+1,l=window.unmark_total_pages;e.scrollTop()+e.innerHeight()>=e[0].scrollHeight&&l>=i&&(n=Hogan.compile(unmark.template.marks),t=window.location.pathname,unmark.ajax(t+"/"+i,"post","",function(e){if(e.marks){for(r=Object.keys(e.marks).length,a=1;r>a;a++)e.marks[a].prettyurl=unmark.prettyLink(e.marks[a].url),o+=n.render(e.marks[a]);unmark.main_content.find(".marks_list").append(o),window.unmark_current_page=i,unmark.update_mark_action_btns()}}))},unmark.updateCounts=function(){unmark.getData("stats",function(t){var a=t.stats.archived,n=t.stats.saved,i=t.stats.marks;e(".na-today").text(a.today),e(".ns-year").text(i["ages ago"]),unmark.createGraph(a["4 days ago"],a["3 days ago"],a["2 days ago"],a.yesterday,a.today,n["4 days ago"],n["3 days ago"],n["2 days ago"],n.yesterday,n.today)})},unmark.getData=function(e,t){unmark.ajax("/marks/get/"+e,"post","",t)},unmark.close_window=function(){window.close()},unmark.dismiss_this=function(e){e.parent().parent().fadeOut()},unmark.page_setup=function(t){unmark.main_content.height(t),unmark.sidebar_content.height(t),e(".nav-panel").height(t),e("body").height(t)},unmark.overlay=function(t){if(t){unmark.mainpanels.addClass("blurme");var a=e('<div id="unmark-overlay"><a href="#" id="unmarkModalClose"><i class="icon-big_close"></i></a></div>');a.appendTo(document.body)}else e("#resetPasswordForm").hide().css("top","-300px"),e("#changePasswordForm").hide().css("top","-300px"),unmark.mainpanels.removeClass("blurme"),e("#unmark-overlay").remove()},unmark.awesome=function(){return alert("Awesome Enabled! (this does nothing)")}}(window.jQuery),function(e){unmark.show_mark_info=function(t){function a(t){var a=unmark.label_list(t);e("ul.sidebar-label-list").prepend(a)}var n,i,r=t.data("mark"),o=e("#"+r).html(),l=jQuery.parseJSON(o),s=r.replace("mark-data-",""),c=e("#mark-"+s).find(".note-placeholder").text();e(".mark").removeClass("view-inactive").removeClass("view-active"),e(".mark").not("#mark-"+s).addClass("view-inactive"),e("#mark-"+s).addClass("view-active"),""!==c&&(l.notes=c),n=Hogan.compile(unmark.template.sidebar),i=n.render(l),unmark.sidebar_mark_info.fadeOut(400,function(){unmark.sidebar_default.is(":visible")?unmark.sidebar_default.fadeOut(400,function(){unmark.sidebar_mark_info.html(i).fadeIn(400,function(){unmark.tagify_notes(e("#notes-"+s)),unmark.getData("labels",a)})}):unmark.sidebar_mark_info.html(i).fadeIn(400,function(){unmark.tagify_notes(e("#notes-"+s)),unmark.getData("labels",a)})})},unmark.update_label_count=function(){function t(e){var t,n,i=e.labels;for(t in i)n=i[t].total_active_marks,"1"===n?n+=" link":"0"===n?n="no links":n+=" links",a.find(".label-"+i[t].label_id+" span").text(n)}var a=e("ul.label-list");unmark.getData("labels",t),unmark.updateCounts()},unmark.get_mark_info=function(t){var a;unmark.ajax("/mark/info/"+t,"post","",function(n){a=n.mark,a=JSON.stringify(a),e("#mark-data-"+t).html(a)})},unmark.mark_archive=function(t){var a=t.data("id");unmark.ajax("/mark/archive/"+a,"post","",function(t){null!==t.mark.archived_on?(e("#mark-"+a).fadeOut(),unmark.sidebar_collapse(),unmark.update_label_count()):alert("Sorry, We could not archive this mark at this time.")})},unmark.mark_restore=function(t){var a=t.data("id");unmark.ajax("/mark/restore/"+a,"post","",function(t){null===t.mark.archived_on?(e("#mark-"+a).fadeOut(),unmark.sidebar_collapse()):alert("Sorry, We could not restore this mark at this time.")})},unmark.archive_all=function(){unmark.ajax("/marks/archive/old","post","",function(e){e.archived===!0?window.location="/marks":alert("Sorry, We could not archive the links at this time. Please try again.")})},unmark.marks_editNotes=function(t){var a,n,i=t.next();i.unbind(),t.html("EDIT NOTES"),i.attr("contenteditable",!0),i.find("span.action").remove(),i.is(":empty")&&i.html("Click here to edit"),i.on("blur keydown",function(r){(13===r.which||"blur"===r.type)&&(r.preventDefault(),a=e(this).text(),id=e(this).data("id"),"Click here to edit"===a?e(this).empty().html('<span class="action" data-action="marks_clickEdit">Add a note or #hashtags ...</span>'):(n="notes="+unmark.urlEncode(a),unmark.ajax("/mark/edit/"+id,"post",n,function(){t.html('Notes <i class="icon-edit"></i>'),i.attr("contenteditable",!1),e("#mark-"+id).find(".note-placeholder").text(i.text())}),i.unbind(),unmark.tagify_notes(i)))})},unmark.marks_clickEdit=function(e){e.parent().prev().trigger("click")},unmark.marks_addNotes=function(t){var a,n,i=t.next();return i.is(":visible")?i.slideUp():(i.unbind(),i.slideDown(),i.attr("contenteditable",!0),i.is(":empty")&&i.html("Type note text here..."),i.on("blur keydown",function(t){(13===t.which||"blur"===t.type)&&(t.preventDefault(),a=e(this).text(),id=e(this).data("id"),n="notes="+unmark.urlEncode(a),unmark.ajax("/mark/edit/"+id,"post",n,function(){i.attr("contenteditable",!1),i.slideUp(),i.prev().text("Edit Note")}),i.unbind())}),void 0)},unmark.marks_addLabel=function(t){var a,n,i,r,o,l,s=t.next(),c=t.parent();return s.is(":visible")?s.fadeOut():(s.find("a").unbind(),s.fadeIn(),s.find("a").on("click",function(u){u.preventDefault(),a=s.data("id"),n=e(this).attr("rel"),r=e(this).text(),o=e("body").attr("class"),l=RegExp("label"),i="label_id="+unmark.urlEncode(n),unmark.ajax("/mark/edit/"+a,"post",i,function(){s.fadeOut(),t.text(r),unmark.swapClass(t,"label-*","label-"+n),s.find("a").unbind(),c.hasClass("sidebar-label")&&(unmark.swapClass(c,"label-*","label-"+n),unmark.swapClass(e("#mark-"+a),"label-*","label-"+n),unmark.get_mark_info(a),unmark.update_label_count(),l.test(o)&&o!=="label-"+n&&(e("#mark-"+a).fadeOut(),unmark.sidebar_collapse()))})}),void 0)},unmark.label_list=function(e){var t,a,n=e.labels,i="";for(t in n)a=n[t],i+='<li class="label-'+a.label_id+'"><a href="#" rel="'+a.label_id+'"><span>'+a.name+"</span></a></li>";return i},unmark.tagify_notes=function(e){var t=e.text();t=""===t?'<span class="action" data-action="marks_clickEdit">Add a note or #hashtags ...</span>':t.replace(/#(\S*)/g,'<a href="/marks/tag/$1">#$1</a>'),e.html(t)},unmark.delete_mark=function(t){var a=t.data("id"),n=t.data("view");unmark.ajax("/mark/delete/"+a,"post","",function(t){"0"===t.mark.active?"bookmarklet"===n?unmark.close_window():(unmark.sidebar_collapse(),e("#mark-"+a).fadeOut()):alert("This mark could not be deleted, please try again laster.")})},unmark.update_mark_action_btns=function(){e(".mark").each(function(){var t=e(this).outerHeight(!0),a=t/2;e(this).find(".mark-actions a").each(function(){e(this).height(a)})})}}(window.jQuery),function(e){function t(e,t,a){var n=t?"error":"";e.parent().find(".response-message").removeClass("error").addClass(n).text(a).fadeIn()}function a(e,t){var a=e.find(".login-submit i");t?a.removeClass("icon-go").addClass("icon-spinner"):a.removeClass("icon-spinner").addClass("icon-go")}unmark.logout=function(){window.location="/logout"},unmark.change_password=function(){unmark.overlay(!0),e("#resetPasswordForm").show().animate({top:0},1e3)},unmark.change_email=function(){unmark.overlay(!0),e("#changePasswordForm").show().animate({top:0},1e3)},unmark.send_password_change=function(n){var i,r=e("#pass1, #pass2"),o=e("#oldpass"),l=e("#oldpass").val(),s=e("#pass1").val(),c=e("#pass2").val();return a(n,!0),s!==c?(r.val(""),a(n,!1),t(n,!0,"New Passwords do not match")):(i="password="+s+"&current_password="+l,unmark.ajax("/user/update/password","post",i,function(e){e.success?t(n,!1,"Your password has been changed."):t(n,!0,e.message),a(n,!1),r.val(""),o.val("")}),void 0)},unmark.send_email_change=function(n){var i,r=e("#emailupdate"),o=r.val();return a(n,!0),""===o?(r.val(""),a(n,!1),t(n,!0,"Please enter something!")):(i="email="+o,unmark.ajax("/user/update/email","post",i,function(i){i.success?(t(n,!1,"Your email has been changed."),e("#user-email").empty().text("[ "+o+" ]")):t(n,!0,i.message),a(n,!1),r.val("")}),void 0)}}(window.jQuery),function($){unmark.init=function(){this.nav_panel=$(".navigation-pane"),this.main_panel=$(".main-wrapper"),this.main_content=$(".main-content"),this.sidebar_content=$(".sidebar-content"),this.main_panel_width=unmark.main_panel.width(),this.sidebar_default=$(".sidebar-default"),this.sidebar_mark_info=$(".sidebar-mark-info"),this.body_height=$(window).outerHeight(!0),this.special_chars={"\\+":"&#43;"},this.mainpanels=$("#unmark-wrapper"),unmark.main_panel.width(unmark.main_panel_width),unmark.page_setup(unmark.body_height),$(window).on("resize",function(){unmark.page_setup($(window).outerHeight(!0))}),window.unmark_current_page=1,$("body").animate({opacity:1},1e3),$(".navigation-content a, .navigation-pane-links a").on("click",function(e){unmark.interact_nav(e,$(this))}),unmark.update_mark_action_btns(),$(document).on("mouseenter",".mark",function(){$(this).addClass("hide-dot"),$(this).find(".mark-actions").show()}),$(document).on("mouseleave",".mark",function(){$(this).removeClass("hide-dot"),$(this).find(".mark-actions").hide()}),$(document).on("click","button[data-action], .action",function(e){e.preventDefault();var action=$(this).data("action"),funct;funct=eval("unmark."+action),funct($(this)),unmark.hideNavigation()}),$(document).on("click",".sidebar-info-panel h4.prev-coll",function(e){e.preventDefault();var t=$(this).next("section"),a=$(this).find("i");t.is(":visible")?(a.removeClass("icon-up"),a.addClass("icon-down"),t.slideUp()):(a.removeClass("icon-down"),a.addClass("icon-up"),t.slideDown())}),$(document).on("click",".mark",function(e){var t=e.target.nodeName,a=$(this).find("a.mark-info");"A"!==t&&"I"!==t&&e.preventDefault(),"I"!==t&&unmark.show_mark_info(a),unmark.hideNavigation()}),$("#unmark").length>0&&($(document).pjax("a[href*='/']",unmark.main_content),$(document).on("submit","#search-form",function(e){$.pjax.submit(e,unmark.main_content)}),$(document).on("pjax:complete",function(){window.unmark_current_page=1,unmark.main_content.scrollTop(0),unmark.main_content.find(".marks").hide().fadeIn(),unmark.updateDom()})),$("#passwordUpdate").on("submit",function(e){e.preventDefault(),unmark.send_password_change($(this))}),$("#emailUpdate").on("submit",function(e){e.preventDefault(),unmark.send_email_change($(this))}),$("#helperforms input.field-input").on("keydown change",function(){$(this).parent().parent().find(".response-message").hide()}),$(document).on("click","#unmarkModalClose",function(e){return e.preventDefault(),unmark.overlay(!1)}),$(document).on("mouseenter",".label-choices li, .sidebar-label-list li",function(){var e=$(this),t=e.find("span").text(),a=e.attr("class");$("#label-chosen").show().text(t).removeClass().addClass(a)}),$(document).on("mouseleave",".label-choices li, .sidebar-label-list li",function(){$("#label-chosen").show().hide()}),unmark.main_content.on("scroll",function(){unmark.scrollPaginate($(this))})},$(document).ready(function(){unmark.init()})}(window.jQuery);