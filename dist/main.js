!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){(function(t){var n=t&&t.pid?t.pid.toString(36):"";function o(){var e=Date.now(),t=o.last||e;return o.last=e>t?e:t+1}e.exports=e.exports.default=function(e,t){return(e||"")+""+n+o().toString(36)+(t||"")},e.exports.process=function(e,t){return(e||"")+n+o().toString(36)+(t||"")},e.exports.time=function(e,t){return(e||"")+o().toString(36)+(t||"")}}).call(this,n(5))},function(e,t,n){var o=n(2),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1},c=(o(r,i),r.locals?r.locals:{});e.exports=c},function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),c=[];function a(e){for(var t=-1,n=0;n<c.length;n++)if(c[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],d=t.base?i[0]+t.base:i[0],l=n[d]||0,s="".concat(d," ").concat(l);n[d]=l+1;var u=a(s),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(p)):c.push({identifier:s,updater:v(p,t),references:1}),o.push(s)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var i=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function f(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function v(e,t){var n,o,r;if(t.singleton){var i=h++;n=m||(m=l(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=l(t),o=f.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);c[r].references--}for(var i=d(e,t),l=0;l<n.length;l++){var s=a(n[l]);0===c[s].references&&(c[s].updater(),c.splice(s,1))}n=i}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none;list-style-type:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}.content{margin:auto}.project-section{padding:20px 10px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2);background-image:linear-gradient(to right, #81ceca, #61da89);min-height:100vh;align-content:flex-start}.section-head{font-size:30px;font-weight:700;color:#000;margin-bottom:10px}.add-project{width:100%;border:none;border-bottom:2px,solid,#9ac6ec;border-bottom:solid;font-size:16px;height:30px;padding:8px}.project{display:flex;justify-content:space-between;align-items:center;text-align:start;background-color:#b5b9b7;border:2px solid #8d8a8a;border-radius:5px;padding:5px 5px 5px 15px;margin:15px 0}.project-title{width:inherit;overflow:hidden;font-size:1.5rem;font-weight:bold}.project-delete-icon{visibility:hidden;opacity:0;transition:all 0.5s}.project:hover .project-delete-icon{opacity:1;visibility:visible}.selected{color:#fff;transform:translateY(-2px);box-shadow:0 0.7rem 3rem rgba(101,90,86,0.08)}.todo-section{margin-left:40px;padding:30px;background-image:linear-gradient(to left bottom, #81ceca, #61da89)}.project-header{font-size:30px;font-weight:700;color:#8d8a8a;margin-bottom:15px}.todo-head{display:flex;flex-direction:row;justify-content:space-between;font-size:30px;font-weight:700;margin-bottom:10px}.todo-head p{color:#57b67b}.todo-head p:hover{transform:scale(1.3);transition:ease-in-out}.alert-message{color:red;font-weight:400}.new-form{margin:auto;padding:10px}.new-form input:not(:last-child),.new-form textarea{width:100%;margin:10px;margin-left:0;padding:5px;border:none;border-bottom:2px solid}.add-todo,.edit-todo{float:right;width:80px;margin:0;border:none}.todo-list{color:#288a61}.todo-title{width:65%;flex-direction:row;padding:10px;font-size:16px;font-weight:700}.todo-item{background-color:#fff;padding:0;position:relative;-webkit-box-shadow:10px 13px 23px -12px #6b636b;-moz-box-shadow:10px 13px 23px -12px #6b636b;box-shadow:10px 13px 23px -12px #6b636b;border-radius:5px}.todo-item:not(:last-child){margin-bottom:20px}.todo-item:hover{transform:translateY(-2px);transition:all 0.5s}.visible-todo-item{display:flex;justify-content:space-between;align-items:center}.todo-item:hover{cursor:pointer}.todo-icons>i{padding:0 10px}i{padding:5px}.delete-icon:hover,.edit-icon:hover,.details-icon:hover{transform:scale(2)}.hidden{display:none !important}.details-section{display:flex;flex-direction:column;padding-left:10px}.footer-section{padding:10px;background-color:black;color:#fff;position:sticky}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(c=o,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(d," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([r]).join("\n")}var c,a,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);o&&r[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t){var n,o,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{o="function"==typeof clearTimeout?clearTimeout:c}catch(e){o=c}}();var d,l=[],s=!1,u=-1;function p(){s&&d&&(s=!1,d.length?l=d.concat(l):u=-1,l.length&&f())}function f(){if(!s){var e=a(p);s=!0;for(var t=l.length;t;){for(d=l,l=[];++u<t;)d&&d[u].run();u=-1,t=l.length}d=null,s=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===c||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||s||a(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t);n(1);var o=n(0),r=n.n(o);function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var c=[{title:"Default project",id:0,todoList:[]}];function a(){var e=JSON.parse(localStorage.getItem("projects"));e&&(c=i(e))}function d(){return c}function l(){localStorage.setItem("projects",JSON.stringify(c))}function s(e){a();var t=c.findIndex((function(t){return t.id===e}));return c[t]}var u={newProject:document.querySelector(".add-project"),projectDiv:document.querySelector(".project-list"),project:document.querySelector(".project"),projectTitle:document.querySelector(".project-title"),deleteProject:document.querySelector(".project-delete-icon"),selectedProject:document.querySelector(".selected"),newTodo:document.querySelector(".new-todo"),todoTitle:document.querySelector("#todoTitle"),todoDue:document.querySelector("#todoDue"),priority:document.querySelector("#priority"),todoDescription:document.querySelector("#todoDescription"),newTodoBtn:document.getElementById("add-todo"),deleteTodo:document.querySelector(".delete-icon"),editTodo:document.querySelector(".edit-icon"),mainnav:document.querySelector(".main-nav"),todoHeader:document.querySelector(".todo-header-section")};var p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=[];return e.length>t?(e.split(" ").reduce((function(e,o){return e+o.length<=t&&n.push(o),e+o.length}),0),"".concat(n.join(" ")," ...")):e};function f(){var e=JSON.parse(localStorage.getItem("projects")),t=document.querySelector(".project-list");!function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(t),null!==e&&e.forEach((function(e){var n=document.createElement("div");n.classList.add("project","col-12"),n.setAttribute("id",e.id);var o=document.createElement("h2");o.classList.add("project-title"),o.textContent=p(e.title,25);var r=document.createElement("i");r.classList.add("fa","fa-window-close","project-delete-icon"),n.append(o),n.append(r),t.append(n)}))}var m=document.querySelector(".todo-header-section");function h(e){var t=e.todoList,n=document.querySelector(".todo-lists");n.innerHTML="",t.forEach((function(t){var o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");o.classList.add("todo-item"),o.style.color=function(e){var t;switch(e){case"urgent":t="#f58276";break;case"high":t="#f5c276";break;case"low":t="#b1b3b2";break;default:t="#76f5f1"}return t}(t.priority),o.setAttribute("data-info","".concat(t.id,"-").concat(e.id)),i.classList.add("visible-todo-item"),r.classList.add("todo-title");var c=document.createElement("div"),a=document.createElement("i"),d=document.createElement("i"),l=document.createElement("i"),s=document.createElement("i");c.classList.add("todo-icons"),a.classList.add("fa","fa-minus-circle","status-icon"),a.style.color="#acadac",d.classList.add("fa","fa-window-close","delete-icon"),l.classList.add("fa","fa-pencil","edit-icon"),s.classList.add("fa","fa-caret-down","details-icon"),s.setAttribute("id","details-".concat(t.id));var u=document.createElement("span");u.textContent=p(t.title,30);var f=document.createElement("div");f.textContent=t.priority,r.append(a),r.append(u),o.appendChild(i),i.append(r),i.append(f),i.append(c),c.append(d),c.append(l),c.append(s),function(e,t,n,o){var r=document.createElement("div");r.classList.add("details-section","hidden"),r.setAttribute("id","detail-section-".concat(o));var i=document.createElement("p"),c=document.createElement("i");c.classList.add("fa","fa-chevron-right");var a=document.createElement("span");a.textContent="Due Date: ".concat(t);var d=document.createElement("p"),l=document.createElement("i");l.classList.add("fa","fa-chevron-right");var s=document.createElement("span");s.textContent="Description: ".concat(n),i.append(c),i.append(a),d.append(l),d.append(s),r.append(i),r.append(d),e.append(r)}(o,t.due,t.description,t.id),n.append(o)}))}function v(){document.querySelector(".todo-form").classList.toggle("hidden")}function g(){document.getElementById("add-todo").classList.toggle("hidden"),document.getElementById("edit-todo").classList.toggle("hidden")}function b(e){var t,n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=r()();return{title:e,id:n,todoList:t}}(e);t=n,c.push(t),l(),f(),u.newProject.value=""}function y(e){var t=d(),n=t.findIndex((function(t){return t.id===e})),o={title:document.querySelector("#todoTitle").value,due:document.querySelector("#todoDue").value,priority:document.querySelector("#priority").value,description:document.querySelector("#todoDescription").value},i=o.title,c=o.due,a=o.priority,s=o.description;if(!1!==function(e,t,n,o){var r=document.querySelector(".alert-message");return""!==e&&""!==t&&""!==n&&""!==o||(r.classList.remove("hidden"),setTimeout((function(){r.classList.add("hidden")}),2e3),!1)}(i,c,a,s)){var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"normal",i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=r()();return{title:e,description:t,due:n,priority:o,status:i,id:c}}(i,s,c,a);console.log(u),function(e,t,n){e[t].todoList.push(n)}(t,n,u),l(),v(),h(d().find((function(t){return t.id===e}))),document.querySelector(".new-form").reset()}}var x,w,S,j,q=(x=function(e){if("Enter"===e.key){var t=u.newProject;""!==t.value&&b(t.value)}},w=function(e){var t,n,o=s(e);m.innerHTML="",function(e){var t=document.querySelector(".selected");t&&t.classList.remove("selected"),document.getElementById(e).classList.add("selected")}(e),t=o.title,n=function(e){return'<div class="col-12">\n                      <h2 class="project-header">'.concat(e,'</h2>\n                      <div class="todo-head">\n                        <h2>TODOs</h2>\n                        <p><i class="fa fa-plus-circle new-todo"></i></p>\n                      </div>\n                    </div>')}(t),m.insertAdjacentHTML("afterbegin",n),m.insertAdjacentHTML("beforeend",'<p class= "hidden alert-message">Please fill up all the input fields.</p><div class=" row todo-form hidden">\n                          <form class="new-form">\n                            <input type="text" id="todoTitle" placeholder="Enter title" required/><br>\n                            <input type="date" id="todoDue" required/><br>\n                            <select id="priority" name="priority" required/>\n                            <option value="urgent">Urgent</option>\n                            <option value="high">High</option>\n                            <option value="normal">Normal</option>\n                            <option value="low">Low</option>\n                            </select><br>\n                            <textarea id="todoDescription" rows="3" cols="30" placeholder="Add description" required></textarea><br>\n                            <input type="hidden" id="id" value="null"/><br>\n                            <input type="button" class="btn-success add-todo" value="Add">\n                            <input type="button" class="btn-success hidden edit-todo" value="Edit">\n                          </form>\n                        </div>'),h(o)},S=function(e){!function(e){var t=c.map((function(e){return e.id})).indexOf(e);-1!==t&&c.splice(t,1)}(e),l(),f()},j=function(){var e=document.querySelector(".selected"),t=parseInt(e.id,10),n=document.getElementById("id").value;!function(e){e.title=document.querySelector("#todoTitle").value,e.due=document.querySelector("#todoDue").value,e.priority=document.querySelector("#priority").value,e.description=document.querySelector("#todoDescription").value,e.id=document.querySelector("#id").value}(s(t).todoList[n]),l(),g(),v(),h(s(t))},{eventHandler:function(){u.newProject.addEventListener("keypress",x),u.projectDiv.addEventListener("click",(function(e){var t=e.target.closest(".project").id;e.target.matches(".project-delete-icon")?S(t):w(t)})),u.todoHeader.addEventListener("click",(function(e){var t;e.target.matches(".new-todo")?v():e.target.matches(".add-todo")?(t=document.querySelector(".selected").id,console.log(t),y(t)):e.target.matches(".edit-todo")&&j()})),document.querySelector(".todo-lists").addEventListener("click",(function(e){var t=e.target.closest(".todo-item").dataset.info.split("-"),n=t[0],o=s(t[1]);console.log(o);var r=o.todoList.findIndex((function(e){return e.id===n})),i=o.todoList[r];e.target.matches(".status-icon")?console.log(4):e.target.matches(".delete-icon")?(function(e,t){e.todoList.splice(t,1)}(o,o.todoList.indexOf(i)),l(),h(o)):e.target.matches(".edit-icon")?(v(),function(e){document.querySelector("#todoTitle").value=e.title,document.querySelector("#todoDue").value=e.due,document.querySelector("#priority").value=e.priority,document.querySelector("#todoDescription").value=e.description,document.querySelector("#id").value=e.id}(i),g()):e.target.matches(".details-icon")&&function(e){document.getElementById("detail-section-".concat(e)).classList.toggle("hidden")}(n)}))}});u.mainnav.insertAdjacentHTML("afterbegin",'<ul class="navbar">\n  <li><img src="img/logo.png" alt="logo of the app"></li>\n  <li>Suman Shreshtha</li> \n  <li><span>LogOut</span></li>\n</ul>'),a(),f(),q.eventHandler()}]);