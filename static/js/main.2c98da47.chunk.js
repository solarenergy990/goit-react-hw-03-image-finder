(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3XdA_",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3EVlM"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2kwe-",Modal:"Modal_Modal__79lnf"}},14:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3Av3y"}},15:function(e,t,a){e.exports={Button:"Button_Button__2id94"}},16:function(e,t,a){e.exports={container:"Container_container__1vUBP"}},17:function(e,t,a){e.exports={App:"App_App__3wOVV"}},23:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(8),c=a.n(o),i=(a(22),a(23),a(12)),l=a(3),s=a(4),u=a(6),m=a(5),h=(a(24),a(13)),g=a.n(h),d=a(10),p=a.n(d),b=a(0),f=function(e){var t=e.image,a=e.onModalOpen,n=t.smallImg,r=t.imgTag,o=t.largeImg;return Object(b.jsx)("li",{className:p.a.ImageGalleryItem,children:Object(b.jsx)("img",{src:n,alt:r,onClick:function(e){console.log(e.target),a(e.target.attributes["data-large"].value)},className:p.a.ImageGalleryItemImage,"data-large":o})})},j=a(2),O=a.n(j),y=a(14),v=a.n(y),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.imageArr,a=e.onModalOpen;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:v.a.ImageGallery,children:t&&t.map((function(e){return Object(b.jsx)(f,{image:e,onModalOpen:a},e.imageId)}))})})}}]),a}(n.Component);I.defaultProps={imageArr:O.a.array.isRequired};var _=I,S=a(7),x=a.n(S),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleNameChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):alert("Enter search query in the search field")},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:x.a.Searchbar,children:Object(b.jsxs)("form",{className:x.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(b.jsx)("button",{type:"submit",className:x.a.SearchFormButton,children:Object(b.jsx)("span",{className:x.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:x.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleNameChange,value:this.state.imageName})]})})}}]),a}(n.Component),k=a(15),M=a.n(k),N=function(e){var t=e.onClick;return Object(b.jsx)("button",{type:"button",className:M.a.Button,onClick:t,children:"Load More"})},C=a(11),F=a.n(C),L=document.querySelector("#modal-root"),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onEscDown=function(t){"Escape"===t.code&&e.props.onModalClose()},e.onBackdropClick=function(t){t.currentTarget===t.target&&e.props.onModalClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){console.log("component did mount"),window.addEventListener("keydown",this.onEscDown)}},{key:"componentWillUnmount",value:function(){console.log(" component will unmount"),window.removeEventListener("keydown",this.onEscDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:F.a.Overlay,onClick:this.onBackdropClick,children:Object(b.jsx)("div",{className:F.a.Modal,children:Object(b.jsx)("img",{src:this.props.src,alt:this.props.alt})})}),L)}}]),a}(n.Component),G=a(16),A=a.n(G),P=function(e){var t=e.children;return Object(b.jsx)("div",{className:A.a.container,children:t})},E=a(17),T=a.n(E);var D={fetchImage:function(e,t){var a="".concat("https://pixabay.com/api","/?key=").concat("21934405-57162f124158c436f0bdddd5d","&q=").concat(e,"&image_type=photo&orientation=horizontal&page=").concat(t,"&per_page=12");return fetch(a).then((function(e){if(e.ok)return e.json()})).then((function(e){return e.hits}))}},q=function(e){return e.map((function(e){return{imageId:e.id,smallImg:e.webformatURL,largeImg:e.largeImageURL,imgTag:e.tags}}))},U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={pictures:[],currentPage:1,searchQuery:"",isLoading:!1,error:null,openModal:!1},e.handleFormSubmit=function(t){e.setState({searchQuery:t,currentPage:1,pictures:[]})},e.fetchPictures=function(t,a){return D.fetchImage(t,a).then((function(t){e.setState((function(e){return{pictures:[].concat(Object(i.a)(e.pictures),Object(i.a)(q(t))),isLoading:!1}})),0===e.state.pictures.length&&alert("Nothing found!")}))},e.scrollDown=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.onLoadMore=function(){e.setState((function(e){return{currentPage:e.currentPage+1,isLoading:!0}}))},e.setLargeImg=function(t){return e.setState((function(e){e.largeImg;return{largeImg:t}}))},e.onLargeImgOpen=function(t){e.setLargeImg(t),e.modalToggler()},e.modalToggler=function(){e.setState((function(e){return{openModal:!e.openModal}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.currentPage,r=a.searchQuery;r===t.searchQuery&&n===t.currentPage||this.fetchPictures(r,n),n>1&&this.scrollDown()}},{key:"render",value:function(){var e=this.state,t=e.pictures,a=e.openModal,n=e.isLoading,r=e.largeImg,o=e.searchQuery;return Object(b.jsxs)("div",{className:T.a.App,children:[a&&Object(b.jsx)(B,{onModalClose:this.modalToggler,src:r,alt:o}),Object(b.jsx)(w,{onSubmit:this.handleFormSubmit}),Object(b.jsx)(P,{children:t.length>0&&Object(b.jsx)(_,{imageArr:t,onModalOpen:this.onLargeImgOpen})}),Object(b.jsxs)(P,{children:[n&&Object(b.jsx)(g.a,{type:"Grid",color:"#00BFFF",height:80,width:80}),t.length>0&&!n&&Object(b.jsx)(N,{onClick:this.onLoadMore})]})]})}}]),a}(n.Component);c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(U,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2HF0z",SearchForm:"Searchbar_SearchForm__2UzTn",SearchFormButton:"Searchbar_SearchFormButton__2q3W0",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2PEim",SearchFormInput:"Searchbar_SearchFormInput__2Zbtq"}}},[[46,1,2]]]);
//# sourceMappingURL=main.2c98da47.chunk.js.map