(this["webpackJsonpgiphy-livecoding"]=this["webpackJsonpgiphy-livecoding"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.a4e3d271.svg"},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),c=a.n(o),r=(a(14),a(3)),s=a(4),l=a(7),g=a(5),u=a(8);a(15);var h=function(e){var t=e.gif,a={gifContainer:{height:"250px",width:"".concat(t.images.downsized_large.width,"px")},bgImg:{background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%), url(".concat(t.images.downsized_large.url,")"),width:"100%",height:"100%"}};return i.a.createElement("div",{className:"gif-container",style:a.gifContainer},i.a.createElement("div",{className:"gif-image",style:a.bgImg}),i.a.createElement("h3",{className:"gif-title"},t.slug))};a(16);var f=function(e){var t=e.gifs;return i.a.createElement("div",{className:"gif-list"},t.map((function(e){return i.a.createElement(h,{gif:e})})))},m=a(6),d=a.n(m);a(17);var p=function(e){var t=e.onInputChange,a=e.onSearchClick;return i.a.createElement("div",{className:"search"},i.a.createElement("input",{onInput:t,className:"search-term",type:"text"}),i.a.createElement("button",{onClick:a,className:"search-button"},i.a.createElement("i",{class:"fa fa-search"})))},v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(g.a)(t).call(this,e))).handleLoadGifs=function(e){console.log("load gifs"),fetch("http://api.giphy.com/v1/gifs/search?api_key=".concat("OD3oGfqxgGh8SZtwK6u0XHQtkSQef8N4","&q=").concat(e,"&limit=10")).then((function(e){return e.json()})).then((function(e){a.setState({gifs:e.data})}))},a.onInputChange=function(e){a.setState({query:e.target.value})},a.onSearchClick=function(){a.handleLoadGifs(a.state.query)},a.state={gifs:void 0,query:"lol cats"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.handleLoadGifs(this.state.query)}},{key:"render",value:function(){var e=this.state.gifs;return i.a.createElement("div",null,i.a.createElement("header",{className:"main-header"},i.a.createElement("img",{className:"logo",src:d.a,alt:"logo"}),i.a.createElement(p,{onInputChange:this.onInputChange,onSearchClick:this.onSearchClick})),e?i.a.createElement(f,{gifs:e}):console.log("loading..."))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.066b7a86.chunk.js.map