!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=4)}([function(e,t,o){var n=o(1),r=o(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},a=(n(r,i),r.locals?r.locals:{});e.exports=a},function(e,t,o){"use strict";var n,r=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},i=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),a=[];function d(e){for(var t=-1,o=0;o<a.length;o++)if(a[o].identifier===e){t=o;break}return t}function c(e,t){for(var o={},n=[],r=0;r<e.length;r++){var i=e[r],c=t.base?i[0]+t.base:i[0],l=o[c]||0,s="".concat(c," ").concat(l);o[c]=l+1;var u=d(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:h(p,t),references:1}),n.push(s)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var r=o.nc;r&&(n.nonce=r)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,o,n){var r=o?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,o){var n=o.css,r=o.media,i=o.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var m=null,v=0;function h(e,t){var o,n,r;if(t.singleton){var i=v++;o=m||(m=l(t)),n=p.bind(null,o,i,!1),r=p.bind(null,o,i,!0)}else o=l(t),n=f.bind(null,o,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var o=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<o.length;n++){var r=d(o[n]);a[r].references--}for(var i=c(e,t),l=0;l<o.length;l++){var s=d(o[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}o=i}}}},function(e,t,o){(t=o(3)(!1)).push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none;list-style-type:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.content{margin:auto}.project-section{padding:20px 10px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);background-image:linear-gradient(to right, #81ceca, #61da89);min-height:100vh;align-content:flex-start}.section-head{font-size:30px;font-weight:700;color:#000;margin-bottom:10px}.add-project{width:100%;border:none;border-bottom:2px,solid,#9ac6ec;border-bottom:solid;font-size:16px;height:30px;padding:8px}.project{display:flex;justify-content:space-between;align-items:center;text-align:start;background-color:#b5b9b7;border:2px solid #8d8a8a;border-radius:5px;padding:5px 5px 5px 15px;margin:15px 0}.project-title{width:inherit;overflow:hidden;font-size:1.5rem;font-weight:bold}.project-delete-icon{visibility:hidden;opacity:0;transition:all 0.5s}.project:hover .project-delete-icon{opacity:1;visibility:visible}.selected{color:#fff;transform:translateY(-2px);box-shadow:0 0.7rem 3rem rgba(101,90,86,0.08)}.todo-section{margin-left:40px;padding:30px;background-image:linear-gradient(to left bottom, #81ceca, #61da89)}.project-header{font-size:30px;font-weight:700;color:#8d8a8a;margin-bottom:15px}.todo-head{display:flex;flex-direction:row;justify-content:space-between;font-size:30px;font-weight:700;margin-bottom:10px}.todo-head p{color:#57b67b}.todo-head p:hover{transform:scale(1.3);transition:ease-in-out}.alert-message{color:red;font-weight:400}.new-form{margin:auto;padding:10px}.new-form input:not(:last-child),.new-form textarea{width:100%;margin:10px;margin-left:0;padding:5px;border:none;border-bottom:2px solid}#add-todo,#edit-todo{float:right;width:80px;margin:0;border:none}.todo-list{color:#288a61}.todo-title{width:65%;flex-direction:row;padding:10px;font-size:16px;font-weight:700}.todo-item{background-color:#fff;padding:0;position:relative;-webkit-box-shadow:10px 13px 23px -12px #6b636b;-moz-box-shadow:10px 13px 23px -12px #6b636b;box-shadow:10px 13px 23px -12px #6b636b;border-radius:5px}.todo-item:not(:last-child){margin-bottom:20px}.todo-item:hover{transform:translateY(-2px);transition:all 0.5s}.visible-todo-item{display:flex;justify-content:space-between;align-items:center}.todo-item:hover{cursor:pointer}.todo-icons>i{padding:0 10px}i{padding:5px}.delete-icon:hover,.edit-icon:hover,.details-icon:hover{transform:scale(2)}.hidden{display:none !important}.details-section{display:flex;flex-direction:column;padding-left:10px}.footer-section{padding:10px;background-color:black;color:#fff;position:sticky}\n",""]),e.exports=t},function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,d=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),i=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[o].concat(i).concat([r]).join("\n")}var a,d,c;return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},t.i=function(e,o,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},function(e,t,o){"use strict";o.r(t);o(0);function n(e){return function(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r=[{title:"Default project",id:0,todoList:[]}];function i(){var e=JSON.parse(localStorage.getItem("projects"));e&&(r=n(e))}function a(e){var t;return e.length>0?t=e[e.length-1].id+1:0===e.length&&(t=0),t}function d(){return r}function c(){localStorage.setItem("projects",JSON.stringify(r))}function l(e){i();var t=r.map((function(e){return e.id})).indexOf(parseInt(e,10));return r[t]}var s={newProject:document.querySelector(".add-project"),projectDiv:document.querySelector(".project-list"),project:document.querySelector(".project"),projectTitle:document.querySelector(".project-title"),deleteProject:document.querySelector(".project-delete-icon"),selectedProject:document.querySelector(".selected"),newTodo:document.querySelector(".new-todo"),todoTitle:document.querySelector("#todoTitle"),todoDue:document.querySelector("#todoDue"),priority:document.querySelector("#priority"),todoDescription:document.querySelector("#todoDescription"),newTodoBtn:document.getElementById("add-todo"),deleteTodo:document.querySelector(".delete-icon"),editTodo:document.querySelector(".edit-icon"),mainnav:document.querySelector(".main-nav")};var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,o=[];return e.length>t?(e.split(" ").reduce((function(e,n){return e+n.length<=t&&o.push(n),e+n.length}),0),"".concat(o.join(" ")," ...")):e};function p(){var e=JSON.parse(localStorage.getItem("projects")),t=document.querySelector(".project-list");!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(t),null!==e&&e.forEach((function(e){var o=document.createElement("div");o.classList.add("project","col-12");var n=document.createElement("h2");n.classList.add("project-title"),n.setAttribute("id",e.id),n.textContent=u(e.title);var r=document.createElement("i");r.classList.add("fa","fa-window-close","project-delete-icon"),o.append(n),o.append(r),t.append(o)}))}var f=document.querySelector(".todo-section");function m(e){var t=e.todoList,o=document.querySelector(".todo-list");o.innerHTML="",t.forEach((function(t){var n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");n.classList.add("todo-item"),i.classList.add("visible-todo-item"),n.setAttribute("id","".concat(t.id,"-").concat(e.id)),r.classList.add("todo-title");var a=document.createElement("div"),d=document.createElement("i"),c=document.createElement("i"),l=document.createElement("i"),s=document.createElement("i");a.classList.add("todo-icons"),d.classList.add("fa","fa-minus-circle"),d.style.color=!0===t.status?"#07a631":"#acadac",c.classList.add("fa","fa-window-close","delete-icon"),l.classList.add("fa","fa-pencil","edit-icon"),s.classList.add("fa","fa-caret-down","details-icon"),s.setAttribute("id","details-".concat(t.id));var p=document.createElement("span");p.textContent=u(t.title,30);var f=document.createElement("div");f.textContent=t.priority,f.style.color=function(e){var t;switch(e){case"urgent":t="#f58276";break;case"high":t="#f5c276";break;case"low":t="#b1b3b2";break;default:t="#76f5f1"}return t}(t.priority),r.append(d),r.append(p),n.appendChild(i),i.append(r),i.append(f),i.append(a),a.append(c),a.append(l),a.append(s),function(e,t,o,n){var r=document.createElement("div");r.classList.add("details-section","hidden"),r.setAttribute("id","detail-section-".concat(n));var i=document.createElement("p"),a=document.createElement("i");a.classList.add("fa","fa-chevron-right");var d=document.createElement("span");d.textContent="Due Date: ".concat(t);var c=document.createElement("p"),l=document.createElement("i");l.classList.add("fa","fa-chevron-right");var s=document.createElement("span");s.textContent="Description: ".concat(o),i.append(a),i.append(d),c.append(l),c.append(s),r.append(i),r.append(c),e.append(r)}(n,t.due,t.description,t.id),o.append(n)}))}function v(){document.querySelector(".todo-form").classList.toggle("hidden")}function h(){document.getElementById("add-todo").classList.toggle("hidden"),document.getElementById("edit-todo").classList.toggle("hidden")}function g(e){var t,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return{title:e,id:t,todoList:o}}(e,a(d()));t=o,r.push(t),c(),p(),s.newProject.value=""}function b(e){var t=d(),o=t.find((function(t){return t.id===e})),n=t.indexOf(o),r=a(o.todoList),i={title:document.querySelector("#todoTitle").value,due:document.querySelector("#todoDue").value,priority:document.querySelector("#priority").value,description:document.querySelector("#todoDescription").value};(function(e){var t=e.title,o=e.due,n=e.priority,r=e.description,i=document.querySelector(".alert-message");return""===t||""===o||""===n||""===r?(i.classList.remove("hidden"),!1):(i.classList.contains("hidden")||i.classList.add("hidden"),!0)})(i)&&(i.id=r,function(e,t,o){e[t].todoList.push(o)}(t,n,i),c(),v(),m(d().find((function(t){return t.id===e}))),document.querySelector(".new-form").reset())}var y,x,S,w,j,q,L=(y=function(e){if("Enter"===e.key){var t=s.newProject;""!==t.value&&g(t.value)}},x=function(e){var t=l(e);f.innerHTML="",function(e){var t=document.querySelector(".selected");t&&t.classList.remove("selected"),document.getElementById(e).classList.add("selected")}(e),function(e){var t=function(e){return'<div class="col-12">\n                      <h2 class="project-header">'.concat(e,'</h2>\n                      <div class="todo-head">\n                        <h2>TODOs</h2>\n                        <p><i class="fa fa-plus-circle new-todo"></i></p>\n                      </div>\n                    </div>')}(e);f.insertAdjacentHTML("afterbegin",t),f.insertAdjacentHTML("beforeend",'<p class= "hidden alert-message">Please fill up all the input fields.</p><div class=" row todo-form hidden">\n                          <form class="new-form">\n                            <input type="text" id="todoTitle" placeholder="Enter title" required/><br>\n                            <input type="date" id="todoDue" required/><br>\n                            <select id="priority" name="priority" required/>\n                            <option value="urgent">Urgent</option>\n                            <option value="high">High</option>\n                            <option value="normal">Normal</option>\n                            <option value="low">Low</option>\n                            </select><br>\n                            <textarea id="todoDescription" rows="3" cols="30" placeholder="Add description" required></textarea><br>\n                            <input type="hidden" id="id" value="null"/><br>\n                            <input type="button" class="btn-success" id="add-todo" value="Add">\n                            <input type="button" class="btn-success hidden" id="edit-todo" value="Edit">\n                          </form>\n                        </div>');var o=document.createElement("div");o.classList.add("todo-list","col-12"),f.append(o)}(t.title),m(t)},S=function(e){!function(e){var t=r.map((function(e){return e.id})).indexOf(e);-1!==t&&r.splice(t,1)}(parseInt(e,10)),c(),p()},w=function(){var e=document.querySelector(".selected");b(parseInt(e.id,10))},j=function(e){var t=e.target.id,o=t.match(/\d$/).toString(),n=t.match(/\d+/).toString(),r=l(o),i=r.todoList[n];t.match(/edit-\d+/)?(v(),function(e){document.querySelector("#todoTitle").value=e.title,document.querySelector("#todoDue").value=e.due,document.querySelector("#priority").value=e.priority,document.querySelector("#todoDescription").value=e.description,document.querySelector("#id").value=e.id}(i),h()):t.match(/delete-\d+/)?(function(e,t){e.todoList.splice(t,1)}(r,r.todoList.indexOf(i)),c(),m(r)):t.match(/details-\d+/)&&function(e){document.getElementById("detail-section-".concat(e)).classList.toggle("hidden")}(n)},q=function(){var e=document.querySelector(".selected"),t=parseInt(e.id,10),o=document.getElementById("id").value;!function(e){e.title=document.querySelector("#todoTitle").value,e.due=document.querySelector("#todoDue").value,e.priority=document.querySelector("#priority").value,e.description=document.querySelector("#todoDescription").value,e.id=document.querySelector("#id").value}(l(t).todoList[o]),c(),h(),v(),m(l(t))},{eventHandler:function(){s.newProject.addEventListener("keypress",y),s.projectDiv.addEventListener("click",(function(e){var t;e.target.id?x(e.target.id):(t=e.target.parentNode.firstChild.id,S(t)),document.querySelector(".new-todo").addEventListener("click",v),document.getElementById("add-todo").addEventListener("click",w),document.getElementById("edit-todo").addEventListener("click",q),document.querySelector(".todo-list").addEventListener("click",j)}))}});s.mainnav.insertAdjacentHTML("afterbegin",'<ul class="navbar">\n  <li><img src="img/logo.png" alt="logo of the app"></li>\n  <li>Suman Shreshtha</li> \n  <li><span>LogOut</span></li>\n</ul>'),i(),p(),L.eventHandler()}]);