(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,n){e.exports={searchbar:"Searchbar_searchbar__jo466",form:"Searchbar_form__XuKjc",button:"Searchbar_button__MhnaU",input:"Searchbar_input__2C4aO"}},15:function(e,t,n){e.exports={item:"ImageGalleryItem_item__26F25",image:"ImageGalleryItem_image__32_jr"}},27:function(e,t,n){e.exports={gallery:"ImageGallery_gallery__gboaM"}},28:function(e,t,n){e.exports={button:"Button_button__3QF_k"}},30:function(e,t,n){e.exports={loader:"ModalLoader_loader__8XFZM"}},31:function(e,t,n){e.exports={App:"App_App__aOmNj"}},32:function(e,t,n){e.exports={overlay:"Overlay_overlay__3DDtl"}},33:function(e,t,n){e.exports={modal:"Modal_modal__P3_V5"}},40:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=(n(40),n(16)),u=n(4),s=n(5),l=n(7),h=n(6),m=n(9),p=n.n(m),d=n(17),f=n(14),b=n(26),j=n.n(b),v=n(35),g={key:"24268385-a09efe65560efa0dec086fa93",image_type:"photo",orientation:"horizontal",editors_choice:"true",safesearch:"true",per_page:"12"},O=["webformatURL","largeImageURL"],y="There are no matching images.",w="You've reached the end of search results.",_={page:1,totalHits:null,query:null},x=j.a.create({baseURL:"https://pixabay.com",headers:{Accept:"application/json"}}),k=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,r,o,c,i,u=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:1,_.page=n,a=Object(d.a)({q:t,page:n},g),e.next=5,x("api",{params:a});case 5:return r=e.sent,o=r.data,c=N(o),i=E(c),L(o.totalHits),_.totalHits=o.totalHits,_.query=t,e.abrupt("return",I(i));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(f.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(_.page),e.next=3,k(_.query,_.page+1);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){if(e*g.per_page>=_.totalHits)throw new Error(w)},L=function(e){if(0===e)throw new Error(y)},I=function(e){return new Promise((function(t){return t(e)}))},N=function(e){return e.hits.map(M)},M=function(e){return O.reduce((function(t,n){return t[n]=e[n],t}),{})},E=function(e){return e.map((function(e){return Object(d.a)({id:Object(v.a)()},e)}))},U=n(10),A=n.n(U),R=n(34),P=n(1),q=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value)},e.onChange=function(t){e.setState({value:t.target.value})},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(P.jsx)("header",{className:A.a.searchbar,children:Object(P.jsxs)("form",{className:A.a.form,onSubmit:this.onSubmit,children:[Object(P.jsx)("button",{type:"submit",className:A.a.button,children:Object(P.jsx)(R.a,{size:20})}),Object(P.jsx)("input",{className:A.a.input,onChange:this.onChange,value:this.state.value,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),n}(a.Component),F=n(15),V=n.n(F),D=function(e){var t=e.onClick,n=e.url;return Object(P.jsx)("li",{onClick:t,className:V.a.item,children:Object(P.jsx)("img",{className:V.a.image,src:n,alt:""})})},H=n(27),G=n.n(H);var T=function(e){var t=e.onItemClick,n=e.images;return Object(P.jsx)("ul",{className:G.a.gallery,children:n.map((function(e){var n=e.id,a=e.webformatURL;return Object(P.jsx)(D,{onClick:function(){return t(n)},url:a},n)}))})},z=n(28),B=n.n(z),J=function(e){var t=e.onClick;return Object(P.jsx)("button",{className:B.a.button,type:"button",onClick:t,children:"Load more"})},X=n(29),Y=n.n(X),K=(n(81),n(30)),Q=n.n(K),W=document.querySelector("#loader"),Z=function(e){var t=e.color,n=void 0===t?"#fff":t,a=Object(P.jsx)("div",{className:Q.a.loader,children:Object(P.jsx)(Y.a,{type:"Oval",color:n,height:100,width:100,timeout:0})});return Object(o.createPortal)(a,W)},$=n(31),ee=n.n($),te=n(32),ne=n.n(te),ae=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleOverlayClick=function(t){t.target===t.currentTarget&&e.props.onOverlayClick()},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(P.jsx)("div",{onClick:this.handleOverlayClick,className:ne.a.overlay,children:this.props.component})}}]),n}(r.a.Component),re=n(33),oe=n.n(re),ce=document.querySelector("#modal"),ie=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onEscPress=function(t){"Escape"===t.code&&e.props.onClose()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onEscPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onEscPress)}},{key:"render",value:function(){var e=this.props,t=e.onClose,n=e.url,a=Object(P.jsxs)("div",{className:oe.a.modal,children:[Object(P.jsx)(Z,{}),Object(P.jsx)("img",{src:n,alt:""})]});return Object(o.createPortal)(Object(P.jsx)(ae,{onOverlayClick:t,component:a}),ce)}}]),n}(a.Component),ue="empty",se="loading",le="normal",he="end",me="modal",pe=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],view:se,backupView:"",modalImageURL:""},e.handleSubmit=function(t){e.handleLoading((function(){return k(t)}),(function(t){return e.setState({images:t,view:le})}))},e.handleLoadMore=function(){var t=C;e.handleLoading(t,(function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),view:le}}))}))},e.handleLoading=function(t,n){e.setState((function(e){return{backupView:e.view,view:se}})),t().then(n).then((function(){return e.setState({view:le})})).catch(e.handleFetchError)},e.handleFetchError=function(t){t.message!==w?t.message!==y?(console.log(t.message),e.setState((function(e){return{view:e.backupView}}))):e.setState({images:[],view:ue}):e.setState({view:he})},e.handleModalClose=function(){e.setState((function(e){return{view:e.backupView}}))},e.handleItemClick=function(t){e.setState((function(e){return{backupView:e.view,modalImageURL:e.images.find((function(e){return e.id===t})).largeImageURL,view:me}}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.handleLoading((function(){return k("")}),(function(t){return e.setState({images:t,view:le})}))}},{key:"render",value:function(){var e=this.state,t=e.images,n=e.view,a=e.modalImageURL,r=se,o=le,c=he,i=me,u=ue;return Object(P.jsxs)("main",{className:ee.a.App,children:[Object(P.jsx)(q,{onSubmit:this.handleSubmit}),Object(P.jsx)(T,{onItemClick:this.handleItemClick,images:t}),n===u&&Object(P.jsx)("p",{children:"There are no matching images."}),n===o&&Object(P.jsx)(J,{onClick:this.handleLoadMore}),n===c&&Object(P.jsx)("p",{children:"You've reached the collection end."}),n===r&&Object(P.jsx)(Z,{color:"#3f51b5"}),n===i&&Object(P.jsx)(ie,{url:a,onClose:this.handleModalClose})]})}}]),n}(a.Component);c.a.render(Object(P.jsx)(a.StrictMode,{children:Object(P.jsx)(pe,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.136e10a7.chunk.js.map