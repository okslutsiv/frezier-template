(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{146:function(e,a,A){"use strict";A.r(a);var t=A(0),r=A.n(t),n=A(194),d=A(190),i=A(4),c=A.n(i),l=A(7),o=A.n(l),s=A(160),m=A(159),g=A(565),f=A.n(g);A(168);function u(e){var a=e.classes,A=e.pricelist;return r.a.createElement(m.I,{className:a.table},r.a.createElement(m.L,null,r.a.createElement(m.M,{className:a.head},r.a.createElement(m.K,{className:a.headName},"Назва послуги"),r.a.createElement(m.K,{align:"right",className:a.headPrice},"Ціна, грн"))),r.a.createElement(m.J,null,A.map(function(e,A){return r.a.createElement(m.M,{key:A,className:a.row},r.a.createElement(m.K,{component:"th",scope:"row",className:a.name},e.service),r.a.createElement(m.K,{align:"right",className:a.price},e.price))})))}u.propTypes={classes:c.a.object.isRequired};var p=Object(s.withStyles)(function(e){var a=e.palette,A=a.burgundy,t=a.olive,r=a.gold;return{root:{width:"100%",marginTop:3*e.spacing.unit,overflowX:"auto"},table:{width:"100%",minWidth:300,fontFamily:"'Raleway', 'sans-serif'",fontSize:"1.1rem"},head:{backgroundColor:A[500],color:"#fff",fontSize:"1.2rem"},headName:{color:"#fff",fontSize:"1.2rem"},headPrice:{color:"#fff",fontSize:"1.2rem"},row:{"&:nth-of-type(even)":{backgroundColor:"rgba("+t.rgb+",0.3)"}},price:{color:A[900],fontSize:"1.2rem"},name:{color:r[900],fontSize:"1rem"}}})(u),b=function(e){function a(){for(var a,A=arguments.length,t=new Array(A),r=0;r<A;r++)t[r]=arguments[r];return(a=e.call.apply(e,[this].concat(t))||this).state={expanded:!1},a.handleExpandClick=function(){a.setState({expanded:!a.state.expanded})},a}return o()(a,e),a.prototype.render=function(){var e=this.props,a=e.classes,A=e.image,t=e.title,n=e.description,d=e.pricelist,i=(this.props||!1).leftImg,c=this.state.expanded,l=r.a.createElement(r.a.Fragment,null,r.a.createElement(m.c,{onClick:this.handleExpandClick},r.a.createElement(m.q,{item:!0,xs:10,sm:4},r.a.createElement(m.h,{className:a.media,image:A})),r.a.createElement(m.q,{item:!0,xs:12,sm:8},r.a.createElement(m.g,{title:t,className:a.title}),r.a.createElement(m.f,{className:a.content},r.a.createElement(m.O,null,n)))));return r.a.createElement(m.d,{raised:!0,className:a.card},r.a.createElement(m.q,{container:!0,justify:"center",alignContent:"flex-end"},i?l:r.a.createElement(r.a.Fragment,null," ",r.a.createElement(m.c,{onClick:this.handleExpandClick},r.a.createElement(m.q,{item:!0,xs:12,sm:8},r.a.createElement(m.g,{title:t,className:a.title,onClick:this.handleExpandClick}),r.a.createElement(m.f,{className:a.content},r.a.createElement(m.O,null,n))),r.a.createElement(m.q,{item:!0,xs:10,sm:4},r.a.createElement(m.h,{className:a.media,image:A})))),r.a.createElement(m.e,{className:a.actions,disableActionSpacing:!0},r.a.createElement(m.o,{onClick:this.handleExpandClick,className:a.button,"aria-expanded":this.state.expanded,"aria-label":"Show more",size:"large"},r.a.createElement(f.a,{className:c?a.expandOpen:a.expand})))),r.a.createElement(m.j,{in:this.state.expanded,className:a.collapse,timeout:"auto",unmountOnExit:!0},r.a.createElement(m.f,null,r.a.createElement(p,{pricelist:d}))))},a}(r.a.Component);b.propTypes={};var E=Object(s.withStyles)(function(e){var a,A=e.palette,t=A.gold,r=A.burgundy,n=A.olive;return{card:{maxWidth:860,margin:"3rem auto",overflow:"visible",border:"1px solid "+n[500]},media:(a={height:"95%",minHeight:200,margin:12,backgroundSize:"cover",borderRadius:"0.25rem"},a.margin="12px ",a),actions:{marginTop:"-1.5rem",marginBottom:"-2rem",width:"100%",textAlign:"center"},collapse:{marginTop:"3rem"},title:{"& span":{color:r[900],fontSize:"1.5rem",textAlign:"center",marginTop:"2rem",cursor:"pointer"}},content:{padding:"1vh 2vw",textAlign:"justify"},button:{color:r[700],fontSize:"0.8rem",backgroundImage:"linear-gradient(-135deg, rgba("+t.rgb+",1) 10%, rgba("+n.rgb+",1))",marginLeft:"50%",transform:"translateX(-50%)"},expand:{transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})(b),h=A(191),B=(A(248),A(192)),w=A(180);function j(e){var a=e.classes;return r.a.createElement("section",null,r.a.createElement(B.a,null,r.a.createElement("div",{className:a.root},r.a.createElement(m.O,{variant:"h2",gutterBottom:!0},"До ваших послуг"),r.a.createElement(m.O,{variant:"body1",className:a.intro},"повний комплекс перукарських послуг для чоловіків і жінок"),r.a.createElement(m.O,{className:a.intro},"Наведені на цій сторінці ціни є базовими.",r.a.createElement("br",null)," Реальна вартість може дещо відхилятись в обидва боки в залежності від обраної марки засобів, довжини волосся, Ваших уподобань та додаткових опцій."),r.a.createElement(w.a,{className:a.cta}))))}j.propTypes={};var Q=Object(s.withStyles)(function(e){var a=e.palette,A=a.gold,t=a.burgundy;return{root:{width:"100%",paddingBottom:"2.5rem",backgroundImage:"radial-gradient(circle, rgba(255,250,240,0.85) 40%,rgba(255,250,240,0.55))",paddingTop:"5vh",minHeight:"50vh","& h2":{color:A[900],textAlign:"center",margin:"0 2rem",textShadow:"0 0 15px rgba(255,250,240,1)"},"& p":{color:t[900],padding:"1rem 2rem",textAlign:"center",textShadow:"0 0 15px rgba(255,250,240,1)"}},cta:{display:"block",marginLeft:"50%",transform:"translateX(-50%)"},intro:{margin:"1rem 5%"}}})(j);A.d(a,"query",function(){return N});var x=function(e){var a=e.classes,A=e.data.allServicesJson.edges;return r.a.createElement(n.a,null,r.a.createElement(d.a,{title:"ABOUT"}),r.a.createElement(Q,null),r.a.createElement("div",{className:a.container},r.a.createElement("div",{className:a.panel},A.map(function(e,a){return r.a.createElement(E,{key:a,title:e.node.category,image:e.node.image.src.publicURL,description:e.node.intro,leftImg:a%2==0,pricelist:e.node.pricelist})}))))};x.propTypes={classes:c.a.object.isRequired};var N="2224774835";a.default=Object(h.a)(Object(s.withStyles)(function(e){e.palette.burgundy;return{container:{width:"90%",maxWidth:960,margin:"2rem auto 0",borderRadius:"0.25rem",backgroundColor:"rgba(255,250,240,0.8)"},panel:{padding:"0 2rem"},intro:{padding:"2rem 2rem"},title:{textAlign:"center"}}})(x))},180:function(e,a,A){"use strict";var t=A(0),r=A.n(t),n=(A(4),A(150)),d=A.n(n),i=A(163),c=A(159),l=A(160);a.a=Object(l.withStyles)(function(e){var a=e.palette,A=a.burgundy,t=a.olive,r=a.error;return{root:{color:t[200],backgroundImage:"linear-gradient(145deg, "+r[300]+", "+A[900]+"\n         )",lineHeight:1.8,borderRadius:20,fontFamily:'"Roboto Slab", "serif"',"&:hover":{backgroundImage:"linear-gradient(145deg, "+r[300]+", "+r[900]+"\n          )"}}}})(function(e){var a=e.classes,A=e.className,t=d()(a.root,A);return r.a.createElement(c.b,{variant:"contained",className:t,onClick:function(){return Object(i.b)("/contact")}},"Записатись")})},192:function(e,a,A){"use strict";var t=A(193),r=A(0),n=A.n(r),d=A(163),i=A(173),c=A.n(i);a.a=function(e){var a=e.children;return n.a.createElement(d.a,{query:"3693002899",render:function(e){return n.a.createElement(c.a,{Tag:"div",style:{minHeight:"5vh",backgroundSize:"cover"},fluid:e.backgroundImage.childImageSharp.fluid},a)},data:t})}},193:function(e){e.exports={data:{backgroundImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAGABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABtQBrPEf/xAAZEAEAAgMAAAAAAAAAAAAAAAACAQMEESL/2gAIAQEAAQUCFkqDZwshb//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAQACAwAAAAAAAAAAAAAAAAEAAhBBUf/aAAgBAQAGPwKw6i8x/8QAGRABAAMBAQAAAAAAAAAAAAAAAQARITGR/9oACAEBAAE/IdE7+y5xqdJwwn//2gAMAwEAAgADAAAAEAg//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAh/9oACAEDAQE/EENk2//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABkQAQADAQEAAAAAAAAAAAAAAAEAESFBMf/aAAgBAQABPxBLHEo11WciuxYJrnsuCiYWWz//2Q==",aspectRatio:3.4285714285714284,src:"/frezier-template/static/d678352d15062da284ffd28f29949bfd/9c216/salonInside.jpg",srcSet:"/frezier-template/static/d678352d15062da284ffd28f29949bfd/f48cd/salonInside.jpg 625w,\n/frezier-template/static/d678352d15062da284ffd28f29949bfd/2bb2f/salonInside.jpg 1250w,\n/frezier-template/static/d678352d15062da284ffd28f29949bfd/9c216/salonInside.jpg 2400w",srcWebp:"/frezier-template/static/d678352d15062da284ffd28f29949bfd/2dd07/salonInside.webp",srcSetWebp:"/frezier-template/static/d678352d15062da284ffd28f29949bfd/b6c1d/salonInside.webp 625w,\n/frezier-template/static/d678352d15062da284ffd28f29949bfd/70b7e/salonInside.webp 1250w,\n/frezier-template/static/d678352d15062da284ffd28f29949bfd/2dd07/salonInside.webp 2400w",sizes:"(max-width: 2400px) 100vw, 2400px"}}}}}},247:function(e,a,A){"use strict";var t=A(8);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(A(0)),n=t(A(165)),d=t(A(164));var i=function(e,a){var A=function(a){return r.default.createElement(d.default,a,e)};return A.displayName="".concat(a,"Icon"),(A=(0,n.default)(A)).muiName="SvgIcon",A};a.default=i},248:function(e,a,A){"use strict";var t=A(249),r=A(0),n=A.n(r),d=A(163),i=A(173),c=A.n(i);a.a=function(e){var a=e.children;return n.a.createElement(d.a,{query:"575969822",render:function(e){return n.a.createElement(c.a,{Tag:"div",style:{minHeight:"5vh",backgroundSize:"cover"},fluid:e.backgroundImage.childImageSharp.fluid},a)},data:t})}},249:function(e){e.exports={data:{backgroundImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHac1KyRP/EABgQAAIDAAAAAAAAAAAAAAAAAAARARAx/9oACAEBAAEFAmbcDP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABkQAAMAAwAAAAAAAAAAAAAAAAABIRARcf/aAAgBAQABPyGGdY1UhKQf/9oADAMBAAIAAwAAABB7H//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxCsf//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxBUqP/EABwQAQACAgMBAAAAAAAAAAAAAAEAESExQVGBof/aAAgBAQABPxDazrUssgs4mALFYWQtJ6QW3X2XSJeZ/9k=",aspectRatio:1.5002038320423972,src:"/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/2541b/goldGrung.jpg",srcSet:"/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/17bad/goldGrung.jpg 275w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/00a57/goldGrung.jpg 550w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/2541b/goldGrung.jpg 1100w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/b8edd/goldGrung.jpg 1650w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/8de51/goldGrung.jpg 2200w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/0b2cc/goldGrung.jpg 3300w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/19a7b/goldGrung.jpg 7360w",srcWebp:"/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/bdf85/goldGrung.webp",srcSetWebp:"/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/8ef9a/goldGrung.webp 275w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/2e0f2/goldGrung.webp 550w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/bdf85/goldGrung.webp 1100w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/f1116/goldGrung.webp 1650w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/e560a/goldGrung.webp 2200w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/71b05/goldGrung.webp 3300w,\n/frezier-template/static/2a00dd4332ba777bad4a487c3eebdc4d/b7ebc/goldGrung.webp 7360w",sizes:"(max-width: 1100px) 100vw, 1100px"}}}}}},565:function(e,a,A){"use strict";var t=A(8);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(A(0)),n=(0,t(A(247)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),"ExpandMore");a.default=n}}]);
//# sourceMappingURL=component---src-pages-about-js-28a76bb7930085decee9.js.map