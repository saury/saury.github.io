(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(158);t.default=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{title:"飞行须知",back:"/"}),r.a.createElement("div",{className:"content"},r.a.createElement("ol",{style:{margin:"0 24px"}},r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"保险起见提前一个半小时到机场，不要忘了开闹钟。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"上飞机前最好先上好厕所。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"上飞机不能带刀具、包括水的一切液体。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"带个杯子，飞机上干燥，可以问空姐要热水喝。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"飞机上冷，记得拿件长袖衣服披着/盖着大腿和膝盖，如果没带可以问空姐要条毯子。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"飞机起落时会有点难受，记得频繁咽口水，可以解决耳朵难受的问题。"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"恐高就不要坐窗口啦！"),r.a.createElement("li",{style:{margin:"18px 0 32px 0"}},"最后不要紧张，就算出事也一飞机人陪葬呢！",r.a.createElement("span",{role:"img","aria-label":"haha"},"😆")))))}},152:function(e,t,n){"use strict";var a=n(35);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(154)),i=a(n(155)),o=a(n(7)),s=a(n(48)),l=a(n(49)),u=a(n(4)),c=a(n(0)),p=n(13),d=n(156);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/show_case/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var n;n=e.call(this)||this,(0,l.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,o.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,d.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,d.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,o=void 0===a?this.defaultGetProps:a,s=t.onClick,l=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=f(n);return c.default.createElement(p.Link,(0,i.default)({to:v,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,d.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:u,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,i.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=m;t.default=v;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},153:function(e,t,n){var a;e.exports=(a=n(157))&&a.default||a},154:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},155:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},156:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return d}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(152),l=n.n(s);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var u=n(153),c=n.n(u);n.d(t,"PageRenderer",function(){return c.a});var p=n(33);n.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},157:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(50),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(152),o=n.n(i);t.a=function(e){return r.a.createElement("div",{className:"header",style:{background:"rebeccapurple"}},r.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,color:"white",textDecoration:"none",height:"60px",textAlign:"center",position:"relative"}},e.back&&r.a.createElement("small",{style:{position:"absolute",left:0,top:0,lineHeight:"60px",paddingLeft:"24px"}},r.a.createElement(o.a,{to:e.back,style:{color:"white",textDecoration:"none"}},"BACK")),r.a.createElement("h3",{style:{margin:0,lineHeight:"60px"}},e.title)))}}}]);
//# sourceMappingURL=component---src-pages-flight-js-b6d58de7c1072b452e5c.js.map