(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[274],{2425:function(e,n,t){"use strict";t.d(n,{fG:function(){return u}}),t(2322);var r=t(1298),o=t(88),a=t(4612),i=t(2784);let u=(0,i.createContext)(null),l=e=>{let n=(0,i.useContext)(u);if(!(null==n?void 0:n.Contents))throw Error("Adapt not supported by this component");return(0,i.createElement)(n.Contents,e)};l.shouldForwardSpace=!0,(0,r.$)(function({platform:e,when:n,children:t}){let r=(0,i.useContext)(u),l=(0,o.GS)(),c=!e;return("touch"===e&&(c=a.wT),"native"===e&&(c=!a.$L),"web"===e&&(c=a.$L),n&&!l[n]&&(c=!1),(0,a.LI)(()=>{c&&(null==r||r.setWhen(n||c))},[n,r,c]),c)?t:null},{Contents:l})},9998:function(e,n,t){"use strict";t(8661);var r=t(3640);t.o(r,"H1")&&t.d(n,{H1:function(){return r.H1}}),t.o(r,"H6")&&t.d(n,{H6:function(){return r.H6}}),t.o(r,"Paragraph")&&t.d(n,{Paragraph:function(){return r.Paragraph}})},3640:function(){},8920:function(e,n,t){"use strict";t.d(n,{useGetThemedIcon:function(){return o.Z}});var r=t(396);t.o(r,"H1")&&t.d(n,{H1:function(){return r.H1}}),t.o(r,"H6")&&t.d(n,{H6:function(){return r.H6}}),t.o(r,"Paragraph")&&t.d(n,{Paragraph:function(){return r.Paragraph}}),t.o(r,"useGetThemedIcon")&&t.d(n,{useGetThemedIcon:function(){return r.useGetThemedIcon}});var o=t(7882)},7882:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var r=t(2784),o=t(5486),a=t(4611);let i=e=>{let n=(0,o.Fg)();return(0,a.E0)(e||n[e]||n.color)},u=e=>{let n=i(e.color);return t=>t?(0,r.isValidElement)(t)?(0,r.cloneElement)(t,{...e,color:n,...t.props}):(0,r.createElement)(t,e):t}},9929:function(e,n,t){"use strict";t.d(n,{p:function(){return u}});var r=t(8939),o=t(1123),a=t(4703),i=t(8684);(0,o.G)({ScrollView:i.Z});let u=(0,a.z)(i.Z,{name:"ScrollView",scrollEnabled:!0,variants:{fullscreen:{true:r.Xu}}})},4949:function(e,n,t){"use strict";var r=t(4703),o=t(8939),a=t(678),i=t(4035),u=t(552),l=t(9970);t.o(l,"H1")&&t.d(n,{H1:function(){return l.H1}}),t.o(l,"H6")&&t.d(n,{H6:function(){return l.H6}}),t.o(l,"Paragraph")&&t.d(n,{Paragraph:function(){return l.Paragraph}});let c=(0,r.z)(o.sL,{name:i.r_,variants:{open:{true:{pointerEvents:"auto"},false:{opacity:0,pointerEvents:"none"}},unstyled:{false:{height:10,borderRadius:100,backgroundColor:"$background",zIndex:10,marginHorizontal:"35%",marginBottom:"$2",opacity:.5,hoverStyle:{opacity:.7}}}},defaultVariants:{unstyled:!1}}),s=(0,r.z)(a.K,{name:i._y,variants:{open:{true:{opacity:1,pointerEvents:"auto"},false:{opacity:0,pointerEvents:"none"}},unstyled:{false:{fullscreen:!0,position:"absolute",backgrounded:!0,zIndex:99999,pointerEvents:"auto"}}},defaultVariants:{unstyled:!1}}),d=(0,r.z)(o.FA,{name:i.BG,variants:{unstyled:{false:{flex:1,backgroundColor:"$background",borderTopLeftRadius:"$true",borderTopRightRadius:"$true",width:"100%",maxHeight:"100%",overflow:"hidden"}}},defaultVariants:{unstyled:!1}});(0,u.S)({Frame:d,Handle:c,Overlay:s})},4035:function(e,n,t){"use strict";t.d(n,{BG:function(){return o},Ey:function(){return u},_y:function(){return i},r_:function(){return a}});var r=t(4612);let o="Sheet",a="SheetHandle",i="SheetOverlay",u=r.C5?document.createElement("style"):null;u&&document.head.appendChild(u)},552:function(e,n,t){"use strict";t.d(n,{S:function(){return eR}});var r,o,a,i,u,l,c=t(2322),s=t(4598),d=t(8580),f=t(4612),h=t(6971),p=t(7897),m=t(1298),v=t(2784),g=function(){return(g=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function y(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>n.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]]);return t}var b="right-scroll-bar-position",w="width-before-scroll-bar",S=(void 0===r&&(r={}),void 0===o&&(o=function(e){return e}),a=[],i=!1,(u={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return a.length?a[a.length-1]:null},useMedium:function(e){var n=o(e,i);return a.push(n),function(){a=a.filter(function(e){return e!==n})}},assignSyncMedium:function(e){for(i=!0;a.length;){var n=a;a=[],n.forEach(e)}a={push:function(n){return e(n)},filter:function(){return a}}},assignMedium:function(e){i=!0;var n=[];if(a.length){var t=a;a=[],t.forEach(e),n=a}var r=function(){var t=n;n=[],t.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),a={push:function(e){n.push(e),o()},filter:function(e){return n=n.filter(e),a}}}}).options=g({async:!0,ssr:!1},r),u),H=function(){},E=v.forwardRef(function(e,n){var t,r,o,a=v.useRef(null),i=v.useState({onScrollCapture:H,onWheelCapture:H,onTouchMoveCapture:H}),u=i[0],l=i[1],c=e.forwardProps,s=e.children,d=e.className,f=e.removeScrollBar,h=e.enabled,p=e.shards,m=e.sideCar,b=e.noIsolation,w=e.inert,E=e.allowPinchZoom,P=e.as,C=void 0===P?"div":P,x=y(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),R=(t=[a,n],r=function(e){return t.forEach(function(n){return"function"==typeof n?n(e):n&&(n.current=e),n})},(o=(0,v.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,o.facade),O=g(g({},x),u);return v.createElement(v.Fragment,null,h&&v.createElement(m,{sideCar:S,removeScrollBar:f,shards:p,noIsolation:b,inert:w,setCallbacks:l,allowPinchZoom:!!E,lockRef:a}),c?v.cloneElement(v.Children.only(s),g(g({},O),{ref:R})):v.createElement(C,g({},O,{className:d,ref:R}),s))});E.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},E.classNames={fullWidth:w,zeroRight:b};var P=function(e){var n=e.sideCar,t=y(e,["sideCar"]);if(!n)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=n.read();if(!r)throw Error("Sidecar medium not found");return v.createElement(r,g({},t))};P.isSideCarExport=!0;var C=function(){var e=0,n=null;return{add:function(r){if(0==e&&(n=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var n=l||t.nc;return n&&e.setAttribute("nonce",n),e}())){var o,a;(o=n).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),a=n,(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}e++},remove:function(){--e||!n||(n.parentNode&&n.parentNode.removeChild(n),n=null)}}},x=function(){var e=C();return function(n,t){v.useEffect(function(){return e.add(n),function(){e.remove()}},[n&&t])}},R=function(){var e=x();return function(n){return e(n.styles,n.dynamic),null}},O={left:0,top:0,right:0,gap:0},T=function(e){return parseInt(e||"",10)||0},k=function(e){var n=window.getComputedStyle(document.body),t=n["padding"===e?"paddingLeft":"marginLeft"],r=n["padding"===e?"paddingTop":"marginTop"],o=n["padding"===e?"paddingRight":"marginRight"];return[T(t),T(r),T(o)]},L=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return O;var n=k(e),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:n[0],top:n[1],right:n[2],gap:Math.max(0,r-t+n[2]-n[0])}},M=R(),z=function(e,n,t,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===t&&(t="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([n&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(b," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(w," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(b," .").concat(b," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(w," .").concat(w," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},j=function(e){var n=e.noRelative,t=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r,a=v.useMemo(function(){return L(o)},[o]);return v.createElement(M,{styles:z(a,!n,o,t?"":"!important")})},$=!1;if("undefined"!=typeof window)try{var B=Object.defineProperty({},"passive",{get:function(){return $=!0,!0}});window.addEventListener("test",B,B),window.removeEventListener("test",B,B)}catch(e){$=!1}var I=!!$&&{passive:!1},N=function(e,n){var t=window.getComputedStyle(e);return"hidden"!==t[n]&&!(t.overflowY===t.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===t[n])},V=function(e,n){var t=n;do{if("undefined"!=typeof ShadowRoot&&t instanceof ShadowRoot&&(t=t.host),A(e,t)){var r=F(e,t);if(r[1]>r[2])return!0}t=t.parentNode}while(t&&t!==document.body);return!1},A=function(e,n){return"v"===e?N(n,"overflowY"):N(n,"overflowX")},F=function(e,n){return"v"===e?[n.scrollTop,n.scrollHeight,n.clientHeight]:[n.scrollLeft,n.scrollWidth,n.clientWidth]},Y=function(e,n,t,r,o){var a,i=(a=window.getComputedStyle(n).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,l=t.target,c=n.contains(l),s=!1,d=u>0,f=0,h=0;do{var p=F(e,l),m=p[0],v=p[1]-p[2]-i*m;(m||v)&&A(e,l)&&(f+=v,h+=m),l=l.parentNode}while(!c&&l!==document.body||c&&(n.contains(l)||n===l));return d&&(o&&0===f||!o&&u>f)?s=!0:!d&&(o&&0===h||!o&&-u>h)&&(s=!0),s},G=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Z=function(e){return[e.deltaX,e.deltaY]},D=function(e){return e&&"current"in e?e.current:e},_=0,W=[],X=(S.useMedium(function(e){var n=v.useRef([]),t=v.useRef([0,0]),r=v.useRef(),o=v.useState(_++)[0],a=v.useState(function(){return R()})[0],i=v.useRef(e);v.useEffect(function(){i.current=e},[e]),v.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var n=(function(e,n,t){if(t||2==arguments.length)for(var r,o=0,a=n.length;o<a;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))})([e.lockRef.current],(e.shards||[]).map(D),!0).filter(Boolean);return n.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),n.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var u=v.useCallback(function(e,n){if("touches"in e&&2===e.touches.length)return!i.current.allowPinchZoom;var o,a=G(e),u=t.current,l="deltaX"in e?e.deltaX:u[0]-a[0],c="deltaY"in e?e.deltaY:u[1]-a[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=V(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=V(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var h=r.current||o;return Y(h,n,e,"h"===h?l:c,!0)},[]),l=v.useCallback(function(e){if(W.length&&W[W.length-1]===a){var t="deltaY"in e?Z(e):G(e),r=n.current.filter(function(n){var r;return n.name===e.type&&n.target===e.target&&(r=n.delta)[0]===t[0]&&r[1]===t[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(D).filter(Boolean).filter(function(n){return n.contains(e.target)});(o.length>0?u(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),c=v.useCallback(function(e,t,r,o){var a={name:e,delta:t,target:r,should:o};n.current.push(a),setTimeout(function(){n.current=n.current.filter(function(e){return e!==a})},1)},[]),s=v.useCallback(function(e){t.current=G(e),r.current=void 0},[]),d=v.useCallback(function(n){c(n.type,Z(n),n.target,u(n,e.lockRef.current))},[]),f=v.useCallback(function(n){c(n.type,G(n),n.target,u(n,e.lockRef.current))},[]);v.useEffect(function(){return W.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:f}),document.addEventListener("wheel",l,I),document.addEventListener("touchmove",l,I),document.addEventListener("touchstart",s,I),function(){W=W.filter(function(e){return e!==a}),document.removeEventListener("wheel",l,I),document.removeEventListener("touchmove",l,I),document.removeEventListener("touchstart",s,I)}},[]);var h=e.removeScrollBar,p=e.inert;return v.createElement(v.Fragment,null,p?v.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,h?v.createElement(j,{gapMode:"margin"}):null)}),P),J=v.forwardRef(function(e,n){return v.createElement(E,g({},e,{ref:n,sideCar:X}))});J.classNames=E.classNames;let q=(0,v.memo)(e=>e.children?(0,c.jsx)(J,{...e}):null);J.classNames;var K=t(1881),Q=t(4035),U=t(7846);let[ee,en]=(0,U.b)(Q.BG),[et,er]=ee(Q.BG,{});var eo=t(2425),ea=t(360),ei=t(2676),eu=t(5190),el=t(3184),ec=t(6305),es=t(4038),ed=t(8765),ef=t(221),eh={addListener:()=>({remove:()=>{}}),dismiss(){(0,ef.Z)()},removeAllListeners(){},removeListener(){}};let ep=()=>{let[e,n]=(0,v.useState)(!1);return(0,v.useEffect)(()=>{let e=eh.addListener("keyboardDidShow",()=>{n(!0)}),t=eh.addListener("keyboardDidHide",()=>{n(!1)});return()=>{t.remove(),e.remove()}},[]),e};var em=t(9540);let ev=(0,v.createContext)({zIndex:1e5}),eg=(0,v.createContext)(null);function ey(e,n,t=25){return e<n?n+-(1.1-Math.pow(.1,Math.min(t,n-e)/t))*t:e}var eb=t(1439);let ew=()=>{let e=(0,v.useContext)(eS),n=null==e?void 0:e.hidden,t=n&&(null==e?void 0:e.open);return{controller:e,isHidden:n,isShowingNonSheet:t,disableDrag:null==e?void 0:e.disableDrag}},eS=(0,v.createContext)(null),eH=e=>{let{isHidden:n,controller:t}=ew(),[r,o]=(0,eb.T)({prop:(null==t?void 0:t.open)??e.open,defaultProp:e.defaultOpen??!1,onChange:n=>{var r,o;null==(r=null==t?void 0:t.onOpenChange)||r.call(t,n),null==(o=e.onOpenChange)||o.call(e,n)},strategy:"most-recent-wins",transition:!0});return{open:r,setOpen:o,isHidden:n,controller:t}},eE=(0,ei.Y)((0,v.forwardRef)(function(e,n){let t=(0,v.useContext)(ev),{animationConfig:r,modal:o=!1,zIndex:a=t.zIndex+1,moveOnKeyboardChange:i=!1,unmountChildrenWhenHidden:u=!1,portalProps:l}=e,d=ep(),h=eH(e),[p,m]=(0,v.useState)(null),g=function(e,n,t={}){let r=v.useRef(null),[o,a]=(0,v.useState)(0),i=e.snapPoints||[80],u=(0,v.useMemo)(()=>e.dismissOnSnapToBottom?[...i,0]:i,[JSON.stringify(i),e.dismissOnSnapToBottom]),[l,c]=(0,eb.T)({prop:e.position,defaultProp:e.defaultPosition||(n.open?0:-1),onChange:e.onPositionChange,strategy:"most-recent-wins",transition:!0}),s=!1===n.open?-1:l,{open:d}=n,f=(0,v.useCallback)(t=>{e.dismissOnSnapToBottom&&t===u.length-1?n.setOpen(!1):c(t)},[e.dismissOnSnapToBottom,u.length,c,n.setOpen]);d&&e.dismissOnSnapToBottom&&s===u.length-1&&c(0);let h=d&&s<0;(0,v.useEffect)(()=>{h&&f(0)},[f,h]);let p=(0,eu.J)();if(!p)throw Error("Must set animations in tamagui.config.ts");let m=function(e){if("undefined"==typeof document)return(0,v.useMemo)(()=>e(),[]);let n=(0,v.useRef)();return n.current||(n.current={v:e()}),n.current.v}(()=>({enabled:!1,y:0,paneY:0,paneMinY:0,scrollStartY:-1,drag:()=>{},release:()=>{},scrollLock:!1})),g=e.forceRemoveScrollEnabled??(d&&e.modal),y=u.reduce((e,n)=>Math.max(e,n)),b={screenSize:o/(y/100),maxSnapPoint:y,removeScrollEnabled:g,scrollBridge:m,modal:!!e.modal,open:n.open,setOpen:n.setOpen,hidden:!!n.isHidden,contentRef:r,frameSize:o,setFrameSize:a,dismissOnOverlayPress:e.dismissOnOverlayPress??!0,dismissOnSnapToBottom:e.dismissOnSnapToBottom??!1,onOverlayComponent:t.onOverlayComponent,scope:e.__scopeSheet,position:s,snapPoints:u,setPosition:f,setPositionImmediate:c,onlyShowFrame:!1};return b}(e,h,{onOverlayComponent:m}),{frameSize:y,setFrameSize:b,snapPoints:w,position:S,setPosition:H,scrollBridge:E,screenSize:P,maxSnapPoint:C}=g,{open:x,controller:R,isHidden:O}=h,T=(0,v.useRef)(null),k=(0,s.e)(n,T),[L,M]=(0,v.useState)(!1),z=!f.$L&&o&&L,j=(0,v.useContext)(eg),$=(0,v.useCallback)(e=>{M(e)},[]),B=(0,v.useMemo)(()=>w.map(e=>P?void 0===e?(console.warn("No snapPoint"),0):Math.round(P-e/100*P):0),[y,w]),I=(0,eu.J)(),{useAnimatedNumber:N,useAnimatedNumberStyle:V,useAnimatedNumberReaction:A}=I,F=I.View;(0,f.LI)(()=>{if(j&&x)return j(!0),()=>{j(!1)}},[j,x]);let Y=(0,v.useMemo)(()=>({zIndex:a}),[a]),G=N(10000.1),Z=(0,v.useRef)(10000.1);function D(){G.stop(),E.onFinishAnimate&&(E.onFinishAnimate(),E.onFinishAnimate=void 0)}A({value:G,hostRef:T},(0,v.useCallback)(e=>{I.isReactNative&&(Z.current=e,E.paneY=e)},[]));let _=10000.1===Z.current,W=(0,el.z)(e=>{if(0===y)return;let n=O||-1===e?P:B[e];if(Z.current!==n){if(Z.current=n,D(),_||O){if(G.setValue(P,{type:"timing",duration:0}),O)return;n=B[e],Z.current=n}G.setValue(n,{type:"spring",...r})}});(0,f.LI)(()=>{P&&_&&G.setValue(P,{type:"timing",duration:0})},[_,P]),(0,f.LI)(()=>{y&&!O&&(!_||x)&&W(S)},[O,y,x,S]);let X=e.disableDrag??(null==R?void 0:R.disableDrag),J=(0,ec.C)(),q=(0,v.useMemo)(()=>{if(X||!y||L)return;let e=B[0];E.paneMinY=e;let n=Z.current;function t(e){Q.Ey&&(e?Q.Ey.innerText=":root * { user-select: none !important; -webkit-user-select: none !important; }":Q.Ey.innerText="")}let r=({vy:e,dragAt:r})=>{i=!1,t(!1);let o=r+n,a=o+y*e*.2,u=0,l=1/0;for(let e=0;e<B.length;e++){let n=B[e],t=a>n?a-n:n-a;t<l&&(l=t,u=e)}H(u),W(u)},o=(e,n)=>{r({vy:n.vy,dragAt:n.dy})},a=()=>{t(!0),D(),n=Z.current},i=!1;return E.drag=t=>{i||(i=!0,a());let r=t+n;G.setValue(ey(r,e),{type:"direct"})},E.release=r,em.Z.create({onMoveShouldSetPanResponder:(e,{dy:n})=>{let t=0!==E.y,r=E.paneY-5<=E.paneMinY;return!t&&(!r||!!t||!(n<0))&&Math.abs(n)>5},onPanResponderGrant:a,onPanResponderMove:(t,{dy:r})=>{let o=r+n,a=ey(o,e);G.setValue(a,{type:"direct"})},onPanResponderEnd:o,onPanResponderTerminate:o,onPanResponderRelease:o})},[X,L,W,y,B,H]),K=(0,v.useCallback)(e=>{var n;let t;let r=(t=null==(n=e.nativeEvent)?void 0:n.layout.height,f.$L&&f.wT&&!x&&(t+=100),t);r&&b(r)},[d]),U=V(G,e=>{let n=0===y?10000.1:e;return{transform:[{translateY:n}]}}),ee=(0,v.useRef)(null);(0,v.useEffect)(()=>{if(f.$L||!i)return;let e=eh.addListener("keyboardDidShow",e=>{null===ee.current&&(ee.current=G.getValue(),G.setValue(Math.max(G.getValue()-e.endCoordinates.height,0)))}),n=eh.addListener("keyboardDidHide",()=>{null!==ee.current&&(G.setValue(ee.current),ee.current=null)});return()=>{n.remove(),e.remove()}},[i]);let[en,er]=(0,v.useState)(x?1:0);x&&0===en&&er(1),(0,v.useEffect)(()=>{if(!x){let e=setTimeout(()=>{er(0)},400);return()=>{clearTimeout(e)}}},[x]);let ei=(0,c.jsx)(ev.Provider,{value:Y,children:(0,c.jsxs)(et,{...g,children:[(0,c.jsx)(ea.M,{enterExitVariant:"open",children:z||!x?null:p}),(0,c.jsx)(F,{ref:k,...null==q?void 0:q.panHandlers,onLayout:K,pointerEvents:x&&!z?"auto":"none",animation:e.animation,style:[{position:"absolute",zIndex:a,width:"100%",height:`${C}%`,minHeight:`${C}%`,opacity:en},U],children:e.children})]})}),ef=(0,v.useContext)(eo.fG);if(o){let e=(0,c.jsx)(ed.Portal,{zIndex:a,...l,children:!!(en||!u)&&(0,c.jsx)(es.Q2,{forceClassName:!0,name:J,children:(0,c.jsx)(eo.fG.Provider,{value:ef,children:ei})})});return f.$L?e:(0,c.jsx)(eg.Provider,{value:$,children:e})}return ei}));var eP=t(9929);let eC=(0,v.forwardRef)(({__scopeSheet:e,children:n,...t},r)=>{let o=er("SheetScrollView",e),{scrollBridge:a}=o,i=(0,v.useRef)(null),u=(0,v.useRef)({lastPageY:0,dragAt:0,dys:[],isScrolling:!1,isDragging:!1});return(0,c.jsx)(eP.p,{ref:(0,s.F)(i,r),flex:1,scrollEventThrottle:8,onScroll:e=>{let{y:n}=e.nativeEvent.contentOffset;a.y=n,n>0&&(a.scrollStartY=-1)},onStartShouldSetResponder:()=>(a.scrollStartY=-1,u.current.isDragging=!0,!0),onMoveShouldSetResponder:()=>!1,onResponderRelease:()=>{if(!u.current.isDragging)return;u.current.isDragging=!1,a.scrollStartY=-1,u.current.isScrolling=!1;let e=0;if(u.current.dys.length){let n=u.current.dys.slice(-10),t=n.length?n.reduce((e,n)=>e+n,0):0,r=t/n.length;e=.04*r}u.current.dys=[],a.release({dragAt:u.current.dragAt,vy:e})},className:"_ovs-contain",...t,children:(0,v.useMemo)(()=>n,[n])})}),ex=({snapPoints:e,position:n,screenSize:t})=>{let r=e[0]/100,o=(e[n]||0)/100;return(1-r-o)*t};function eR({Handle:e,Frame:n,Overlay:t}){let r=e.extractable(({__scopeSheet:n,...t})=>{let r=er(Q.r_,n);return r.onlyShowFrame?null:(0,c.jsx)(e,{onPress:()=>{let e=r.snapPoints.length+(r.dismissOnSnapToBottom?-1:0),n=(r.position+1)%e;r.setPosition(n)},open:r.open,...t})}),o=t.extractable((0,v.memo)(e=>{let{__scopeSheet:n,...r}=e,o=er(Q._y,n),a=(0,v.useMemo)(()=>(0,c.jsx)(t,{...r,onPress:(0,d.composeEventHandlers)(r.onPress,o.dismissOnOverlayPress?()=>{o.setOpen(!1)}:void 0)}),[r.onPress,o.dismissOnOverlayPress]);return(0,f.LI)(()=>{var e;null==(e=o.onOverlayComponent)||e.call(o,a)},[a]),o.onlyShowFrame,null})),a=n.extractable((0,v.forwardRef)(({__scopeSheet:e,children:t,...r},o)=>{let a=er(Q.BG,e),{removeScrollEnabled:i,frameSize:u,contentRef:l}=a,d=(0,s.e)(o,l),f=ex(a),p=(0,v.useMemo)(()=>(0,c.jsxs)(n,{ref:d,height:u,...r,children:[t,(0,c.jsx)(h.Stack,{"data-sheet-offscreen-pad":!0,height:f,width:"100%"})]}),[r,u,f]);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(q,{forwardProps:!0,enabled:i,allowPinchZoom:!0,shards:[l],removeScrollBar:!1,children:p}),!r.disableHideBottomOverflow&&(0,c.jsx)(n,{...r,componentName:"SheetCover",children:null,position:"absolute",bottom:"-50%",zIndex:-1,height:a.frameSize,left:0,right:0,borderWidth:0,borderRadius:0,shadowOpacity:0})]})})),i=(0,v.forwardRef)(function(e,n){let t=(0,p.S)(),{isShowingNonSheet:r}=ew();return(e.native&&K.Z.OS,r||!t)?null:(0,c.jsx)(eE,{ref:n,...e})}),u={Frame:a,Overlay:o,Handle:r,ScrollView:eC},l=(0,m.$)(i,u);return(0,m.$)(i,{...u,Controlled:l})}},8198:function(e,n,t){"use strict";var r=t(4949);t.o(r,"H1")&&t.d(n,{H1:function(){return r.H1}}),t.o(r,"H6")&&t.d(n,{H6:function(){return r.H6}}),t.o(r,"Paragraph")&&t.d(n,{Paragraph:function(){return r.Paragraph}})},9970:function(){},59:function(e,n,t){"use strict";t.d(n,{H1:function(){return u},H6:function(){return l},Paragraph:function(){return a}});var r=t(4703),o=t(6003);let a=(0,r.z)(o.J,{name:"Paragraph",tag:"p",userSelect:"auto",color:"$color",size:"$true"}),i=(0,r.z)(a,{tag:"span",name:"Heading",accessibilityRole:"header",fontFamily:"$heading",size:"$8",margin:0}),u=(0,r.z)(i,{name:"H1",tag:"h1",size:"$10"});(0,r.z)(i,{name:"H2",tag:"h2",size:"$9"}),(0,r.z)(i,{name:"H3",tag:"h3",size:"$8"}),(0,r.z)(i,{name:"H4",tag:"h4",size:"$7"}),(0,r.z)(i,{name:"H5",tag:"h5",size:"$6"});let l=(0,r.z)(i,{name:"H6",tag:"h6",size:"$5"})},9004:function(e,n,t){"use strict";t(2784)},1307:function(e,n,t){"use strict";t(4612),t(2784),t(5710).Z.addEventListener("change",()=>{r.forEach(e=>e(window))});let r=new Set},2274:function(e,n,t){"use strict";t.d(n,{H1:function(){return u.H1},H6:function(){return u.H6},Paragraph:function(){return u.Paragraph}}),t(60),t(2425);var r=t(9998);t.o(r,"H1")&&t.d(n,{H1:function(){return r.H1}}),t.o(r,"H6")&&t.d(n,{H6:function(){return r.H6}}),t.o(r,"Paragraph")&&t.d(n,{Paragraph:function(){return r.Paragraph}});var o=t(8920);t.o(o,"H1")&&t.d(n,{H1:function(){return o.H1}}),t.o(o,"H6")&&t.d(n,{H6:function(){return o.H6}}),t.o(o,"Paragraph")&&t.d(n,{Paragraph:function(){return o.Paragraph}});var a=t(8765);t.o(a,"H1")&&t.d(n,{H1:function(){return a.H1}}),t.o(a,"H6")&&t.d(n,{H6:function(){return a.H6}}),t.o(a,"Paragraph")&&t.d(n,{Paragraph:function(){return a.Paragraph}});var i=t(8198);t.o(i,"H1")&&t.d(n,{H1:function(){return i.H1}}),t.o(i,"H6")&&t.d(n,{H6:function(){return i.H6}}),t.o(i,"Paragraph")&&t.d(n,{Paragraph:function(){return i.Paragraph}});var u=t(59);t(9004),t(7400),t(1307)},60:function(e,n,t){"use strict";var r,o=t(1123),a=t(2784),i=t(9641),u=t(2736);globalThis.React=r||(r=t.t(a,2)),(0,o.G)({View:i.Z,Text:u.Z}),"undefined"==typeof requestAnimationFrame&&(globalThis.requestAnimationFrame=setImmediate);let l=globalThis.cancelAnimationFrame;t.g.cancelAnimationFrame=e=>{try{l(e)}catch(e){}}}}]);