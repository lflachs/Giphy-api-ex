(this["webpackJsonpgiphy-livecoding"]=this["webpackJsonpgiphy-livecoding"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.a4e3d271.svg"},,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(2),c=a.n(i),r=(a(14),a(3)),s=a(4),l=a(7),h=a(5),u=a(8);a(15);var g=function(e){var t=e.gif,a={gifContainer:{height:"250px",width:"".concat(t.images.downsized_large.width,"px")},bgImg:{background:"linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%), url(".concat(t.images.downsized_large.url,")"),width:"100%",height:"100%"}};return o.a.createElement("div",{className:"gif-container",style:a.gifContainer},o.a.createElement("div",{className:"gif-image",style:a.bgImg}),o.a.createElement("h3",{className:"gif-title"},t.slug))};a(16);var m=function(e){var t=e.gifs;return o.a.createElement("div",{className:"gif-list"},t.map((function(e){return o.a.createElement(g,{gif:e})})))},f=a(6),d=a.n(f);a(17);var p=function(e){var t=e.onInputChange,a=e.onSearchClick;return o.a.createElement("div",{className:"search"},o.a.createElement("input",{onInput:t,className:"search-term",type:"text"}),o.a.createElement("button",{onClick:a,className:"search-button"},o.a.createElement("i",{className:"fa fa-search"})))},v=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).handleLoadGifs=function(e){console.log("load gifs"),fetch("https://api.giphy.com/v1/gifs/search?api_key=".concat("OD3oGfqxgGh8SZtwK6u0XHQtkSQef8N4","&q=").concat(e,"&limit=10")).then((function(e){return e.json()})).then((function(e){a.setState({gifs:e.data})}))},a.onInputChange=function(e){a.setState({query:e.target.value})},a.onSearchClick=function(){a.handleLoadGifs(a.state.query)},a.state={gifs:void 0,query:"lol cats",elephants:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.handleLoadGifs(this.state.query),fetch("https://cors-anywhere.herokuapp.com/https://elephant-api.herokuapp.com/elephants",{method:"GET",mode:"cors",cache:"default"}).then((function(e){return e.json()})).then((function(t){e.setState({elephant:t}),console.log(e.state.elephant[0].image)}))}},{key:"render",value:function(){var e=this.state.gifs;return o.a.createElement("div",null,o.a.createElement("header",{className:"main-header"},o.a.createElement("img",{className:"logo",src:d.a,alt:"logo"}),o.a.createElement(p,{onInputChange:this.onInputChange,onSearchClick:this.onSearchClick})),e?o.a.createElement(m,{gifs:e}):console.log("loading..."))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.adc12501.chunk.js.map