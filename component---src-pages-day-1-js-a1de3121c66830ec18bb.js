(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(152),i=n.n(o),l=n(158),c=n(161),s=n(162),u=n(163),p=n(164);t.default=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(l.a,{title:"第一天",back:"/"}),r.a.createElement("div",{className:"content"},r.a.createElement("p",null,"上午6点的飞机，不误点的话午饭前就能到高崎机场，机场里可以拿份手绘的厦门地图，尽管用处不是特别大，也权当纪念了。"),r.a.createElement("p",null,r.a.createElement("a",{href:c,target:"_blank"},"此处有手绘地图电子版")),r.a.createElement("p",null,"如果立即坐船登岛那就只能在龙头路吃午饭了，否则可以在轮渡旁边的中山路解决午饭问题。"),r.a.createElement("p",null,"另外，由于岛上物资稍贵，可以在中山路上的超市买些水之类的补给带到岛上。"),r.a.createElement("p",null,"及至到达旅馆下榻，请顺便看看旅馆的紧急逃生门在哪里以防万一。（个人习惯，仅供参考）"),r.a.createElement("p",null,"下午可以按体力与兴趣安排一些景点，岛很小，景点无非菽庄花园，日光岩，钢琴博物馆，皓月园。日光岩建议安排在第二天早晨。所以其余三选一。"),r.a.createElement("img",{style:{marginBottom:"8px",display:"block"},src:s}),r.a.createElement("small",{style:{marginBottom:"8px",textAlign:"center",display:"block"}},"（钢琴博物馆）"),r.a.createElement("img",{style:{marginBottom:"8px",display:"block"},src:u}),r.a.createElement("small",{style:{marginBottom:"8px",textAlign:"center",display:"block"}},"(菽庄花园）"),r.a.createElement("img",{style:{marginBottom:"8px",display:"block"},src:p}),r.a.createElement("small",{style:{marginBottom:"8px",textAlign:"center",display:"block"}},"(皓月园)"),r.a.createElement("p",null,"岛上地图的设立点不比的街头艺人少，配合手机导航，应该不会迷路。路上看到鲜榨的马拉桑和潘小莲酸奶推荐可以喝喝看。"),r.a.createElement("p",null,"鉴于我没有在岛上过夜，对于夜晚的消遣也没什么建议，龙头路吃完晚饭后，估计也就看看隔岸城市夜景不错，最后就是早点休息啦，为后面几天储备能量"),r.a.createElement("p",null,"最后提醒下，鼓浪屿晚上不要乱走。。。至于理由，请看下面五则搜刮来的岛上灵异小故事。希望对你胃口，哈哈！"),r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(i.a,{to:"/story-1/"},"八卦楼闹鬼")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/story-2/"},"买木屐的女人")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/story-3/"},"鼓浪屿教堂的地下室")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/story-4/"},"买猪肉的女子")),r.a.createElement("li",null,r.a.createElement(i.a,{to:"/story-5/"},"殡仪馆旁边的隧道")))))}},152:function(e,t,n){"use strict";var a=n(35);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(154)),o=a(n(155)),i=a(n(7)),l=a(n(48)),c=a(n(49)),s=a(n(4)),u=a(n(0)),p=n(13),d=n(156);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/show_case/"+e)}var m={activeClassName:s.default.string,activeStyle:s.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,l.default)((0,l.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,l.default)((0,l.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,l=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,h=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return u.default.createElement(p.Link,(0,o.default)({to:v,state:s,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:s,replace:m})),!0}},h))},t}(u.default.Component);h.propTypes=(0,o.default)({},m,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var v=h;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},153:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},154:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},155:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},156:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(152),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(153),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(50),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(152),i=n.n(o);t.a=function(e){return r.a.createElement("div",{className:"header",style:{background:"rebeccapurple"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,color:"white",textDecoration:"none",height:"60px",textAlign:"center",position:"relative"}},e.back&&r.a.createElement("small",{style:{position:"absolute",left:0,top:0,lineHeight:"60px",paddingLeft:"24px"}},r.a.createElement(i.a,{to:e.back,style:{color:"white",textDecoration:"none"}},"BACK")),r.a.createElement("h3",{style:{margin:0,lineHeight:"60px"}},e.title)))}},161:function(e,t,n){e.exports=n.p+"static/map-63ff5b96cdd5e6e407cfb830348a0a74.jpg"},162:function(e,t,n){e.exports=n.p+"static/IMG_1687-d0d5c5c4772cecce00f7f4504df6819b.jpeg"},163:function(e,t,n){e.exports=n.p+"static/IMG_1688-c21ebaf70c0944a29a2d490ead5e83d9.jpeg"},164:function(e,t,n){e.exports=n.p+"static/timg-e4c906b91c2a643b7d27bb25bd9da3c3.jpg"}}]);
//# sourceMappingURL=component---src-pages-day-1-js-a1de3121c66830ec18bb.js.map