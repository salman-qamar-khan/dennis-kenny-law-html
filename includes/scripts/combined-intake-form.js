function addMarketingFields(t){if("undefined"!=typeof visitorId){var e=document.createElement("input");e.type="hidden",e.value=visitorId,e.name="adobeVisitorId",t.appendChild(e)}if("undefined"!=typeof reportSuite){var r=document.createElement("input");r.type="hidden",r.value=reportSuite,r.name="adobeReportSuites",t.appendChild(r)}if("undefined"!=typeof transactionId){var i=document.createElement("input");i.type="hidden",i.value=transactionId,i.name="adobeTransactionId",t.appendChild(i)}}function addgmttime(form){var da=new Date,cookie_set="",str=da.toGMTString(),dgmt=Date.parse(str),cookie_set=!1;if(eval(document.forms[0])){var e=document.createElement("input");e.type="hidden",e.value=dgmt,e.name="loadgmttime",form.appendChild(e);var d=document.createElement("input");d.type="hidden",d.value=str,d.name="dformat",form.appendChild(d)}if(SetCookie("subid","findlawsession",1),ReadCookie("subid")?(cookie_set="enabled",DeleteCookie("subid")):cookie_set="disabled",eval(document.forms[0])){var c=document.createElement("input");c.type="hidden",c.value=cookie_set,c.name="cookie",form.appendChild(c)}}function SetCookie(t,e,r){var i=new Date,a=new Date;null!=r&&0!=r||(r=1),a.setTime(i.getTime()+864e5*r),document.cookie=t+"="+e+";expires="+a.toGMTString()}function ReadCookie(t){var e=""+document.cookie,r=e.indexOf(t);if(r==-1||""==t)return"";var i=e.indexOf(";",r);return i==-1&&(i=e.length),e.substring(r+t.length+1,i)}function DeleteCookie(t){var e=new Date,r=new Date;r.setTime(e.getTime()-864e5),document.cookie=t+"= ;expires="+r.toGMTString()}function trim(t){return t.replace(/^\s+|\s+$/g,"")}function ltrim(t){return t.replace(/^\s+/,"")}function rtrim(t){return t.replace(/\s+$/,"")}function formValidation(t){function e(e){for(var r=$.makeArray(t.find(e)),i=0,a=0;a<r.length;a++){var n=$(r[a]),o=n.val();n.attr("id");if(0!=o.trim().length&&o!=n.attr("title")||(i+=1),i==r.length){return showError($(r[0]).attr("id"))}}return!0}function r(e,r){var i=$.makeArray(t.find(e));if(null!=i&&i.length>0){if(i[0].checked)for(var a=$.makeArray(t.find(r)),n=0;n<a.length;n++){var o=$(a[n]),s=o.val(),d=o.attr("id");if(!(s=s.trim())||s==o.attr("title"))return showError(d)}}return!0}var i={};$("#formError").addClass("formHide"),$("#formError").removeAttr("id"),dataCount=t.find(".dataCheck").length,dataCount=0,validateCount=t.find(".validate").length,validatedCount=0;for(var a=$.makeArray(t.find(".dataCheck")),n=$.makeArray(t.find(".validate")),o=0;o<a.length;o++){var s=$(a[o]),d=s.val(),l=s.attr("id"),f=s.attr("name");if(v=!1,d=d.trim(),s.hasClass("text")&&d.length>0&&d!=s.attr("title")){if(d.length<=0)return showError(l);v=!0}if(s.hasClass("email")&&d.length>0&&d!=s.attr("title")){if(!d.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/))return showError(l);v=!0}if(s.hasClass("number")&&d.length>0&&d!=s.attr("title"))if(f.indexOf("at:phone")!=-1||f.indexOf("at:mobile_phone")!=-1||f.indexOf("at:home_phone")||f.indexOf("at:business_phone")!=-1){if(!d.match(/^[\d\- \+\(\)\.]+$/))return showError(l)}else if(!d.match(/^[\d\- \+\(\)]+$/))return showError(l);if(s.hasClass("zipcode")&&d.length>0&&d!=s.attr("title")){if(!d.match(/^\d+$/))return showError(l);v=!0}}var h=e(".firstOrLast");if(0==h)return!1;if(0==(h=e(".emailOrPhone")))return!1;if(0==(h=r(".depKey_Email",".depValue_Email")))return!1;if(0==(h=r(".depKey_Phone",".depValue_Phone")))return!1;for(var o=0;o<n.length;o++){var c=$(n[o]),m=c.val(),u=c.attr("id"),p=c.attr("name"),v=!1;if(c.hasClass("text")){if(!m||m==c.attr("title"))return showError(u);v=!0}if(c.hasClass("email")){if(!m.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)||m==c.attr("title"))return showError(u);v=!0}if(c.hasClass("number")){if(p.indexOf("at:phone")!=-1||p.indexOf("at:mobile_phone")!=-1||p.indexOf("at:home_phone")!=-1||p.indexOf("at:business_phone")!=-1){if(!m.match(/^[\d\- \+\(\)\.]+$/)||m==c.attr("title"))return showError(u)}else if(!m.match(/^[\d\- \+\(\)]+$/)||m==c.attr("title"))return showError(u);v=!0}if(m.trim().length<=0)return showError(u);if(c.hasClass("zipcode")){if(!m.match(/^\d+$/)||m==c.attr("title"))return showError(u);v=!0}if(c.hasClass("select")){if("DID NOT RESPOND"==m)return showError(u);v=!0}if(c.hasClass("radio")){var p=c.attr("name");if(v=!0,!i[p]&&(i[p]=!0,!t.find('input[name="'+p+'"]:checked').length))return showError(u)}if(c.hasClass("checkbox")){var p=c.attr("name");if(v=!0,!i[p]){i[p]=!0;var g=t.find('input[name="'+p+'"]:checked').length,k=c.attr("class");if(k.indexOf("exactly")>-1&&g!=k.replace(/.*(exactly)(\d+)?.*/gi,"$2"))return showError(u);if(k.indexOf("atLeast")>-1&&g<k.replace(/.*(atLeast)(\d+)?.*/gi,"$2"))return showError(u);if(k.indexOf("atMost")>-1&&g>k.replace(/.*(atMost)(\d+)?.*/gi,"$2"))return showError(u);if(!g&&k.match(/exactly||atLeast||atMost/))return showError(u)}}if(!v&&!m)return showError(u)}return!0}function showError(t){var e=$('p.formHide[data-for="'+t+'"]');return 0==e.length&&(e=$('label.formHide[for="'+t+'"]')),e.attr("id","formError"),$("#formError").removeClass("formHide"),location.href="#formError",!1}$('script[src$="autofillFSP.js"]:first').attr("hasexecuted")||($(document).ready(function(){$(".formAutoFill").each(function(){$(this).find('input[type="text"],textarea').focus(function(){$(this).val()==$(this).attr("title")&&$(this).val(""),$(this).css({fontWeight:"normal"})}),$(this).find("input:text,textarea").blur(function(){$(this).val()||$(this).val($(this).attr("title")),$(this).val()==$(this).attr("title")&&$(this).parent().parent().find('label[for="'+$(this).attr("id")+'"] strong').length&&$(this).css({fontWeight:"bold"})}),$(this).find('input[type="text"],textarea').each(function(){var t=$(this).parent().parent().find('label[for="'+$(this).attr("id")+'"]:not(.formHide)');t.find('input[type="text"]').length||t.addClass("formLabelHide"),$(this).val($(this).attr("title")),t.find("strong").length&&$(this).css({fontWeight:"bold"})})})}),$('script[src$="autofillFSP.js"]:first').attr("hasexecuted",!0)),$('script[src$="formValidationFSP.js"]:first').attr("hasexecuted")||(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")},$(document).ready(function(){$('form[id^="intakeForm"],form[id^="blogCommentForm"]').submit(function(){if(!formValidation($(this)))return $("#comment-submit").removeAttr("disabled"),!1;$(this).find("input[title],textarea[title]").each(function(){$(this).attr("title")==$(this).val()&&$(this).val("")}),$("form").each(function(){return addgmttime(this),addMarketingFields(this),!0})}),$("#intakeFormShortAutofill,#intakeFormShort").each(function(){$("#intakeFormShortDisclaimer a").click(function(){$("#intakeFormShortDisclaimer").slideToggle(200)}),$(this).find("a.intakeFormShortDisclaimerLink").each(function(){$(this).attr("href","#intakeFormShortDisclaimer"),$(this).click(function(){var t=$(this)[0].offsetWidth+$(this).offset().left+300,e=$(window).width(),r=$(this).offset().left+$(this).width()+10;t>e&&(r-=320+$(this).width()),$("#intakeFormShortDisclaimer").css({position:"absolute",left:r,top:$(this).offset().top}),$("#intakeFormShortDisclaimer").slideToggle(200)})})}),$('form[id^="emailObfuscation"]').each(function(){function t(){var t=location.href;if(t.indexOf("JSPeditPageContent.do")>-1)return!0;if(t.indexOf("guid=")>-1){var e=t.replace(/.*guid=([^=]*=).*/gi,"$1");return $("#guid").val(e),!0}return alert("An error occured. Please use the back button on your browser and click on the e-mail link again."),!1}$(this).submit(function(){if(!t())return!1;if(!formValidation($(this)))return!1;$("#email_subject").val($("#emailObfuscationSubject").val());var e=location.href;if(e.indexOf("attorneyName=")>-1){var r=e.replace(/.*(attorneyName=(.*))/gi,"$2");r=r.replace(/%20/gi," ");var i="FindLaw FirmSite Message for ".concat(r);$("#email_subject").val(i)}$("#emailObfuscationCopyMe").attr("checked")?$("#copymeEmail").val($("#emailObfuscationEmailAddress").val()):$("#copymeEmail").val(""),$("form").each(function(){return addgmttime(this),!0})}),t(),$(".formHasJavaScript").removeClass("formHasJavaScript"),$("#formNoJavaScript").remove()})}),$('script[src$="formValidationFSP.js"]:first').attr("hasexecuted",!0));