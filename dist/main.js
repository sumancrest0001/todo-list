!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,o){var n=o(1),r=o(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(n(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function c(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function d(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],d=t.base?i[0]+t.base:i[0],l=o[d]||0,s="".concat(d," ").concat(l);o[d]=l+1;var u=c(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:b(p,t),references:1}),n.push(s)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,v=0;function b(e,t){var o,n,r;if(t.singleton){var i=v++;o=m||(m=l(t)),n=p.bind(null,o,i,!1),r=p.bind(null,o,i,!0)}else o=l(t),n=f.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=c(o[n]);a[r].references--}for(var i=d(e,t),l=0;l<o.length;l++){var s=c(o[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}o=i}}}},function(e,t,o){(t=o(3)(!1)).push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none;list-style-type:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.project-section{padding:50px 30px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);background-image:linear-gradient(to right, #81ceca, #61da89);min-height:100vh;align-content:flex-start}.section-head{font-size:30px;font-weight:700;color:#000;margin-bottom:10px}.add-project{border:none;border-bottom:2px,solid,#9ac6ec;border-bottom:solid;font-size:16px;height:30px;margin-bottom:15px;padding:8px}.project{display:flex;justify-content:space-between;align-items:center;height:50px;text-align:start;border-top:2px solid aliceblue;padding-left:0}.project-title{font-size:1.5rem;font-weight:bold}.project-title:hover{transform:scale(1.2);transition:ease-in-out}.todo-section{margin-left:40px;padding:30px;background-image:linear-gradient(to left bottom, #81ceca, #61da89)}.todo-head{display:flex;flex-direction:row;justify-content:space-between;font-size:30px;font-weight:700;margin-bottom:10px}.todo-head p{color:#57b67b}.todo-head p:hover{transform:scale(1.3);transition:ease-in-out}.new-form{margin:auto;padding:10px}.new-form input,.new-form textarea{margin:10px;margin-left:0;padding:5px;border:none;border-bottom:2px solid}.todo-list{color:#288a61}.todo-title{flex-direction:row;padding:10px;font-size:16px;font-weight:700}.todo-title:hover{transform:scale(1.1);transition:ease-out}.todo-item{background-color:#fff}i{padding:5px}.delete-icon:hover,.edit-icon:hover{transform:scale(2)}.footer-section{padding:10px;background-color:black;color:#fff;position:sticky}\n",""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([r]).join("\n")}var a,c,d;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&r[d[0]]||(o&&(d[2]?d[2]="".concat(o," and ").concat(d[2]):d[2]=o),t.push(d))}},t}},function(e,t,o){"use strict";o.r(t);o(0);function n(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r=[];function i(){var e=JSON.parse(localStorage.getItem("projects")),t=document.querySelector(".project-list");t.classList.add("row"),function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(t),null!==e&&e.forEach((function(e){var o=document.createElement("div");o.classList.add("project","col-12");var n=document.createElement("h2");n.classList.add("project-title"),n.setAttribute("id",e.id),n.textContent=e.title;var r=document.createElement("i");r.classList.add("fa","fa-window-close","project-delete-icon"),o.append(n),o.append(r),t.append(o)}))}var a={newProject:document.querySelector(".add-project"),projectDiv:document.querySelector(".project-list"),project:document.querySelector(".project"),projectTitle:document.querySelector(".project-title"),deleteProject:document.querySelector(".project-delete-icon"),newTodo:document.querySelector(".new-todo"),todoTitle:document.querySelector("#todoTitle"),todoDue:document.querySelector("#todoDue"),priority:document.querySelector("#priority"),todoDescription:document.querySelector("#todoDescription"),newTodoBtn:document.querySelector("#add-todo"),deleteTodo:document.querySelector(".delete-icon"),editTodo:document.querySelector(".edit-icon")},c=document.querySelector(".todo-section");function d(e){c.innerHTML+='<div class="col-12 todo-head">\n                        <h2 class="todo-head">List of TODOs</h2>\n                        <p><i class="fa fa-plus-circle new-todo"></i></p>\n                      </div>',c.innerHTML+='<div class=" row todo-form">\n                          <form class="new-form">\n                            <input type="text" id="todoTitle" placeholder="Enter title"><br>\n                            <input type="date" id="todoDue" placeholder="Add due date"><br>\n                            <select id="priority" name="priority">\n                              <option value="urgent">Urgent</option>\n                              <option value="high">High</option>\n                              <option value="normal">Normal</option>\n                              <option value="low">Low</option>\n                            </select><br>\n                            <textarea id="todoDescription" rows="3" cols="30" placeholder="Add description"></textarea><br>\n                            <button class="btn-lg btn-success" id="add-todo">Add</button>\n                          </form>\n                        </div>',function(e){var t=e.todoList,o=document.createElement("div");o.classList.add("todo-list","col-12"),t.forEach((function(e){var t=document.createElement("div"),n=document.createElement("div");t.classList.add("todo-item","row","my-3"),t.setAttribute("id",e.id),n.classList.add("todo-title","col-9");var r=document.createElement("div"),i=document.createElement("i"),a=document.createElement("i"),c=document.createElement("i");r.classList.add("todo-icons"),i.classList.add("fa","fa-chevron-right"),a.classList.add("fa","fa-window-close","delete-icon","col-6"),c.classList.add("fa","fa-pencil","edit-icon");var d=document.createElement("span");d.textContent=e.title,n.append(i),n.append(d),t.append(n),t.append(r),r.append(a),r.append(c),o.append(t)})),c.append(o)}(e)}function l(e){var t,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return{title:e,id:t,todoList:o}}(e);t=o,r.push(t),t.id=r.indexOf(t),localStorage.setItem("projects",JSON.stringify(r)),i(),a.newProject.value=""}var s,u,p,f=(s=function(e){"Enter"===e.key&&l(a.newProject.value)},u=function(e){var t=e.currentTarget.id;d(r[t])},{eventHandler:function(){a.newProject.addEventListener("keypress",s),a.projectDiv.addEventListener("click",u)}});(p=JSON.parse(localStorage.getItem("projects")))&&(r=n(p)),i(),f.eventHandler()}]);