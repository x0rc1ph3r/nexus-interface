(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7974],{23210:function(e,t,r){"use strict";var s=r(77062),n=(r(67294),r(85893));function a({header:e,footer:t,backgroundImage:r="",title:s="",description:a="",children:l,className:c}){return(0,n.jsxs)("div",{className:"relative ".concat(c),style:{borderRadius:"10px",backgroundImage:"url(".concat(r,")"),backgroundRepeat:"no-repeat",backgroundSize:"contain",backgroundPosition:"center bottom"},children:[e&&(0,n.jsx)(n.Fragment,{children:e}),(0,n.jsxs)("div",{className:"px-2 py-4 sm:p-8",children:[s&&(0,n.jsx)("div",{className:"mb-4 text-2xl text-high-emphesis",children:s}),a&&(0,n.jsx)("div",{className:"text-base text-secondary",children:a}),l]}),t&&(0,n.jsx)(n.Fragment,{children:t})]})}a.Header=function({className:e,children:t}){return(0,n.jsx)("div",{className:(0,s.A)("flex items-center rounded-t px-4 sm:px-8 py-4 sm:py-6",e),children:t})},a.Gradient=({children:e,className:t})=>(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("div",{className:(0,s.A)("rounded pointer-events-none absolute w-full h-full bg-gradient-to-r from-opaque-blue to-opaque-pink opacity-40",t)}),e]}),t.Z=a},78960:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var s=r(63801),n=r(85169),a=r(134),l=r(36325),c=r(79067),i=r(12614),o=r(98950),d=r(69260),u=r.n(d),p=r(67294),h=r(71862),m=r(41626),x=r(66223),f=r(39281),g=r(40588),y=r(85893);function j({fiatValue:e,priceImpact:t}){const r=(0,p.useMemo)((()=>{if(!t)return;if(t.lessThan("0"))return"text-green";const e=(0,g.oX)(t);return e<1?"text-secondary":e<3?"text-yellow":"text-red"}),[t]);return(0,y.jsxs)("div",{className:"flex justify-end space-x-1 text-xs font-medium text-right text-secondary",children:[e?(0,y.jsxs)(y.Fragment,{children:["\u2248$ ",(0,y.jsx)("div",{className:"cursor-pointer",children:null===e||void 0===e?void 0:e.toSignificant(6,{groupSeparator:","})})]}):"",t?(0,y.jsxs)("span",{className:r,children:[t.multiply(-1).toSignificant(3),"%"]}):null]})}function b({value:e,onUserInput:t,onMax:r,showMaxButton:d,label:g="Input",onCurrencySelect:b,currency:v,disableCurrencySelect:w=!1,otherCurrency:N,id:O,showCommonBases:k,renderBalance:C,fiatValue:S,priceImpact:A,hideBalance:Z=!1,pair:E=null,hideInput:L=!1,locked:P=!1,customBalanceText:T,allowManageTokenList:_=!0,showSearch:I=!0}){const{i18n:D}=(0,n.mV)(),{0:M,1:R}=(0,p.useState)(!1),{account:B}=(0,i.a)(),K=(0,o._h)(null!==B&&void 0!==B?B:void 0,null!==v&&void 0!==v?v:void 0),U=(0,p.useCallback)((()=>{R(!1)}),[R]);return(0,y.jsxs)("div",{id:O,className:(0,l.AK)(L?"p-4":"p-5","rounded bg-dark-800"),children:[(0,y.jsxs)("div",{className:"flex flex-col justify-between space-y-3 sm:space-y-0 sm:flex-row",children:[(0,y.jsx)("div",{className:(0,l.AK)("w-full sm:w-2/5"),children:(0,y.jsx)("button",{type:"button",className:(0,l.AK)(v?"text-primary":"text-high-emphesis","open-currency-select-button h-full outline-none select-none cursor-pointer border-none text-xl font-medium items-center"),onClick:()=>{b&&R(!0)},children:(0,y.jsxs)("div",{className:"flex",children:[E?(0,y.jsx)(x.Z,{currency0:E.token0,currency1:E.token1,size:54,margin:!0}):v?(0,y.jsx)("div",{className:"flex items-center",children:(0,y.jsx)(m.X,{currency:v,size:"54px"})}):(0,y.jsx)("div",{className:"rounded bg-dark-700",style:{maxWidth:54,maxHeight:54},children:(0,y.jsx)("div",{style:{width:54,height:54},children:(0,y.jsx)(u(),{animationData:a,autoplay:!0,loop:!0})})}),E?(0,y.jsxs)("span",{className:(0,l.AK)("pair-name-container",Boolean(v&&v.symbol)?"text-2xl":"text-xs"),children:[null===E||void 0===E?void 0:E.token0.symbol,":",null===E||void 0===E?void 0:E.token1.symbol]}):(0,y.jsxs)("div",{className:"flex flex-1 flex-col items-start justify-center mx-3.5",children:[g&&(0,y.jsx)("div",{className:"text-xs font-medium text-secondary whitespace-nowrap",children:g}),(0,y.jsxs)("div",{className:"flex items-center",children:[(0,y.jsx)("div",{className:"text-lg font-bold token-symbol-container md:text-2xl",children:(v&&v.symbol&&v.symbol.length>20?v.symbol.slice(0,4)+"..."+v.symbol.slice(v.symbol.length-5,v.symbol.length):null===v||void 0===v?void 0:v.symbol)||(0,y.jsx)("div",{className:"px-2 py-1 mt-1 text-xs font-medium bg-transparent border rounded-full hover:bg-primary border-low-emphesis text-secondary whitespace-nowrap ",children:D._(D._("Select a token"))})}),!w&&v&&(0,y.jsx)(s.v4q,{width:16,height:16,className:"ml-2 stroke-current"})]})]})]})})}),!L&&(0,y.jsx)("div",{className:(0,l.AK)("flex items-center w-full space-x-3 rounded bg-dark-900 focus:bg-dark-700 p-3 sm:w-3/5"),children:(0,y.jsxs)(y.Fragment,{children:[d&&K&&(0,y.jsx)(h.ZP,{variant:"outlined",color:"blue",onClick:r,size:"xs",children:D._(D._("Max"))}),(0,y.jsx)(f.Z.Numeric,{id:"token-amount-input",value:e,onUserInput:e=>{t(e)}}),!Z&&v&&K?(0,y.jsxs)("div",{className:"flex flex-col",children:[(0,y.jsx)("div",{onClick:r,className:"text-xs font-medium text-right cursor-pointer text-low-emphesis",children:C?C(K):(0,y.jsxs)(y.Fragment,{children:[D._(D._("Balance:"))," ",(0,l.ZO)(K,4)," ",v.symbol]})}),(0,y.jsx)(j,{fiatValue:S,priceImpact:A})]}):null]})})]}),!w&&b&&(0,y.jsx)(c.Z.Controlled,{open:M,onDismiss:U,onCurrencySelect:b,selectedCurrency:null!==v&&void 0!==v?v:void 0,otherSelectedCurrency:null!==N&&void 0!==N?N:void 0,showCommonBases:k,allowManageTokenList:_,showSearch:I})]})}},66223:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(36325),n=(r(67294),r(41626)),a=r(85893);function l({currency0:e,currency1:t,className:r="",logoClassName:l="",size:c=16}){return(0,a.jsxs)("div",{className:(0,s.AK)("flex items-center space-x-2",r),children:[(0,a.jsx)(n.X,{className:l,currency:e,size:c.toString()+"px"}),(0,a.jsx)(n.X,{className:l,currency:t,size:c.toString()+"px"})]})}},48410:function(e,t,r){"use strict";var s=r(59499),n=r(4730),a=r(36325),l=r(67294),c=r(85893);const i=["value","onUserInput","placeholder","className"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const u=RegExp("^\\d*(?:\\\\[.])?\\d*$"),p="w-0 p-0 text-2xl bg-transparent",h=l.memo((e=>{let{value:t,onUserInput:r,placeholder:s,className:l=p}=e,o=(0,n.Z)(e,i);return(0,c.jsx)("input",d(d({},o),{},{value:t,onChange:e=>{var t;(""===(t=e.target.value.replace(/,/g,"."))||u.test((0,a.hr)(t)))&&r(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:s||"0.0",min:0,minLength:1,maxLength:79,spellCheck:"false",className:(0,a.AK)("relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary",l)}))}));h.displayName="NumericalInput",t.Z=h},23987:function(e,t,r){"use strict";var s=r(59499),n=r(4730),a=r(36325),l=r(67294),c=r(85893);const i=["value","onUserInput","placeholder","className","align","fontSize"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const u=RegExp("^\\d*$"),p=l.memo((e=>{let{value:t,onUserInput:r,placeholder:s,className:l,align:o,fontSize:p="24px"}=e,h=(0,n.Z)(e,i);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("input",d({value:t,onChange:e=>{var t;(""===(t=e.target.value.replace(/,/g,".").replace(/%/g,""))||u.test((0,a.hr)(t)))&&Number(t)<=100&&r(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*$",placeholder:s||"100",maxLength:3,className:(0,a.AK)("right"===o&&"text-right","font-medium bg-transparent whitespace-nowrap overflow-ellipsis flex-auto",l),style:{fontSize:p}},h))})}));p.displayName="PercentInput",t.Z=p},39281:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var s=r(59499),n=r(4730),a=r(36325),l=r(67294),c=r(85893);const i=["value","onUserInput","placeholder","className","align","fontSize"];function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const u=l.memo((e=>{let{value:t,onUserInput:r,placeholder:s,className:l="flex w-full h-full p-3 font-bold rounded overflow-ellipsis recipient-address-input bg-dark-900 placeholder-low-emphesis",align:o,fontSize:u="24px"}=e,p=(0,n.Z)(e,i);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)("input",d({value:t,onChange:e=>{r(e.target.value.replace(/\s+/g,""))},inputMode:"text",title:"Wallet Address or ENS name",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false",placeholder:"Wallet Address or ENS name",pattern:"^(0x[a-fA-F0-9]{40})$",type:"text",className:(0,a.AK)("right"===o&&"text-right","font-medium bg-transparent whitespace-nowrap overflow-ellipsis flex-auto",l),style:{fontSize:u}},p))})}));u.displayName="AddressInput";var p=u,h=r(48410);var m={Address:p,Percent:r(23987).Z,Numeric:h.Z}},64958:function(e,t,r){"use strict";var s=r(59499),n=r(4730),a=r(41664),l=r(11163),c=r(67294),i=r(85893);const o=["children","exact","activeClassName"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=e=>{let{children:t,exact:r=!1,activeClassName:s="text-high-emphesis"}=e,d=(0,n.Z)(e,o);const{asPath:p,pathname:h,route:m,query:x,basePath:f}=(0,l.useRouter)(),g=c.Children.only(t),y=g.props.className||"",j=(r?(d.as||d.href.pathname||d.href)===p:p.startsWith(d.as||d.href.pathname||d.href))?"".concat(y," ").concat(s).trim():y;return(0,i.jsx)(a.default,u(u({href:d.href},d),{},{children:c.cloneElement(g,{className:j||null})}))}},87433:function(e,t,r){"use strict";var s=r(85169),n=r(71923),a=r(63929),l=r(64958),c=r(56785),i=r(87269),o=r(10552),d=r(90662),u=r(12614),p=r(49552),h=r.n(p),m=r(25675),x=r(67294),f=r(85893);const g=({children:e,feature:t})=>{const{i18n:r}=(0,s.mV)(),{chainId:p,library:g,account:y}=(0,u.a)(),j=(0,f.jsx)(l.Z,{href:"/swap",children:(0,f.jsx)("a",{className:"text-blue focus:outline-none",children:r._(r._("home page"))})}),b=Object.entries(i.Z).reduce(((e,[r,s])=>(s.includes(t)&&e.push(r),e)),[]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z.Controlled,{isOpen:!!y&&!i.Z[p].includes(t),onDismiss:()=>null,transparent:!0,children:(0,f.jsxs)("div",{className:"flex flex-col justify-center p-4 mt-10 gap-7 lg:mt-0",children:[(0,f.jsx)(c.Z,{variant:"h1",className:"max-w-2xl text-center text-white",weight:700,children:r._(r._("Roll it back - this feature is not yet supported on {0}.",{0:o.z[p]}))}),(0,f.jsx)(c.Z,{className:"text-center",children:(0,f.jsx)(s.cC,{id:"Either return to the {link}, or change to an available network.",values:{link:j},components:x.Fragment})}),(0,f.jsx)(c.Z,{className:"uppercase text-white text-center text-lg tracking-[.2rem]",weight:700,children:r._(r._("Available Networks"))}),(0,f.jsx)("div",{className:"flex justify-center gap-5 md:gap-10",children:b.map(((e,t)=>(0,f.jsxs)("button",{className:"flex flex-col items-center justify-start gap-2 text-primary hover:text-white",onClick:()=>{const t=d.b[e];h().set("chainId",e),e===n.a_.ETHEREUM.toString()?null===g||void 0===g||g.send("wallet_switchEthereumChain",[{chainId:"0x1"},y]):e===n.a_.KOVAN.toString()?null===g||void 0===g||g.send("wallet_switchEthereumChain",[{chainId:"0x2A"},y]):null===g||void 0===g||g.send("wallet_addEthereumChain",[t,y])},children:[(0,f.jsx)("div",{className:"w-[40px] h-[40px]",children:(0,f.jsx)(m.default,{src:o.w[e],alt:"Switch Network",className:"rounded-md filter drop-shadow-currencyLogo",width:"40px",height:"40px"})}),(0,f.jsx)(c.Z,{className:"text-sm",children:o.z[e]})]},t)))})]})}),e]})};t.Z=e=>({children:t})=>(0,f.jsx)(g,{feature:e,children:t})},30051:function(e,t,r){"use strict";var s=r(72457),n=r(13752),a=r(52907),l=r(64958),c=r(3990),i=r(41664),o=r(11163),d=(r(67294),r(85893));t.Z=({left:e,children:t,right:r})=>{const u=(0,o.useRouter)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{children:(0,d.jsxs)(s.Z,{className:"px-4 py-4 md:py-8 lg:py-12",maxWidth:"7xl",children:[(0,d.jsxs)("div",{className:"mb-2 grid grid-cols-12 gap-4",children:[(0,d.jsx)("div",{className:"flex justify-center col-span-12 xl:col-span-3 lg:justify-start",children:(0,d.jsx)(i.default,{href:"/borrow",children:(0,d.jsx)("a",{className:"flex justify-center xl:justify-start xl:mx-8",children:(0,d.jsx)(n.Z,{src:"https://app.sushi.com/images/kashi/logo.png",alt:"Kashi",height:64,width:250,placeholder:"empty",priority:!0})})})}),(0,d.jsx)("div",{className:"flex items-end col-span-12 xl:col-span-9",children:(0,d.jsx)("nav",{className:"flex items-center justify-end w-full",children:(0,d.jsx)("div",{className:"flex pr-2 sm:pr-4",children:(0,d.jsx)(l.Z,{href:"/portfolio",children:(0,d.jsxs)("a",{className:"px-2 sm:px-4 flex justify-end items-center font-medium ".concat("/portfolio"===u.pathname?"text-high-emphesis":"text-secondary hover:text-primary"),children:[(0,d.jsx)("svg",{className:"mr-2 fill-current",width:24,height:24,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 355.24 205.5",children:(0,d.jsx)("path",{d:"M350.43,97c-8.7-20-28.9-43.7-56.7-63.5S237.13,2,215.43.2c-1.2-.1-2.4-.2-3.5-.2H76.53c-13,0-23,4-28.4,11.7L4.63,72.3c-6.3,8.8-6.1,21.7.2,36.2,8.7,20,29,43.7,56.7,63.5s56.7,31.5,78.4,33.3c1.7.1,3.3.2,4.9.2h135.5c12.1-.4,21.5-4.3,26.8-11.6l43.4-60.6C356.93,124.3,356.73,111.5,350.43,97ZM209.93,7.4c1.6,0,3.2.1,4.9.2,20.7,1.7,48.2,13,74.6,31.9,4.3,3.1,11.8,9.7,15.7,12.9H188.43l-45-45ZM41.06,40.25c0-1.12-.15-2.24-.15-3.36a1.67,1.67,0,0,1,1.58-1.74,1.62,1.62,0,0,1,1.74,1.61,23.39,23.39,0,0,0,.15,3.11A1.52,1.52,0,0,1,43,41.62,1.68,1.68,0,0,1,41.06,40.25Zm53.15,71.67a1.74,1.74,0,0,1-2.37.13C72.54,95.5,48.5,72,42.33,47a1.77,1.77,0,0,1,1.27-2,1.83,1.83,0,0,1,2,1.24c6,24.39,29.58,47.16,48.41,63.46A1.7,1.7,0,0,1,94.21,111.92ZM173,146.77a1.5,1.5,0,0,1-1.89,1.24c-2.22-.37-4.27-1-6.49-1.49a1.58,1.58,0,0,1-1.11-2.12,1.52,1.52,0,0,1,2.06-1.12l6.17,1.49A1.7,1.7,0,0,1,173,146.77ZM200.51,150c-6.49,1.12-14.4.75-22.94-.62a1.63,1.63,0,0,1-1.42-1.87,1.68,1.68,0,0,1,1.9-1.37c8.22,1.37,15.66,1.75,22,.63a1.67,1.67,0,0,1,1.9,1.36A1.62,1.62,0,0,1,200.51,150Zm-11.78-12.6c-1.6,0-3.1-.1-4.7-.2-20.8-1.7-48.3-13-74.7-31.9s-45.8-41.4-54.2-60.5c-4.9-11.3-5.9-21.4-1.2-28.4l.3-.4c4.1-5.8,11.6-8.4,21.2-8.6h57.5l130,130Zm155.8-8.7-.3.4c-4.2,5.6-11.7,8.1-21.1,8.2h-49.7l-77.9-77.9h117.7c15.8,14.6,24.4,26.8,30.3,40.5C348.63,111.5,349.63,121.8,344.53,128.7Z"})}),(0,d.jsx)("div",{className:"text-base whitespace-nowrap",children:"BentoBox"})]})})})})})]}),(0,d.jsxs)("div",{className:"grid grid-cols-12 gap-4 min-h-1/2",children:[e&&(0,d.jsx)("div",{className:"hidden xl:block xl:col-span-3",style:{maxHeight:"40rem"},children:e}),(0,d.jsx)("div",{className:"col-span-12 ".concat(r?"lg:col-span-8 xl:col-span-6":"xl:col-span-9"),style:{minHeight:"40rem"},children:t}),r&&(0,d.jsx)("div",{className:"col-span-12 lg:col-span-4 xl:col-span-3",style:{maxHeight:"40rem"},children:r})]})]})}),(0,d.jsx)(c.Z,{})]})}},43749:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var s=r(84243),n=r(9279),a=r(85169),l=r(71923),c=r(71862),i=r(23210),o=r(72457),d=r(78960),u=r(56279),p=r(38239),h=r(11324),m=r(87433),x=r(85926),f=r(30051),g=r(12614),y=r(12533),j=r(62483),b=r(16339),v=r(67294);function w(){return(0,b.C)((e=>e.create))}var N=r(68411),O=r(9008),k=r(11163),C=r(85893);function S(){const{chainId:e}=(0,g.a)(),t=(0,x.rO)(),r=(0,N.h7)(),p=(0,k.useRouter)(),{independentField:m,typedValue:f}=w(),{onSwitchTokens:S,onCurrencySelection:Z,onUserInput:E}=function(){const e=(0,b.T)(),t=(0,v.useCallback)(((t,r)=>{e((0,y.j)({field:t,currencyId:r.isToken?r.address:r.isNative?"ETH":""}))}),[e]);return{onSwitchTokens:(0,v.useCallback)((()=>{e((0,y.KS)())}),[e]),onCurrencySelection:t,onUserInput:(0,v.useCallback)(((t,r)=>{e((0,y.LC)({field:t,typedValue:r}))}),[e])}}(),{currencies:L,inputError:P}=function(){const{i18n:e}=(0,a.mV)(),{account:t}=(0,g.a)(),{independentField:r,typedValue:s,[y.gN.COLLATERAL]:{currencyId:n},[y.gN.ASSET]:{currencyId:l}}=w(),c=(0,j.U8)(n),i=(0,j.U8)(l),o={[y.gN.COLLATERAL]:null!==c&&void 0!==c?c:void 0,[y.gN.ASSET]:null!==i&&void 0!==i?i:void 0};let d;var u,p;return t||(d="Connect Wallet"),o[y.gN.COLLATERAL]||(d=null!==(u=d)&&void 0!==u?u:e._(e._("Select a collateral token"))),o[y.gN.ASSET]&&o[y.gN.ASSET]||(d=null!==(p=d)&&void 0!==p?p:e._(e._("Select a asset token"))),{currencies:o,inputError:d}}(),T=(0,v.useCallback)((e=>{Z(y.gN.COLLATERAL,e)}),[Z]),_=(0,v.useCallback)((e=>{Z(y.gN.ASSET,e)}),[Z]),I=Boolean(L[y.gN.COLLATERAL]&&L[y.gN.ASSET]),D=(0,v.useCallback)((async(t,r)=>{const a=u.k[e];for(const e in a)a[e].address=e;let l=n.d,c=n.d;const i=Object.values(a).filter((e=>e.from===t.wrapped.address&&e.to===r.wrapped.address));let o=0;if(i.length){const e=i[0];l=e.address,o=18+e.decimals-e.toDecimals+e.fromDecimals}else{const e=Object.values(a).filter((e=>e.from===r.wrapped.address&&e.to===t.wrapped.address));if(e.length){const t=e[0];c=t.address,o=36-t.decimals-t.toDecimals+t.fromDecimals}else{const e=Object.values(a).filter((e=>e.from===t.wrapped.address)),s=Object.values(a).filter((e=>e.from===r.wrapped.address)),n=e.map((e=>({mfrom:e,mto:s.filter((t=>e.to===t.to))}))).filter((e=>e.mto.length));if(!n.length)return"";l=n[0].mfrom.address,c=n[0].mto[0].address,o=18+n[0].mfrom.decimals-n[0].mto[0].decimals-r.decimals+t.decimals}}return s.$.encode(["address","address","uint256"],[l,c,(0,h.TB)(o)])}),[e]);return(0,C.jsxs)(A,{children:[(0,C.jsxs)(O.default,{children:[(0,C.jsx)("title",{children:"Create Lending Pair | Kashi by NEXUSSwap"}),(0,C.jsx)("meta",{name:"description",content:"Create Lending Pair on Kashi by NEXUSSwap"},"description"),(0,C.jsx)("meta",{name:"twitter:description",content:"Create Lending Pair on Kashi by NEXUSSwap"},"twitter:description"),(0,C.jsx)("meta",{property:"og:description",content:"Create Lending Pair on Kashi by NEXUSSwap"},"og:description")]}),(0,C.jsx)(i.Z,{className:"h-full bg-dark-900",header:(0,C.jsx)(i.Z.Header,{className:"bg-dark-800",children:(0,C.jsx)("div",{className:"text-3xl text-high-emphesis leading-48px",children:"Create a Market"})}),children:(0,C.jsxs)(o.Z,{maxWidth:"full",className:"space-y-6",children:[(0,C.jsxs)("div",{className:"grid grid-cols-1 grid-rows-2 gap-4 md:grid-rows-1 md:grid-cols-2",children:[(0,C.jsx)(d.Z,{label:"Collateral",showMaxButton:!1,hideBalance:!0,hideInput:!0,currency:L[y.gN.COLLATERAL],onCurrencySelect:T,otherCurrency:L[y.gN.ASSET],showCommonBases:!1,allowManageTokenList:!1,showSearch:!1,id:"kashi-currency-collateral"}),(0,C.jsx)(d.Z,{label:"Asset",showMaxButton:!1,hideBalance:!0,hideInput:!0,currency:L[y.gN.ASSET],onCurrencySelect:_,otherCurrency:L[y.gN.COLLATERAL],showCommonBases:!1,allowManageTokenList:!1,showSearch:!1,id:"kashi-currency-asset"})]}),(0,C.jsx)(c.ZP,{color:"gradient",className:"w-full px-4 py-3 text-base rounded text-high-emphesis",onClick:()=>(async()=>{try{if(!I)return;const n=await D(L[y.gN.ASSET],L[y.gN.COLLATERAL]);if(!n)return void console.log("No path");if(!(e in l.uA))return void console.log("No chainlink oracle address");if(!(e in l.MO))return void console.log("No kashi address");const a=l.uA[e],c=s.$.encode(["address","address","address","bytes"],[L[y.gN.COLLATERAL].wrapped.address,L[y.gN.ASSET].wrapped.address,a,n]);console.log([L[y.gN.COLLATERAL].wrapped.address,L[y.gN.ASSET].wrapped.address,a,n]);const i=await(null===t||void 0===t?void 0:t.deploy(e&&l.MO[e],c,!0));r(i,{summary:"Add Kashi market ".concat(L[y.gN.ASSET].symbol,"/").concat(L[y.gN.COLLATERAL].symbol," Chainlink")}),p.push("/lend")}catch(n){console.error(n)}})(),disabled:!I,children:P||"Create"})]})})]})}const A=({children:e})=>{const{i18n:t}=(0,a.mV)();return(0,C.jsx)(f.Z,{left:(0,C.jsx)(i.Z,{className:"h-full bg-dark-900",backgroundImage:"/images/kashi/deposit.png",title:t._(t._("Create a new Kashi Market")),description:t._(t._("If you want to supply to a market that is not listed yet, you can use this tool to create a new pair."))}),children:e})};S.Guard=(0,m.Z)(p.L.KASHI)},60913:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/kashi/create",function(){return r(43749)}])},94578:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var s=r(89611);function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,s.Z)(e,t)}}},function(e){e.O(0,[6441,810,1626,4259,134,9774,2888,179],(function(){return t=60913,e(e.s=t);var t}));var t=e.O();_N_E=t}]);