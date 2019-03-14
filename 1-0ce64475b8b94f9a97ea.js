(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{159:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return m}),a.d(t,"useStaticQuery",function(){return A});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(172),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var l=a(268),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var f=a(50);a.d(t,"parsePath",function(){return f.a});var u=r.a.createContext({}),m=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},A=function(e){r.a.useContext;var t=r.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},192:function(e,t,a){"use strict";var n=a(558),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(559),l=a.n(s),d=a(159);function f(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(d.StaticQuery,{query:u,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)},i.a.createElement("style",null,"@import url('https://fonts.googleapis.com/css?family=Raleway:300,400|Roboto+Slab:300,400,700');"),">")},data:n})}f.defaultProps={lang:"en",meta:[],keywords:[]},f.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=f;var u="1025518380"},193:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=a(157),s=a(249),l=a.n(s),d=a(567),f=a.n(d),u=a(577);t.a=function(e){return function(t){function a(e){var a;return(a=t.call(this,e)||this).muiPageContext=Object(u.a)(),a}r()(a,t);var n=a.prototype;return n.componentDidMount=function(){var e=document.querySelector("#jss-server-side");e&&e.parentNode&&e.parentNode.removeChild(e)},n.render=function(){return c.a.createElement(f.a,{generateClassName:this.muiPageContext.generateClassName},c.a.createElement(o.MuiThemeProvider,{theme:this.muiPageContext.theme,sheetsManager:this.muiPageContext.sheetsManager},c.a.createElement(l.a,null),c.a.createElement(e,this.props)))},a}(c.a.Component)}},197:function(e,t,a){"use strict";var n=a(399),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(159),l=(a(173),a(401),a(7)),d=a.n(l),f=(a(33),a(54)),u=a.n(f),m=function(e){function t(t){var a;return(a=e.call(this,t)||this)._nav=i.a.createRef(),a.hideNav=a.hideNav.bind(u()(u()(a))),a.onTouchStart=a.onTouchStart.bind(u()(u()(a))),a.onTouchMove=a.onTouchMove.bind(u()(u()(a))),a.onTouchEnd=a.onTouchEnd.bind(u()(u()(a))),a.getDefaultContent=a.getDefaultContent.bind(u()(u()(a))),a.update=a.update.bind(u()(u()(a))),a.getStyle=a.getStyle.bind(u()(u()(a))),a}d()(t,e);var a=t.prototype;return a.hideNav=function(){var e=this.props.onHideNav;e&&e()},a.onTouchStart=function(e){this.startX=e.touches[0].pageX,this.currentX=this.startX,this.touchingSideNav=!0,requestAnimationFrame(this.update)},a.onTouchMove=function(e){this.touchingSideNav&&(this.currentX=e.touches[0].pageX)},a.onTouchEnd=function(e){var t=this.props.openFromRight;if(this.touchingSideNav){this.touchingSideNav=!1;var a=Math[t?"max":"min"](0,this.currentX-this.startX);this._nav.current.style.transform="",!t&&a<0&&this.hideNav(),t&&a>0&&this.hideNav()}},a.update=function(){var e=this.props.openFromRight;if(this.touchingSideNav){requestAnimationFrame(this.update);var t=Math[e?"max":"min"](0,this.currentX-this.startX);this._nav.current.style.transform="translateX("+t+"px)"}},a.getDefaultContent=function(){var e=this,t={title:{background:"#E91E63",color:"#fff",fontWeight:400,margin:0,lineHeight:"82px",padding:22},li:{padding:22,cursor:"pointer",backgroundColor:"#fff"}};Object.assign(t.li,this.props.itemStyle),Object.assign(t.title,this.props.titleStyle);var a=function(a,n){n?Object.assign(a.currentTarget.style,t.li,e.props.itemHoverStyle||{backgroundColor:"#f5f5f5"}):Object.assign(a.currentTarget.style,t.li)};return i.a.createElement("div",null,i.a.createElement("h1",{style:t.title},this.props.title||"Simple SideNav"),i.a.createElement("ul",null,this.props.items?this.props.items.map(function(e,n){return i.a.createElement("li",{key:"item"+n,style:t.li,onMouseOver:function(e){return a(e,!0)},onMouseOut:function(e){return a(e,!1)}},e)}):i.a.createElement("li",{key:"item1",style:t.li},"Item 1")))},a.getStyle=function(){var e=this.props,t=e.openFromRight,a=e.showNav,n={root:{left:0,top:0,width:"100%",height:"100%",position:"fixed",overflow:"hidden",zIndex:8,pointerEvents:a?"auto":"none"},nav:{position:"relative",width:"80%",maxWidth:350,height:"100%",backgroundColor:"dimgrey",textAlign:"center",boxShadow:"2px 0 12px rgba(0,0,0,0.4)",transform:a?"none":"translateX("+(t?102:-102)+"%)",transition:"transform "+(a?"0.33s":"0.13s")+" cubic-bezier(0,0,0.3,1)",display:"flex",willChange:"transform",flexDirection:"column",float:t?"right":"left"},overlay:{position:"absolute",width:"100%",height:"100%",top:0,left:0,opacity:a?1:0,background:"rgba(190,190,190,0.7)",transition:"opacity 0.3s cubic-bezier(0, 0, 0.3, 1)",willChange:"opacity"}};return Object.assign(n.root,this.props.style),Object.assign(n.nav,this.props.navStyle),n},a.render=function(){var e=this.getStyle();return i.a.createElement("aside",{style:e.root},i.a.createElement("div",{style:e.overlay,onClick:this.hideNav}),i.a.createElement("nav",{style:e.nav,onTransitionEnd:function(e){e.target.style.transition="none"},onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,ref:this._nav},this.props.children))},t}(i.a.Component);m.propTypes={style:o.a.object,navStyle:o.a.object,titleStyle:o.a.object,itemStyle:o.a.object,itemHoverStyle:o.a.object,title:o.a.node,children:o.a.node,items:o.a.arrayOf(o.a.node),showNav:o.a.bool,openFromRight:o.a.bool,onHideNav:o.a.func,onShowNav:o.a.func};var A=m,h=a(156),g=a(157);a(183);function p(e){var t=e.classes;return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width||"70px",height:e.height||"50px",fill:e.fill||"#ffffff",className:e.className,viewBox:"0 0 128.99 95"},i.a.createElement("g",null,i.a.createElement("g",null,i.a.createElement("path",{className:"cls-1",d:"M69.15,48.69q-1.49-6.58-3-13.15c-.75-3.3-1.28-6.66-2.34-9.86a51,51,0,0,0-3.5-7c-.5-1-1.08-1.9-1.53-2.89A5.25,5.25,0,0,0,56,12.86a3.86,3.86,0,0,1-2.14-3.53,13.78,13.78,0,0,1,.4-3.75c.38-1.62-.59-2.64-1.37-3.77-.33-.48-1.27-.89-.45-1.54S53.77.13,54.3.85c.94,1.28,2,2.12,3.92,1.65,2.4-.6,5.13,1.52,5.36,4.06s0,4.74-2.37,6.29A1.23,1.23,0,0,0,61,14c1.28,2.58,2.58,5.16,4,7.65a3.52,3.52,0,0,0,1.91,1.13c.69.23,1,.48,1,1.24.22,3.93.52,7.85.79,11.78s.53,7.67.79,11.51c0,.43,0,.86,0,1.29ZM58.5,12A4.08,4.08,0,0,0,62,7.13c-.44-1.38-.93-2.8-2.73-3a4,4,0,0,0-3.89,4.76C56,11,57,12,58.5,12Z"}),i.a.createElement("path",{className:"cls-1",d:"M65.88,21.77l5.13-8L68,9.48a2.65,2.65,0,0,0-.42-.5c-1.18-1-1.16-1.44-.07-2.51A5.61,5.61,0,0,0,68.48,5,4.75,4.75,0,0,1,73,2.18a5.42,5.42,0,0,1,4.5,3.74,6,6,0,0,1-3.15,7.46c-.85.39-1.37,1.61-1.9,2.53a56,56,0,0,0-2.83,5.32c-.56,1.26-1.24,1.54-2.43,1A10.23,10.23,0,0,0,65.88,21.77ZM76.06,8a3.93,3.93,0,0,0-1.45-3.31c-1.89-1.75-4.37-.36-4.93,1.81-.74,2.89,1.37,5.81,4,5.24C75.17,11.38,76.06,10,76.06,8Z"}),i.a.createElement("path",{className:"cls-1",d:"M61.64,48.1c0-7.28,1.16-14.51,1.61-21.86.12.36.27.72.36,1.09s.17.85.27,1.27c.34,1.43.65,2.87,1.06,4.28.63,2.18-.27,4.19-.66,6.24-.52,2.72-1.15,5.41-1.74,8.11a7.06,7.06,0,0,1-.35.93Z"}),i.a.createElement("path",{className:"cls-1",d:"M57.53,49.73,49.89,38.57c-1.92-2.8-3.65-5.74-5.82-8.33A51.52,51.52,0,0,0,38.23,25c-.82-.72-1.7-1.38-2.49-2.14a5.3,5.3,0,0,0-3.64-1.73,3.9,3.9,0,0,1-3.3-2.51,13.81,13.81,0,0,1-1-3.63c-.24-1.64-1.52-2.24-2.67-3-.49-.33-1.51-.37-1-1.27s1.16-.59,1.91-.11c1.35.85,2.68,1.23,4.26.11,2-1.43,5.34-.44,6.49,1.84s1.7,4.43.12,6.71a1.23,1.23,0,0,0,.2,1.18c2.15,1.94,4.3,3.87,6.57,5.67a3.54,3.54,0,0,0,2.19.36,1.19,1.19,0,0,1,1.4.79c1.66,3.58,3.38,7.12,5.08,10.68s3.33,7,5,10.43c.18.39.32.8.48,1.2ZM34.05,19.42a4.06,4.06,0,0,0,1.5-5.79c-.92-1.13-1.9-2.27-3.63-1.77a3.94,3.94,0,0,0-1.86,5.84C31.32,19.39,32.66,20,34.05,19.42Z"}),i.a.createElement("path",{className:"cls-1",d:"M44.55,25.86l1.81-9.33L42,13.64a2.68,2.68,0,0,0-.57-.31c-1.47-.52-1.62-.92-1-2.31a5.57,5.57,0,0,0,.32-1.72,4.71,4.71,0,0,1,3.17-4.25A5.46,5.46,0,0,1,49.51,6.9,5.93,5.93,0,0,1,49.33,15c-.65.67-.68,2-.83,3a55.69,55.69,0,0,0-.67,6c-.06,1.38-.59,1.88-1.91,1.78A10.25,10.25,0,0,0,44.55,25.86ZM48.93,9.33a4,4,0,0,0-2.57-2.56C44,5.83,42.16,8,42.44,10.24c.37,3,3.42,4.91,5.65,3.43C49.35,12.83,49.67,11.2,48.93,9.33Z"}),i.a.createElement("path",{className:"cls-1",d:"M50.31,51.91C47.66,45.12,46,38,43.75,31c.25.29.51.58.74.89s.47.72.72,1.08c.85,1.21,1.66,2.44,2.56,3.6,1.39,1.8,1.3,4,1.69,6,.52,2.72.93,5.45,1.37,8.18a7,7,0,0,1,0,1Z"}),i.a.createElement("path",{className:"cls-1",d:"M46.15,54.73l-10.9-8.07c-2.73-2-5.35-4.24-8.25-6a52,52,0,0,0-7.25-3.07c-1-.41-2.07-.76-3.06-1.21a5.33,5.33,0,0,0-4-.46,3.93,3.93,0,0,1-3.95-1.3,13.91,13.91,0,0,1-2.15-3.11c-.77-1.48-2.18-1.62-3.52-2-.57-.15-1.55.14-1.36-.88s.9-.93,1.77-.73c1.55.36,2.94.29,4.06-1.28,1.43-2,4.9-2.14,6.74-.36s3.07,3.63,2.33,6.31a1.24,1.24,0,0,0,.58,1c2.67,1.14,5.34,2.26,8.08,3.23a3.54,3.54,0,0,0,2.19-.37,1.2,1.2,0,0,1,1.59.29c2.75,2.84,5.55,5.63,8.33,8.44l8.16,8.24c.3.31.57.65.85,1ZM14,33.69a4.05,4.05,0,0,0-.5-6c-1.24-.77-2.55-1.53-4-.5a3.93,3.93,0,0,0,.17,6.12C11.37,34.55,12.82,34.66,14,33.69Z"}),i.a.createElement("path",{className:"cls-1",d:"M26,36.38,24.63,27l-5.06-1.32a2.7,2.7,0,0,0-.65-.11c-1.56,0-1.83-.35-1.7-1.86A5.57,5.57,0,0,0,17,22a4.68,4.68,0,0,1,1.59-5,5.48,5.48,0,0,1,5.88-.06,5.94,5.94,0,0,1,2.5,7.7c-.39.84,0,2.1.22,3.14a55.75,55.75,0,0,0,1.34,5.86c.4,1.32.06,2-1.21,2.3A10.21,10.21,0,0,0,26,36.38Zm-1.32-17a4,4,0,0,0-3.27-1.58c-2.59-.12-3.56,2.53-2.56,4.54,1.33,2.67,4.86,3.53,6.47,1.41C26.24,22.5,26,20.87,24.68,19.34Z"}),i.a.createElement("path",{className:"cls-1",d:"M40.06,59.12c-4.75-5.56-8.64-11.78-13.12-17.65.33.2.68.38,1,.6s.69.53,1,.79c1.2.86,2.38,1.76,3.61,2.57,1.91,1.25,2.54,3.35,3.59,5.17,1.39,2.4,2.68,4.85,4,7.29a7.06,7.06,0,0,1,.35.93Z"}),i.a.createElement("path",{className:"cls-1",d:"M79.43,52.9q1.18-6.64,2.35-13.28c.59-3.33,1.41-6.64,1.67-10a50.71,50.71,0,0,0-.51-7.79c-.08-1.09-.25-2.17-.29-3.25a5.2,5.2,0,0,0-1.4-3.75,3.84,3.84,0,0,1-.61-4.08,13.87,13.87,0,0,1,1.83-3.3c1-1.35.48-2.66.2-4-.12-.57-.83-1.3.18-1.6s1.24.37,1.45,1.24c.37,1.54,1.06,2.73,3,3,2.45.36,4.14,3.36,3.37,5.8S88.78,16.26,86,16.81a1.24,1.24,0,0,0-.68,1c.18,2.87.37,5.74.74,8.6a3.48,3.48,0,0,0,1.32,1.77,1.17,1.17,0,0,1,.46,1.53C86.55,33.4,85.29,37.14,84,40.86s-2.49,7.29-3.75,10.93c-.14.41-.33.79-.5,1.19Zm4.44-38A4.12,4.12,0,0,0,89,11.83c.13-1.44.23-2.94-1.36-3.78A4,4,0,0,0,82.2,11C81.92,13.05,82.47,14.39,83.86,15Z"}),i.a.createElement("path",{className:"cls-1",d:"M86.87,26.81l7.85-5.45c-.4-1.85-.74-3.46-1.09-5.07a2.63,2.63,0,0,0-.19-.62c-.7-1.39-.51-1.77.91-2.34a5.68,5.68,0,0,0,1.44-1,4.78,4.78,0,0,1,5.26-.87,5.37,5.37,0,0,1,2.7,5.17,6,6,0,0,1-5.81,5.69c-.93,0-1.89,1-2.73,1.61a56.65,56.65,0,0,0-4.67,3.83c-1,1-1.74.94-2.62,0A10.13,10.13,0,0,0,86.87,26.81ZM101.63,18a3.92,3.92,0,0,0-.05-3.61c-1.06-2.34-3.89-2-5.25-.21-1.81,2.38-1,5.89,1.65,6.35C99.48,20.76,100.85,19.81,101.63,18Z"}),i.a.createElement("path",{className:"cls-1",d:"M72.72,49.5c2.87-6.71,6.71-13,10-19.56,0,.38,0,.77-.09,1.15s-.17.85-.24,1.27c-.24,1.45-.52,2.9-.69,4.35-.26,2.25-1.87,3.76-3,5.51-1.54,2.31-3.16,4.56-4.76,6.82a7.13,7.13,0,0,1-.68.73Z"}),i.a.createElement("path",{className:"cls-1",d:"M88.44,60.32l6.87-11.64c1.72-2.92,3.66-5.74,5.08-8.79a50.82,50.82,0,0,0,2.26-7.48c.3-1,.53-2.12.87-3.15a5.19,5.19,0,0,0,0-4,3.84,3.84,0,0,1,.86-4,14,14,0,0,1,2.87-2.47c1.39-.92,1.38-2.33,1.59-3.69.09-.58-.32-1.51.73-1.44s1,.78.93,1.66c-.19,1.57,0,2.93,1.74,3.85,2.17,1.18,2.7,4.58,1.12,6.59s-3.3,3.43-6.06,3a1.25,1.25,0,0,0-1,.69c-.84,2.75-1.67,5.51-2.33,8.31a3.45,3.45,0,0,0,.62,2.11,1.17,1.17,0,0,1-.11,1.6c-2.54,3-5,6.09-7.54,9.14l-7.35,9c-.27.33-.59.63-.88.94Zm17.5-34a4.14,4.14,0,0,0,5.92-1.16c.63-1.31,1.25-2.68,0-4a4,4,0,0,0-6.12.85C104.78,23.82,104.83,25.27,105.93,26.27Z"}),i.a.createElement("path",{className:"cls-1",d:"M104.59,38.43,113.87,36c.28-1.87.52-3.5.76-5.13a2.62,2.62,0,0,0,0-.65c-.16-1.54.14-1.84,1.67-1.88a5.72,5.72,0,0,0,1.7-.45,4.78,4.78,0,0,1,5.24,1,5.34,5.34,0,0,1,.72,5.78A6,6,0,0,1,116.55,38c-.89-.29-2.11.25-3.13.57a57.13,57.13,0,0,0-5.73,2c-1.28.54-2,.28-2.44-.94A10,10,0,0,0,104.59,38.43Zm16.95-3.22a3.93,3.93,0,0,0,1.22-3.4c-.17-2.56-2.94-3.22-4.85-2-2.53,1.61-3,5.18-.69,6.53C118.53,37.1,120.15,36.68,121.53,35.22Z"}),i.a.createElement("path",{className:"cls-1",d:"M83.35,54.82c5-5.3,10.84-9.83,16.23-14.89-.16.35-.3.71-.49,1s-.46.74-.67,1.11c-.73,1.28-1.5,2.54-2.18,3.84-1,2-3.08,2.88-4.78,4.12-2.25,1.63-4.57,3.18-6.86,4.75a7.2,7.2,0,0,1-.9.45Z"}),i.a.createElement("text",{className:t.text,x:"0",y:"0",transform:"translate(0 94.66) scale(0.8 1)"},i.a.createElement("tspan",{className:t.text},"Frisieur")))))}p.propTypes={fill:o.a.string,width:o.a.string,height:o.a.string};var b=Object(g.withStyles)(function(e){return{text:{fontSize:33,fontFamily:"Montserrat, Garamond-Bold",fontWeight:700,textTransform:"uppercase",textAlign:"center"}}})(p),v=a(451),E=a.n(v);function y(e){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width||"30px",fill:e.fill||"#ffffff",className:e.className,viewBox:"0 0 54 54"},i.a.createElement("g",{transform:"matrix(0.9999 0 0 0.9999 0.00269999 0.00269999)"},i.a.createElement("circle",{cx:"7",cy:"47",r:"7","data-original":"#556080",className:"active-path"}),i.a.createElement("circle",{cx:"27",cy:"47",r:"7","data-original":"#556080",className:"active-path"}),i.a.createElement("circle",{cx:"47",cy:"47",r:"7","data-original":"#556080",className:"active-path"}),i.a.createElement("circle",{cx:"7",cy:"27",r:"7","data-original":"#556080",className:"active-path"}),i.a.createElement("circle",{cx:"27",cy:"27",r:"7","data-original":"#556080",className:"active-path"}),i.a.createElement("circle",{cx:"47",cy:"27",r:"7","data-original":"#556080",className:"active-path"}),i.a.createElement("circle",{cx:"7",cy:"7",r:"7","data-original":"#556080",className:"active-path"}),i.a.createElement("circle",{cx:"27",cy:"7",r:"7","data-original":"#556080",className:"active-path"}),i.a.createElement("circle",{cx:"47",cy:"7",r:"7","data-original":"#556080",className:"active-path"})))}y.propTypes={fill:o.a.string,width:o.a.string};var w=function(e){var t=e.phone,a=e.adress,n=e.className;return i.a.createElement("div",{className:n},i.a.createElement(h.q,{container:!0,justify:"center",spacing:16},i.a.createElement(h.q,{item:!0},i.a.createElement(h.C,{className:n},i.a.createElement("path",{d:"M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"})),i.a.createElement(h.J,{inline:!0,className:n},t)),i.a.createElement(h.q,{item:!0},i.a.createElement(h.C,{className:n},i.a.createElement("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"}),i.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),i.a.createElement(h.J,{inline:!0,className:n},a))))};var x=Object(g.withStyles)(function(e){var t=e.palette,a=t.burgundy;return{headroom:{boxShadow:"0px 1px 5px 0px rgba(0,0,0,0.2)","&--pinned":{opacity:.9}},container:{width:"90%",maxWidth:1060,margin:"0 auto"},svg:{fill:t.olive[300]},logo:{textAlign:"right","& button":{height:56,width:80,padding:"6px 12px","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.08)"}}},menuBtn:{height:56,margin:0,width:80,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.08)"}},info:{textAlign:"center",fontSize:"0.8rem",color:a[200],"& svg":{fill:a[200]}}}})(function(e){var t=e.classes,a=e.phone,n=e.adress;return i.a.createElement(E.a,{className:t.headroom,style:{height:56,background:"#D04C53",boxShadow:"0px 0px 7px 0px rgba(0,0,0,0.2)"}},i.a.createElement("div",{className:t.container},i.a.createElement(h.q,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(h.q,{item:!0,xs:6,md:2},i.a.createElement(h.c,{onClick:e.toggleMenu,className:t.menuBtn},i.a.createElement(y,{width:"24px",className:t.svg}))),i.a.createElement(h.r,{smDown:!0},i.a.createElement(h.q,{item:!0,md:8,container:!0,justify:"center"},i.a.createElement(w,{phone:a,adress:n,className:t.info}))),i.a.createElement(h.q,{item:!0,xs:6,md:2,className:t.logo},i.a.createElement(h.c,{onClick:function(){return Object(s.navigate)("/")}},i.a.createElement(b,{className:t.svg,width:"60px",height:"45px"}))))," "))}),N=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggleMenu=function(){a.setState({showNav:!0})},a.state={showNav:!1,menuItems:[{name:"Головна",icon:"menu.svg",link:"/"},{name:"Послуги та ціни",icon:"menu.svg",link:"/about"},{name:"Наші майстри",icon:"menu.svg",link:"/team"},{name:"Записатись",icon:"menu.svg",link:"/contact"}]},a}return d()(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.title,n=t.phone,r=t.adress,c=t.classes;return i.a.createElement(i.a.Fragment,null,i.a.createElement("header",null,i.a.createElement(A,{className:c.sideNav,showNav:this.state.showNav,onHideNav:function(){return e.setState({showNav:!1})}},i.a.createElement(h.J,{variant:"h3",className:c.title},a),i.a.createElement("div",{className:c.nav},this.state.menuItems.map(function(e,t){return i.a.createElement(h.c,{className:c.link,key:t,onClick:function(){return Object(s.navigate)(e.link)}},i.a.createElement(h.J,{variant:"h2",className:c.navItem},e.name))}),i.a.createElement("div",{className:c.root},i.a.createElement(b,{className:c.logo})))),i.a.createElement(x,{toggleMenu:this.toggleMenu,phone:n,adress:r})),i.a.createElement("nav",null))},t}(r.Component);N.propTypes={siteTitle:o.a.string},N.defaultProps={siteTitle:""};var S=Object(g.withStyles)(function(e){var t=e.palette,a=t.burgundy,n=t.olive;return{sideNav:{textAlign:"center",position:"fixed",width:"100%",maxWidth:"300px",margin:"auto","& a:hover":{textDecoration:"none"},"& nav":{background:"dimgrey"}},nav:{background:"dimgrey"},title:{padding:"1rem",fontSize:"1.5rem",textAlign:"center",color:n[300],background:a[700],marginBottom:"2rem"},navItem:{color:n[300],fontSize:"1rem",fontWeight:300,margin:"0 2rem ",padding:"3vh","&:hover":{color:"#fff"}},logo:{fill:n[300],width:60,marginTop:"2rem"},link:{width:"100%",textDecoration:"none",borderBottom:"1px solid #777","& a":{textDecoration:"none"},"& a:hover":{textDecoration:"none"}}}})(N),M=a(556),k=a(175),C=a.n(k),j=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"1843744768",render:function(e){return i.a.createElement(C.a,{Tag:"div",className:"footer py-3",style:{backgroundSize:"cover",minHeight:"10vh"},fluid:e.backgroundImage.childImageSharp.fluid},t)},data:M})};var T=Object(g.withStyles)(function(e){var t=e.palette,a=t.burgundy,n=t.olive;return{root:{paddingTop:"3rem"},footinfo:{margin:"1.5rem 0",textAlign:"center",backgroundColor:"rgba("+a.rgbdark+", 0.8)",border:"solid 1px "+a[900],color:n[600],boxShadow:"2px 7px 12px rgba(0, 0, 0, 0.3)",height:"100%",padding:"0.5rem"},line:{height:2,background:n[700]},logo:{textAlign:"center","& svg":{width:"60px",fill:n[700]}}}})(function(e){var t=e.classes;return i.a.createElement("footer",{className:t.root},i.a.createElement(h.q,{container:!0,alignItems:"center"},i.a.createElement(h.q,{item:!0,className:t.line,xs:5}),i.a.createElement(h.q,{item:!0,className:t.logo,xs:2},i.a.createElement(b,null)),i.a.createElement(h.q,{item:!0,className:t.line,xs:5})),i.a.createElement(j,null,i.a.createElement(h.J,{className:t.footinfo},"©2019 design & development OksLutsiv")))}),B=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"3573219382",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(S,{title:e.site.siteMetadata.title,phone:e.site.siteMetadata.phone,adress:e.site.siteMetadata.adress,fblink:e.site.siteMetadata.fblink}),i.a.createElement("div",{style:{width:"100%",minHeight:"67vh"}},i.a.createElement("main",null,t)),i.a.createElement(T,null))},data:n})};B.propTypes={children:o.a.node.isRequired};t.a=B},268:function(e,t,a){var n;e.exports=(n=a(400))&&n.default||n},399:function(e){e.exports={data:{site:{siteMetadata:{title:"Салон краси Фризієр",phone:"+380 67 123 45 67",adress:"Львів, вул.Болгарська, 1",fblink:"https://facebook.com"}}}}},400:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(69),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},556:function(e){e.exports={data:{backgroundImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAIF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDBP/aAAwDAQACEAMQAAABzZpLfAK//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQABBQJf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGRABAQADAQAAAAAAAAAAAAAAAQAQESEx/9oACAEBAAE/Ib05lJdX/9oADAMBAAIAAwAAABBoD//EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQMBAT8Q1FR//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGRABAQEBAQEAAAAAAAAAAAAAAREAMUFh/9oACAEBAAE/EHkZMilWfch6ZkGd7rPcild//9k=",aspectRatio:1.5005861664712778,src:"/static/f24f523f45c5dac4b8db29a910e41bda/c31a1/texture-flower-rose.jpg",srcSet:"/static/f24f523f45c5dac4b8db29a910e41bda/19ea0/texture-flower-rose.jpg 625w,\n/static/f24f523f45c5dac4b8db29a910e41bda/2f760/texture-flower-rose.jpg 1250w,\n/static/f24f523f45c5dac4b8db29a910e41bda/c31a1/texture-flower-rose.jpg 1280w",srcWebp:"/static/f24f523f45c5dac4b8db29a910e41bda/c4652/texture-flower-rose.webp",srcSetWebp:"/static/f24f523f45c5dac4b8db29a910e41bda/f9d62/texture-flower-rose.webp 625w,\n/static/f24f523f45c5dac4b8db29a910e41bda/0653c/texture-flower-rose.webp 1250w,\n/static/f24f523f45c5dac4b8db29a910e41bda/c4652/texture-flower-rose.webp 1280w",sizes:"(max-width: 1280px) 100vw, 1280px"}}}}}},558:function(e){e.exports={data:{site:{siteMetadata:{title:"Салон краси Фризієр",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@okslutsiv"}}}}},577:function(e,t,a){"use strict";(function(e,n){a.d(t,"a",function(){return l});a(77),a(55),a(78),a(578);var r=a(200),i=a(157),c=a(582),o=Object(i.createMuiTheme)({overrides:{MuiButton:{root:{borderRadius:20,minWidth:110},containedPrimary:{"&:hover":{backgroundColor:c.a[900]}}},MuiStepLabel:{label:{fontSize:14,color:c.c[500]}},MuiStepIcon:{root:{color:c.c[300]}},MuiRadio:{root:{color:c.c[900]}},MuiFilledInput:{root:{backgroundColor:c.c[200],color:c.a[900]}},MuiFormLabel:{root:{color:c.c[500],fontSize:14}}},palette:{background:{default:"rgba(255,250,240,1)"},primary:{main:c.a[700]},secondary:{main:c.d[700]},gold:{rgb:c.c.rgb,100:c.c[100],200:c.c[200],300:c.c[300],400:c.c[400],500:c.c[500],600:c.c[600],700:c.c[700],800:c.c[800],900:c.c[900]},olive:{rgb:c.d.rgb,100:c.d[100],200:c.d[200],300:c.d[300],400:c.d[400],500:c.d[500],600:c.d[600],700:c.d[700],800:c.d[800],900:c.d[900]},burgundy:{rgbdark:c.a.rgbdark,rgb:c.a.rgb,100:c.a[100],200:c.a[200],300:c.a[300],400:c.a[400],500:c.a[500],600:c.a[600],700:c.a[700],800:c.a[800],900:c.a[900],A100:c.a.A100,A200:c.a.A200,A400:c.a.A400,A700:c.a.A700},error:{rgb:c.b.rgb,100:c.b[100],300:c.b[300],500:c.b[500],700:c.b[700],900:c.b[900]},contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0,fontFamily:'"Roboto Slab", "serif"',h1:{color:"rgba(0, 0, 0, 0.87)",fontWeight:300,fontSize:"3rem",lineHeight:1.5,wordSpacing:"1rem",letterSpacing:"-0.00833em",textTransform:"uppercase",fontFamily:"'Raleway', 'sans-serif'"},h2:{color:"rgba(0, 0, 0, 0.87)",fontWeight:300,fontSize:"2.2rem",lineHeight:1.2,letterSpacing:"-0.00833em",textTransform:"uppercase",fontFamily:"'Raleway', 'sans-serif'",wordSpacing:"0.5rem"},h3:{color:"rgba(0, 0, 0, 0.87)",fontWeight:300,fontSize:"1.8rem",lineHeight:1,letterSpacing:"-0.00833em",fontFamily:"'Raleway', 'sans-serif'",wordSpacing:"0.3rem"},h5:{fontWeight:300,fontSize:"1.5rem",lineHeight:1.5,letterSpacing:"-0.00833em",fontFamily:"'Raleway', 'sans-serif'",wordSpacing:"0.25rem"},body1:{color:"rgba(0, 0, 0, 0.87)",fontFamily:'"Roboto Slab", "serif";',fontWeight:300,fontSize:"1rem",lineHeight:1.5,letterSpacing:"0.00938em"}}});function s(){return{theme:o,sheetsManager:new Map,sheetsRegistry:new r.SheetsRegistry,generateClassName:Object(i.createGenerateClassName)()}}function l(){return e.browser?(n.__INIT_MATERIAL_UI__||(n.__INIT_MATERIAL_UI__=s()),n.__INIT_MATERIAL_UI__):s()}}).call(this,a(290),a(73))},582:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"c",function(){return i}),a.d(t,"b",function(){return c});var n={rgbdark:"177,46,53",rgb:"234,174,177",50:"#ffffff",100:"#ffffff",200:"#f8e6e7",300:"#eaaeb1",400:"#e39599",500:"#dd7d82",600:"#d7656b",700:"#d04c53",800:"#c9353c",900:"#b12e35",A100:"#ffffff",A200:"#fef5f5",A400:"#f09da1",A700:"#e68e92",contrastDefaultColor:"dark"},r={rgb:"237,226,177",50:"#ffffff",100:"#ffffff",200:"#faf7ea",300:"#ede2b1",400:"#e7d898",500:"#e1cf7f",600:"#dbc666",700:"#d5bc4d",800:"#d0b335",900:"#baa02c",A100:"#ffffff",A200:"#fffefa",A400:"#f3e4a0",A700:"#e9d990",contrastDefaultColor:"dark"},i={rgb:"237,210,177",50:"#ffffff",100:"#ffffff",200:"#faf3ea",300:"#edd2b1",400:"#e7c498",500:"#e1b67f",600:"#dba866",700:"#d59a4d",800:"#d08c35",900:"#ba7b2c",A100:"#ffffff",A200:"#fffdfa",A400:"#f3cfa0",A700:"#e9c290",contrastDefaultColor:"dark"},c={rgb:"248,4,18",50:"#ffffff",100:"#febbbf",200:"#fd848b",300:"#fc3d48",400:"#fb1f2c",500:"#f80412",600:"#da0410",700:"#bc030e",800:"#9e030b",900:"#800209",A100:"#fffcfc",A200:"#ff969c",A400:"#ff303c",A700:"#ff1624",contrastDefaultColor:"light"}}}]);
//# sourceMappingURL=1-0ce64475b8b94f9a97ea.js.map