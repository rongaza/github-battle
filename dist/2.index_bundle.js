(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{34:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.d(t,"a",function(){return l}),r.d(t,"b",function(){return i});"?client_id=".concat("YOUR_CLIENT_ID","&client_secret=").concat("YOUR_SECRET_KEY");function a(e){return fetch("https://api.github.com/users/".concat(e,"/repos?per_page=100")).then(function(e){return e.json()}).then(function(t){if(t.message)throw new Error(t.message,e);return t})}function o(e,t){return 3*e+function(e){return e.reduce(function(e,t){return e+t.stargazers_count},0)}(t)}function c(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t)).then(function(e){return e.json()}).then(function(e){if(e.message)throw new Error(function(e,t){return"Not Found"===e?"".concat(t," doesn't exist"):e}(e.message,t));return e})),a(e)]).then(function(e){var t=n(e,2),r=t[0],a=t[1];return{profile:r,score:o(r.followers,a)}});var t}function l(e){return Promise.all([c(e[0]),c(e[1])]).then(function(e){return e.sort(function(e,t){return t.sore-e.score})})}function i(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then(function(e){return e.json()}).then(function(e){if(!e.items)throw new Error(e.message);return e.items})}},35:function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(0),a=r.n(n),o=r(5),c=r.n(o),l=r(9);function i(e){var t=e.header,r=e.subheader,n=e.avatar,o=e.href,c=e.name,i=e.children;return a.a.createElement(l.a,null,function(e){var l=e.theme;return a.a.createElement("div",{className:"card bg-".concat(l)},a.a.createElement("h4",{className:"header-lg center-text"},t),a.a.createElement("img",{className:"avatar",src:n,alt:"Avatar for ".concat(c)}),r&&a.a.createElement("h4",{className:"center-text"},r),a.a.createElement("h2",{className:"center-text"},a.a.createElement("a",{className:"link",href:o},c)),i)})}i.propTypes={header:c.a.string.isRequired,subheader:c.a.string,avatar:c.a.string.isRequired,href:c.a.string.isRequired,name:c.a.string.isRequired}},36:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(5),c=r.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){function t(){var e,r,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return n=this,a=(e=u(t)).call.apply(e,[this].concat(c)),r=!a||"object"!==l(a)&&"function"!=typeof a?s(n):a,p(s(r),"state",{hovering:!1}),p(s(r),"mouseOver",function(){r.setState({hovering:!0})}),p(s(r),"mouseOut",function(){r.setState({hovering:!1})}),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.a.Component),r=t,(n=[{key:"render",value:function(){return a.a.createElement("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},this.props.children(this.state.hovering))}}])&&i(r.prototype,n),o&&i(r,o),t}();r.d(t,"a",function(){return y});var b={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}};function y(e){var t=e.text,r=e.children;return a.a.createElement(m,null,function(e){return a.a.createElement("div",{style:b.container},!0===e&&a.a.createElement("div",{style:b.tooltip},t),r)})}y.propTypes={text:c.a.string.isRequired}},38:function(e,t,r){"use strict";const n=r(39),a=r(40),o=r(41);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function l(e,t){return t.decode?a(e):e}function i(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function u(e){const t=(e=i(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function s(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":return(e,t,r)=>{const n="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;r[e]=n};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const a of e.split("&")){let[e,c]=o(a.replace(/\+/g," "),"=");c=void 0===c?null:l(c,t),r(l(e,t),c,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=s(r[e],t);else n[e]=s(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=u,t.parse=f,t.stringify=((e,t)=>{if(!e)return"";const r=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const a=r.length;return void 0===n?r:null===n?[...r,[c(t,e),"[",a,"]"].join("")]:[...r,[c(t,e),"[",c(a,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"comma":return t=>(r,n,a)=>null==n||0===n.length?r:0===a?[[c(t,e),"=",c(n,e)].join("")]:[[r,c(n,e)].join(",")];default:return t=>(r,n)=>void 0===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),n=Object.keys(e);return!1!==t.sort&&n.sort(t.sort),n.map(n=>{const a=e[n];return void 0===a?"":null===a?c(n,t):Array.isArray(a)?a.reduce(r(n),[]).join("&"):c(n,t)+"="+c(a,t)}).filter(e=>e.length>0).join("&")}),t.parseUrl=((e,t)=>({url:i(e).split("?")[0]||"",query:f(u(e),t)}))},39:function(e,t,r){"use strict";e.exports=(e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))},40:function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],o(r),o(n))}function c(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=o(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=a.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=c(r[0]);n!==r[0]&&(t[r[0]]=n)}r=a.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),l=0;l<o.length;l++){var i=o[l];e=e.replace(new RegExp(i,"g"),t[i])}return e}(e)}}},41:function(e,t,r){"use strict";e.exports=((e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]})},42:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return w});var n=r(0),a=r.n(n),o=r(34),c=r(37),l=r(35),i=r(13),u=r(36),s=r(5),f=r.n(s),p=r(38),m=r.n(p),b=r(8);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=e.profile;return a.a.createElement("ul",{className:"card-list"},a.a.createElement("li",null,a.a.createElement(c.i,{color:"rgb(239, 115, 115)",size:22}),t.name),t.location&&a.a.createElement("li",null,a.a.createElement(u.a,{text:"Users location"},a.a.createElement(c.c,{color:"rgb(144, 115, 255)",size:22}),t.location)),t.company&&a.a.createElement("li",null,a.a.createElement(u.a,{text:"Users company"},a.a.createElement(c.a,{color:"#795548",size:22}),t.company)),a.a.createElement("li",null,a.a.createElement(c.k,{color:"rgb(129, 195, 245)",size:22}),t.followers.toLocaleString()," followers"),a.a.createElement("li",null,a.a.createElement(c.j,{color:"rgb(64, 183, 95)",size:22}),t.following.toLocaleString()," following"))}E.propTypes={profile:f.a.object.isRequired};var w=function(e){function t(){var e,r,n,a,o,c,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,u=new Array(i),s=0;s<i;s++)u[s]=arguments[s];return n=this,r=!(a=(e=d(t)).call.apply(e,[this].concat(u)))||"object"!==y(a)&&"function"!=typeof a?g(n):a,o=g(r),l={winner:null,loser:null,error:null,loading:!0},(c="state")in o?Object.defineProperty(o,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):o[c]=l,r}var r,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a.a.Component),r=t,(n=[{key:"componentDidMount",value:function(){var e=this,t=m.a.parse(this.props.location.search),r=t.playerOne,n=t.playerTwo;Object(o.a)([r,n]).then(function(t){e.setState({winner:t[0],loser:t[1],error:null,loading:!1})}).catch(function(t){var r=t.message;e.setState({error:r,loading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.winner,r=e.loser,n=e.error;return!0===e.loading?a.a.createElement("div",null,a.a.createElement(i.a,{text:"Battling"})):n?a.a.createElement("p",{className:"error"},n):a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"grid space-around container-sm"},a.a.createElement(l.a,{header:t.score===r.score?"Tie":"Winner",subheader:"Score: ".concat(t.score.toLocaleString()),avatar:t.profile.avatar_url,href:t.profile.html_url,name:t.profile.login},a.a.createElement(E,{profile:t.profile})),a.a.createElement(l.a,{header:t.score===r.score?"Tie":"Loser",subheader:"Score: ".concat(r.score.toLocaleString()),avatar:r.profile.avatar_url,name:r.profile.login,href:r.profile.html_url},a.a.createElement(E,{profile:r.profile}))),a.a.createElement(b.b,{to:"/battle",className:"btn dark-btn btn-space"},"Reset"))}}])&&h(r.prototype,n),c&&h(r,c),t}()},44:function(e,t,r){"use strict";r.r(t),r.d(t,"default",function(){return j});var n=r(0),a=r.n(n),o=r(5),c=r.n(o),l=r(37),i=(r(42),r(9)),u=r(8);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t,r){return t&&p(e.prototype,t),r&&p(e,r),e}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?h(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(){return a.a.createElement(i.a,null,function(e){var t=e.theme;return a.a.createElement("div",{className:"instructions-container"},a.a.createElement("h1",{className:"center-text header-lg"}," Instructions"),a.a.createElement("ol",{className:"container-small grid center-text battle-instructions"},a.a.createElement("li",null,a.a.createElement("h3",{className:"header-sm"},"Enter two Github users"),a.a.createElement(l.j,{className:"bg-".concat(t),color:"rgb(255, 191, 116)",size:140})),a.a.createElement("li",null,a.a.createElement("h3",{className:"header-sm"},"Battle"),a.a.createElement(l.e,{className:"bg-".concat(t),color:"#727272",size:140})),a.a.createElement("li",null,a.a.createElement("h3",{className:"header-sm"},"See the winners"),a.a.createElement(l.h,{className:"bg-".concat(t),color:"rgb(255, 215, 0)",size:140}))))})}var w=function(e){function t(){var e,r;f(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return v(h(r=b(this,(e=y(t)).call.apply(e,[this].concat(a)))),"state",{username:""}),v(h(r),"handleSubmit",function(e){e.preventDefault(),r.props.onSubmit(r.state.username)}),v(h(r),"handleChange",function(e){r.setState({username:e.target.value})}),r}return d(t,a.a.Component),m(t,[{key:"render",value:function(){var e=this;return a.a.createElement(i.a,null,function(t){var r=t.theme;return a.a.createElement("form",{className:"column player",onSubmit:e.handleSubmit},a.a.createElement("label",{htmlFor:"username",className:"player-label"},e.props.label),a.a.createElement("div",{className:"row player-inputs"},a.a.createElement("input",{type:"text",id:"username",className:"input-".concat(r),placeholder:"github username",autoComplete:"off",value:e.state.username,onChange:e.handleChange}),a.a.createElement("button",{className:"btn ".concat("dark"===r?"btn-light":"btn-dark"),type:"submit",disabled:!e.state.username},"Submit")))})}}]),t}();function O(e){var t=e.username,r=e.onReset,n=e.label;return a.a.createElement(i.a,null,function(e){var o=e.theme;return a.a.createElement("div",{className:"column player"},a.a.createElement("h3",{className:"player-label"},n),a.a.createElement("div",{className:"row bg-".concat(o)},a.a.createElement("div",{className:"player-info"},a.a.createElement("img",{className:"avatar-small",src:"https://github.com/".concat(t,".png?size=200"),alt:"Avatar for ".concat(t)}),a.a.createElement("a",{href:"https://github.com/".concat(t),className:"link"},t)),a.a.createElement("button",{className:"btn-clear flex-center",onClick:r},a.a.createElement(l.g,{color:"rgb(194,57,42)",size:26}))))})}w.propTypes={onSubmit:c.a.func.isRequired,label:c.a.string.isRequired},O.propTypes={username:c.a.string.isRequired,onReset:c.a.func.isRequired,label:c.a.string.isRequired};var j=function(e){function t(){var e,r;f(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return v(h(r=b(this,(e=y(t)).call.apply(e,[this].concat(a)))),"state",{playerOne:null,playerTwo:null}),v(h(r),"handleSubmit",function(e,t){r.setState(v({},e,t))}),v(h(r),"handleReset",function(e){r.setState(v({},e,null))}),r}return d(t,a.a.Component),m(t,[{key:"render",value:function(){var e=this,t=this.state,r=t.playerOne,n=t.playerTwo;return a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null),a.a.createElement("div",{className:"players-container"},a.a.createElement("h1",{className:"center-text header-lg"},"Players"),a.a.createElement("div",{className:"row space-around"},null===r?a.a.createElement(w,{label:"Player One",onSubmit:function(t){return e.handleSubmit("playerOne",t)}}):a.a.createElement(O,{username:r,label:"Player One",onReset:function(){return e.handleReset("playerOne")}}),null===n?a.a.createElement(w,{label:"Player Two",onSubmit:function(t){return e.handleSubmit("playerTwo",t)}}):a.a.createElement(O,{username:n,label:"Player Two",onReset:function(){return e.handleReset("playerTwo")}})),r&&n&&a.a.createElement(u.b,{className:"btn dark-btn btn-space",to:{pathname:"/battle/results",search:"?playerOne=".concat(r,"&playerTwo=").concat(n)}},"Battle")))}}]),t}()}}]);