(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{2022:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(6285)}])},4078:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(6094),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8444:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let n=r(7677),l=r(4848),o=n._(r(6540)),u=r(6846),a=r(7262),s=r(5543),c=r(4881),f=r(3912),i=r(4671),d=r(3479),p=r(4078),h=r(5371),b=r(4293),g=new Set;function y(e,t,r,n){if((0,a.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let l=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(g.has(l))return;g.add(l)}e.prefetch(t,r,n).catch(e=>{})}}function m(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:s,as:g,children:v,prefetch:x=null,passHref:j,replace:_,shallow:M,scroll:O,locale:k,onClick:w,onMouseEnter:C,onTouchStart:N,legacyBehavior:P=!1,...E}=e;r=v,P&&("string"==typeof r||"number"==typeof r)&&(r=(0,l.jsx)("a",{children:r}));let S=o.default.useContext(i.RouterContext),R=!1!==x,{href:I,as:L}=o.default.useMemo(()=>{if(!S){let e=m(s);return{href:e,as:g?m(g):e}}let[e,t]=(0,u.resolveHref)(S,s,!0);return{href:e,as:g?(0,u.resolveHref)(S,g):t||e}},[S,s,g]),T=o.default.useRef(I),D=o.default.useRef(L);P&&(n=o.default.Children.only(r));let U=P?n&&"object"==typeof n&&n.ref:t,[K,z,A]=(0,d.useIntersection)({rootMargin:"200px"}),H=o.default.useCallback(e=>{(D.current!==L||T.current!==I)&&(A(),D.current=L,T.current=I),K(e)},[L,I,A,K]),J=(0,b.useMergedRef)(H,U);o.default.useEffect(()=>{S&&z&&R&&y(S,I,L,{locale:k})},[L,I,z,k,R,null==S?void 0:S.locale,S]);let X={ref:J,onClick(e){P||"function"!=typeof w||w(e),P&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,l,o,u,s){let{nodeName:c}=e.currentTarget;"A"===c.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,a.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==u||u;"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:o,locale:s,scroll:e}):t[l?"replace":"push"](n||r,{scroll:e})})())}(e,S,I,L,_,M,O,k)},onMouseEnter(e){P||"function"!=typeof C||C(e),P&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&y(S,I,L,{locale:k,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){P||"function"!=typeof N||N(e),P&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&y(S,I,L,{locale:k,priority:!0,bypassPrefetchedCheck:!0})}};if((0,c.isAbsoluteUrl)(L))X.href=L;else if(!P||j||"a"===n.type&&!("href"in n.props)){let e=void 0!==k?k:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,p.getDomainLocale)(L,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);X.href=t||(0,h.addBasePath)((0,f.addLocale)(L,e,null==S?void 0:S.defaultLocale))}return P?o.default.cloneElement(n,X):(0,l.jsx)("a",{...E,...X,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3479:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let n=r(6540),l=r(9820),o="function"==typeof IntersectionObserver,u=new Map,a=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!o,[f,i]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(o){if(c||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let l=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:l},a.push(r),u.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&i(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!f){let e=(0,l.requestIdleCallback)(()=>i(!0));return()=>(0,l.cancelIdleCallback)(e)}},[c,r,t,f,d.current]),[p,f,(0,n.useCallback)(()=>{i(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4293:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return l}});let n=r(6540);function l(e,t){let r=(0,n.useRef)(()=>{}),l=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),l.current()):(r.current=o(e,n),l.current=o(t,n))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6285:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(4848),l=r(6540),o=r(1106),u=r.n(o);function a(){let[e,t]=(0,l.useState)([]),[r,o]=(0,l.useState)(""),a=e=>{localStorage.setItem("tasks",JSON.stringify(e))},s=r=>{t(e.filter((e,t)=>t!==r))},c=r=>{t(e.map((e,t)=>t===r?{...e,completed:!e.completed}:e))};return(0,l.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("tasks")||"[]");e.length&&t(e)},[]),(0,l.useEffect)(()=>{a(e)},[e]),(0,n.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:(0,n.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl",children:[(0,n.jsx)("h1",{className:"text-4xl font-bold mb-6 text-center text-gray-800",children:"Lista zadań"}),(0,n.jsxs)("div",{className:"flex mb-4",children:[(0,n.jsx)("input",{type:"text",value:r,onChange:e=>o(e.target.value),placeholder:"Dodaj nowe zadanie",className:"p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"}),(0,n.jsx)("button",{onClick:()=>{""!==r.trim()&&(t([...e,{text:r,completed:!1}]),o(""))},className:"bg-blue-500 text-white px-6 py-3 rounded-r-md hover:bg-blue-600",children:"Dodaj"})]}),(0,n.jsx)("ul",{className:"space-y-3",children:e.map((e,t)=>(0,n.jsxs)("li",{className:"flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm",children:[(0,n.jsx)("span",{onClick:()=>c(t),className:"cursor-pointer ".concat(e.completed?"line-through text-gray-400":"text-gray-800"),children:e.text}),(0,n.jsxs)("div",{className:"flex space-x-4",children:[(0,n.jsx)(u(),{href:"/task/".concat(t),children:(0,n.jsx)("span",{className:"cursor-pointer text-green-600 hover:text-green-800",children:"Info"})}),(0,n.jsx)("button",{onClick:()=>s(t),className:"text-red-600 hover:text-red-800",children:"Usuń"})]})]},t))})]})})}},1106:(e,t,r)=>{e.exports=r(8444)}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(2022)),_N_E=e.O()}]);