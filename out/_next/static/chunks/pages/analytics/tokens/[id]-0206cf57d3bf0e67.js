(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6734],{66223:function(e,s,i){"use strict";i.d(s,{Z:function(){return a}});var l=i(36325),r=(i(67294),i(41626)),t=i(85893);function a({currency0:e,currency1:s,className:i="",logoClassName:a="",size:n=16}){return(0,t.jsxs)("div",{className:(0,l.AK)("flex items-center space-x-2",i),children:[(0,t.jsx)(r.X,{className:a,currency:e,size:n.toString()+"px"}),(0,t.jsx)(r.X,{className:a,currency:s,size:n.toString()+"px"})]})}},31820:function(e,s,i){"use strict";i.d(s,{Z:function(){return h}});var l=i(59499),r=i(63801),t=i(11163),a=i(67294),n=i(79521),d=i(36325),c=i(85893);function o(e,s){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);s&&(l=l.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),i.push.apply(i,l)}return i}function u(e){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?o(Object(i),!0).forEach((function(s){(0,l.Z)(e,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))}))}return e}function h({columns:e,data:s,columnsHideable:i=[],defaultSortBy:l={id:"",desc:!1},link:o,loading:h=!0}){const{0:x,1:m}=(0,a.useState)(0!==i.length),v=(0,t.useRouter)(),{getTableProps:f,getTableBodyProps:g,headerGroups:p,prepareRow:j,rows:b,page:y,nextPage:N,previousPage:w,canPreviousPage:k,canNextPage:C,setPageSize:P,allColumns:S,state:{pageIndex:T,pageSize:Z}}=(0,n.useTable)({columns:e,data:s,defaultCanSort:!1,autoResetSortBy:!1,initialState:{hiddenColumns:i,sortBy:[{id:l.id,desc:l.desc}]}},n.useSortBy,n.usePagination);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"w-full overflow-x-auto",children:(0,c.jsxs)("table",u(u({className:"w-auto min-w-full border-collapse table-fixed"},f()),{},{children:[(0,c.jsx)("thead",{children:p.map((e=>(0,c.jsx)("tr",u(u({},e.getHeaderGroupProps()),{},{children:e.headers.map(((s,l,r)=>(0,c.jsx)("th",u(u({},s.getHeaderProps(s.getSortByToggleProps())),{},{children:(0,c.jsx)("div",{className:(0,d.AK)(0===l&&"pl-2",l===e.headers.length-1&&"pr-2","select-none w-full"),children:(0,c.jsx)("div",{className:"flex flex-row pb-2 text-sm text-secondary",children:(0,c.jsxs)("div",{className:(0,d.AK)(0!==l&&"right"===s.align&&"justify-end",0!==l&&"left"===s.align&&"justify-start",!s.align&&(0!==l?"justify-start":"justify-end"),0!==l&&"ml-2",l!==r.length-1&&"mr-2",0===l&&"flex-row-reverse",0===l?"right"===s.align?"justify-start":"justify-end":"","w-full flex whitespace-nowrap xl:mx-auto"),children:[(0,c.jsx)("span",{className:(0,d.AK)("flex items-center",s.isSorted?"block":"hidden"),children:(0,c.jsx)("div",{className:(0,d.AK)("fill-current text-secondary",!s.isSortedDesc&&"rotate-180 transform"),children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",viewBox:"0 0 20 20",fill:"currentColor",children:(0,c.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})}),s.render("Header"),s.HideHeader&&x&&(0,c.jsx)("button",{onClick:e=>(e=>{S.filter((e=>i.find((s=>s===e.id)))).forEach((e=>e.toggleHidden(!x))),m(!x),e.stopPropagation()})(e),className:"ml-1 text-dark-700",children:s.render("HideHeader")})]})})})}),l)))}),"tr")))}),(0,c.jsx)("tbody",u(u({},g()),{},{children:y.map(((e,s)=>(j(e),(0,c.jsx)("tr",u(u({},e.getRowProps()),{},{children:e.cells.map(((s,i)=>(0,c.jsx)("td",u(u({className:"pb-3 pl-0 pr-0"},s.getCellProps()),{},{children:(0,c.jsx)("div",{onClick:o?()=>v.push(o.href+((e,s)=>{var i=s.split(".");if(1===i.length)return e[s];if(!Array.isArray(i))throw"parts is not valid array";for(var l=i.pop(),r=i.length,t=1,a=i[0];(e=e[a])&&t<r;)a=i[t],t++;return e?e[l]:void 0})(s.row.original,o.id)):()=>{},children:(0,c.jsx)("div",{className:(0,d.AK)(0===i&&"rounded-l pl-4",i===e.cells.length-1&&"rounded-r pr-4",o&&"cursor-pointer","h-20 text-primary bg-dark-900 flex items-center"),children:(0,c.jsx)("div",{className:(0,d.AK)("right"===s.column.align&&"text-right","left"===s.column.align&&"text-left",0!==i&&"ml-2",i!==e.cells.length-1&&"mr-2","w-full xl:mx-auto"),children:s.render("Cell")})})})}),i)))}),s))))}))]}))}),(null===s||void 0===s?void 0:s.length)>10&&(0,c.jsxs)("div",{className:"flex justify-between w-full",children:[(0,c.jsxs)("div",{className:"flex text-sm font-bold text-secondary",children:[(0,c.jsx)("div",{children:"Rows per page: "}),(0,c.jsx)("select",{value:Z,onChange:e=>P(Number(e.target.value)),className:"ml-1 bg-transparent",children:[10,20,30,40,50].map((e=>(0,c.jsx)("option",{className:"bg-dark-1000",value:e,children:e},e)))})]}),(0,c.jsxs)("div",{className:"flex",children:[(0,c.jsx)("div",{className:"text-sm text-secondary",children:"".concat(Z*T+1,"-").concat(Z*(T+1)," of ").concat(b.length)}),(0,c.jsx)("button",{onClick:()=>w(),className:(0,d.AK)(k?"":"opacity-50 hover:cursor-default","ml-3"),children:(0,c.jsx)(r.Y4O,{width:16,height:16})}),(0,c.jsx)("button",{onClick:()=>N(),className:(0,d.AK)(C?"":"opacity-50 hover:cursor-default","ml-3"),children:(0,c.jsx)(r.LZ3,{width:16,height:16})})]})]})]})}},74665:function(e,s,i){"use strict";i.d(s,{Z:function(){return d}});var l=i(9008),r=i(72457),t=(i(67294),i(64958)),a=i(85893);var n=({items:e})=>(0,a.jsx)("div",{className:"mt-4 space-y-4",children:e.map(((e,s)=>(0,a.jsx)(t.Z,{href:e.href,activeClassName:"font-bold text-high-emphesis bg-dark-800",children:(0,a.jsx)("a",{className:"flex items-center px-1 py-3 border-transparent rounded hover:bg-dark-900",children:(0,a.jsx)("div",{className:"ml-5",children:e.text})})},s)))});function d({children:e}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.default,{children:[(0,a.jsx)("title",{children:"NEXUSSwap Analytics | NEXUSSwap"}),(0,a.jsx)("meta",{name:"description",content:"NEXUSSwap Liquidity Pair (NLP) Analytics by NEXUSSwap"})]}),(0,a.jsxs)(r.Z,{id:"analytics",maxWidth:"full",className:"grid h-full grid-flow-col grid-cols-10 mx-auto lg:px-4 gap-9",children:[(0,a.jsx)("div",{className:"sticky top-0 hidden lg:block md:col-span-2 3xl:col-start-1 3xl:col-span-2",children:(0,a.jsx)(n,{items:[{text:"Dashboard",href:"/analytics/dashboard"},{text:"Farms",href:"/analytics/farms"},{text:"Pairs",href:"/analytics/pairs"},{text:"Tokens",href:"/analytics/tokens"},{text:"BentoBox",href:"/analytics/bentobox"}]})}),(0,a.jsx)("div",{className:"col-span-10 lg:border-l lg:col-span-8 3xl:col-span-7 border-dark-700",children:e})]})]})}},30860:function(e,s,i){"use strict";i.d(s,{Z:function(){return a}});i(67294);var l=i(36325),r=i(85893);const t={dashboard:"/images/analytics/analytics-background-dashboard.jpg",bar:"/images/analytics/analytics-background-bar.jpg",farms:"/images/analytics/analytics-background-farms.jpg",pool:"/images/analytics/analytics-background-pool.svg",pools:"/images/analytics/analytics-background-pools.jpg",token:"/images/analytics/analytics-background-token.svg",tokens:"/images/analytics/analytics-background-tokens.jpg"};function a({background:e,children:s}){return(0,r.jsxs)("div",{className:"h-[200px] md:h-[151px] w-full relative bg-dark-900",children:[(0,r.jsx)("div",{className:(0,l.AK)("absolute w-full h-full",!t[e].includes("svg")&&"bg-cover bg-center opacity-[0.15]"),style:{backgroundImage:"url('".concat(t[e],"')"),WebkitMaskImage:"url('".concat(t[e],"')")}}),(0,r.jsx)("div",{className:"absolute w-full px-8 py-8 lg:px-14 z-1",children:s})]})}},40334:function(e,s,i){"use strict";i.d(s,{Z:function(){return d}});var l=i(67294),r=i(33295),t=i(36325),a=i(73803),n=i(85893);function d({header:e,subheader:s,figure:i,change:d,chart:c,defaultTimespan:o,timespans:u}){const{0:h,1:x}=(0,l.useState)(null===u||void 0===u?void 0:u.find((e=>e.text===o))),m=(0,l.useMemo)((()=>{const e=Math.round(Date.now()/1e3);return null===c||void 0===c?void 0:c.reduce(((s,i)=>{const l=i.x.getTime();return Math.round(l/1e3)>=e-(null===h||void 0===h?void 0:h.length)&&s.push({x:l,y:i.y}),s}),[])}),[c,null===h||void 0===h?void 0:h.length]),{0:v,1:f}=(0,l.useState)((null===m||void 0===m?void 0:m.length)-1),g=(0,l.useMemo)((()=>{var e;return null===m||void 0===m||null===(e=m[v])||void 0===e?void 0:e.y}),[m,v]),p=(0,l.useMemo)((()=>{var e;return null===m||void 0===m||null===(e=m[v])||void 0===e?void 0:e.x}),[m,v]);return(0,n.jsxs)("div",{className:"w-full p-5 space-y-4 font-bold border rounded bg-dark-900 border-dark-700",children:[(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"text-xs text-secondary",children:s}),(0,n.jsx)("div",{className:"text-high-emphesis",children:e})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex justify-end text-2xl text-high-emphesis",children:(0,t.uf)(null!==g&&void 0!==g?g:i,!0,!1)}),(0,n.jsxs)("div",{className:"flex flex-row items-center justify-end",children:[v===(null===m||void 0===m?void 0:m.length)-1&&(0,n.jsx)(a.Z,{number:d,percent:!0}),(0,n.jsx)("div",{className:"ml-3 font-normal",children:p?(0,t.p6)(new Date(p)):"Past 24 Hours"})]})]})]}),(0,n.jsx)("div",{className:"py-4 h-36",children:m&&(0,n.jsx)(r.Z,{data:m,stroke:{gradient:{from:"#27B0E6",to:"#FA52A0"}},setSelectedIndex:f})}),(0,n.jsx)("div",{className:"flex flex-row justify-end space-x-4",children:u.map(((e,s)=>(0,n.jsx)("button",{className:(0,t.AK)(e===h?"text-blue bg-blue bg-opacity-30 rounded-xl font-bold border border-blue border-opacity-50":"text-secondary","text-sm px-3 py-0.5"),onClick:()=>x(e),children:e.text},s)))})]})}},73803:function(e,s,i){"use strict";i.d(s,{Z:function(){return t}});var l=i(36325),r=i(85893);function t({number:e,scaleNumber:s=!0,percent:i=!1,className:t=""}){return(isNaN(e)||e===1/0)&&(e=0),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:(0,l.AK)(e>0?"text-green":e<0&&"text-red","font-normal",t),children:(e>0?"+":e<0?"-":"")+(i?(0,l.T3)(e).replace("-",""):s?(0,l.nH)(e,!0).replace("-",""):(0,l.uf)(e,!0,!1).replace("-",""))})})}},29698:function(e,s,i){"use strict";i.d(s,{Z:function(){return a}});var l=i(36325),r=i(73803),t=i(85893);function a({text:e,number:s,numberType:i="usd",percent:a}){return(0,t.jsxs)("div",{className:"w-full px-6 py-4 border rounded bg-dark-900 border-dark-700",children:[(0,t.jsx)("div",{className:"whitespace-nowrap",children:e}),(0,t.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,t.jsx)("div",{className:"text-2xl font-bold",children:function(){switch(i){case"usd":return(0,l.uf)(s,!0,!1);case"text":return s;case"percent":return(0,l.T3)(s)}}()}),(0,t.jsx)(r.Z,{number:a,percent:!0})]})]})}},55759:function(e,s,i){"use strict";i.d(s,{Z:function(){return v}});var l=i(66223),r=i(31820),t=i(73803),a=i(36325),n=i(3410),d=i(62483),c=i(67294),o=i(85893);function u({pair:e}){var s,i,r,t;const a=(0,d.U8)(null===e||void 0===e||null===(s=e.token0)||void 0===s?void 0:s.id),n=(0,d.U8)(null===e||void 0===e||null===(i=e.token1)||void 0===i?void 0:i.id);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)(l.Z,{className:"-space-x-3",logoClassName:"rounded-full",currency0:a,currency1:n,size:40}),(0,o.jsx)("div",{className:"flex flex-col ml-3 whitespace-nowrap",children:(0,o.jsxs)("div",{className:"font-bold text-high-emphesis",children:[null===e||void 0===e||null===(r=e.token0)||void 0===r?void 0:r.symbol,"-",null===e||void 0===e||null===(t=e.token1)||void 0===t?void 0:t.symbol]})})]})})}const h=(e,s)=>{const i=(0,n.O)(e/7*365*.0025/s*100,3650);return i>1e3?">10,000%":(0,a.T3)(i)},x=[{Header:"Pair",accessor:"pair",Cell:e=>(0,o.jsx)(u,{pair:e.value}),align:"left"},{Header:"TVL",accessor:"liquidity",Cell:e=>(0,a.nH)(e.value,!0),align:"right"},{Header:"Annual APY",accessor:e=>(0,o.jsx)("div",{className:"text-high-emphesis",children:h(e.volume1w,e.liquidity)}),align:"right",sortType:(e,s)=>e.original.volume1w/e.original.liquidity-s.original.volume1w/s.original.liquidity},{Header:"Daily / Weekly Volume",accessor:e=>(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,a.uf)(e.volume1d,!0,!1,2)}),(0,o.jsx)("div",{className:"font-normal text-primary",children:(0,a.uf)(e.volume1w,!0,!1,2)})]}),align:"right"},{Header:"Daily / Weekly Fees",accessor:e=>(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,a.uf)(.003*e.volume1d,!0,!1,2)}),(0,o.jsx)("div",{className:"font-normal text-primary",children:(0,a.uf)(.003*e.volume1w,!0,!1,2)})]}),align:"right"}],m=[{Header:"Pair",accessor:"pair",Cell:e=>(0,o.jsx)(u,{pair:e.value}),disableSortBy:!0,align:"left"},{Header:"Daily / Weekly Liquidity Change",id:"liquidity",accessor:e=>(0,o.jsxs)("div",{className:"inline-flex flex-col",children:[(0,o.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,o.jsx)(t.Z,{number:e.liquidityChangeNumber1d,scaleNumber:!1})}),(0,o.jsx)("div",{children:(0,a.uf)(e.liquidityChangeNumber1w,!0,!1)})]}),align:"right",sortType:(e,s)=>e.original.liquidityChangeNumber1d-s.original.liquidityChangeNumber1d},{Header:"%",accessor:e=>(0,o.jsx)("div",{className:"inline-flex",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,a.T3)(e.liquidityChangePercent1d)}),(0,o.jsx)("div",{children:(0,a.T3)(e.liquidityChangePercent1w)})]})}),align:"right",sortType:(e,s)=>e.original.liquidityChangePercent1d-s.original.liquidityChangePercent1d},{Header:"Daily / Weekly Volume Change",accessor:e=>(0,o.jsxs)("div",{className:"inline-flex flex-col",children:[(0,o.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,o.jsx)(t.Z,{number:e.volumeChangeNumber1d,scaleNumber:!1})}),(0,o.jsx)("div",{children:(0,a.uf)(e.volumeChangeNumber1w,!0,!1)})]}),align:"right",sortType:(e,s)=>e.original.volumeChangeNumber1d-s.original.volumeChangeNumber1d},{Header:" %",accessor:e=>(0,o.jsx)("div",{className:"inline-flex",children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"font-medium text-high-emphesis",children:(0,a.T3)(e.volumeChangePercent1d)}),(0,o.jsx)("div",{children:(0,a.T3)(e.volumeChangePercent1w)})]})}),align:"right",sortType:(e,s)=>e.original.volumeChangePercent1d-s.original.volumeChangePercent1d}];function v({pairs:e,type:s}){const i=c.useMemo((()=>{switch(s){case"all":case"gainers":return{id:"liquidity",desc:!0};case"losers":return{id:"liquidity",desc:!1}}}),[s]),l=c.useMemo((()=>{switch(s){case"all":return x;case"gainers":case"losers":return m}}),[s]);return(0,o.jsx)(o.Fragment,{children:e&&(0,o.jsx)(r.Z,{columns:l,data:e,defaultSortBy:i,link:{href:"/analytics/pairs/",id:"pair.id"}})})}},73883:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return C}});var l=i(63801),r=i(41626),t=i(74665),a=i(30860),n=i(40334),d=i(73803),c=i(29698),o=i(55759),u=i(93283),h=i(84293),x=i(47448),m=i(62483),v=i(85926),f=i(48161),g=i(22339),p=i(12614),j=i(41664),b=i(11163),y=i(67294),N=i(59046),w=i(85893);const k=[{text:"1W",length:604800},{text:"1M",length:2629746},{text:"1Y",length:31556952},{text:"ALL",length:1/0}];function C(){var e,s,i,C,P;const S=(0,b.useRouter)(),T=null===(e=S.query.id)||void 0===e?void 0:e.toLowerCase(),{chainId:Z}=(0,p.a)(),[H,q]=(0,f.Z)(),{0:D,1:A}=(0,y.useState)(0),O=(0,v.Ib)(T);(0,y.useEffect)((()=>{(async()=>{A(await O.totalSupply())})()}),[O]);const U=(0,g.ZU)({chainId:Z}),E=(0,g.G9)({chainId:Z}),I=(0,g.T5)({chainId:Z}),F=(0,g.k$)({chainId:Z}),_=(0,g.k$)({chainId:Z,variables:{block:U},shouldFetch:!!U}),B=null===(s=(0,g.rU)({chainId:Z,variables:{where:{id:T}},shouldFetch:!!T}))||void 0===s?void 0:s[0],M=null===(i=(0,g.rU)({chainId:Z,variables:{block:U,where:{id:T}},shouldFetch:!!T&&!!U}))||void 0===i?void 0:i[0],K=null===(C=(0,g.rU)({chainId:Z,variables:{block:E,where:{id:T}},shouldFetch:!!T&&!!E}))||void 0===C?void 0:C[0],L=(0,g.w_)({chainId:Z,variables:{id:T}}),z=(0,g.w_)({chainId:Z,variables:{id:T,block:U},shouldFetch:!!T&&!!U}),X=(0,g.w_)({chainId:Z,variables:{id:T,block:I},shouldFetch:!!T&&!!I}),W=(0,y.useMemo)((()=>null===L||void 0===L?void 0:L.map((e=>{var s,i;const l=null!==(s=null===z||void 0===z?void 0:z.find((s=>e.id===s.id)))&&void 0!==s?s:e,r=null!==(i=null===X||void 0===X?void 0:X.find((s=>e.id===s.id)))&&void 0!==i?i:l;return{pair:{token0:e.token0,token1:e.token1,id:e.id},liquidity:e.reserveUSD,volume1d:e.volumeUSD-l.volumeUSD,volume1w:e.volumeUSD-r.volumeUSD}}))),[L,z,X]),R=(0,m.U8)(null===B||void 0===B?void 0:B.id),V=(null===B||void 0===B?void 0:B.derivedETH)*F,G=(null===B||void 0===B?void 0:B.derivedETH)*F/((null===M||void 0===M?void 0:M.derivedETH)*_)*100-100,Y=(null===B||void 0===B?void 0:B.liquidity)*(null===B||void 0===B?void 0:B.derivedETH)*F,$=(null===B||void 0===B?void 0:B.liquidity)*V/((null===M||void 0===M?void 0:M.liquidity)*(null===M||void 0===M?void 0:M.derivedETH)*_)*100-100,Q=(null===B||void 0===B?void 0:B.volumeUSD)-(null===M||void 0===M?void 0:M.volumeUSD),J=Q/((null===M||void 0===M?void 0:M.volumeUSD)-(null===K||void 0===K?void 0:K.volumeUSD))*100-100,ee=(0,g.Ye)({chainId:Z,variables:{where:{token:T.toLowerCase()}},shouldFetch:!!T&&!!Z}),se=(0,y.useMemo)((()=>({liquidityChart:null===ee||void 0===ee?void 0:ee.sort(((e,s)=>e.date-s.date)).map((e=>({x:new Date(1e3*e.date),y:Number(e.liquidityUSD)}))),volumeChart:null===ee||void 0===ee?void 0:ee.sort(((e,s)=>e.date-s.date)).map((e=>({x:new Date(1e3*e.date),y:Number(e.volumeUSD)})))})),[ee]);return(0,w.jsxs)(t.Z,{children:[(0,w.jsxs)("div",{className:"relative h-8",children:[(0,w.jsx)("div",{className:"absolute w-full h-full bg-gradient-to-r from-blue to-pink opacity-5"}),(0,w.jsxs)("div",{className:"absolute flex items-center w-full p-2 lg:pl-14",children:[(0,w.jsxs)("div",{className:"text-xs font-medium text-secondary",children:[(0,w.jsx)(j.default,{href:"/analytics",children:"Analytics"}),"\xa0",">","\xa0",(0,w.jsx)(j.default,{href:"/analytics/tokens",children:"Tokens"}),"\xa0","> ","\xa0"]}),(0,w.jsx)("div",{className:"text-xs font-bold text-high-emphesis",children:null===B||void 0===B?void 0:B.symbol})]})]}),(0,w.jsx)(a.Z,{background:"token",children:(0,w.jsxs)("div",{className:"grid items-center justify-between grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2",children:[(0,w.jsxs)("div",{className:"items-center -mt-4 space-y-6",children:[(0,w.jsxs)("button",{onClick:()=>S.back(),className:"text-sm text-blue",children:["<"," Go Back"]}),(0,w.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,w.jsx)(r.X,{className:"rounded-full",currency:R,size:60}),(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{className:"text-sm font-medium text-secondary",children:null===B||void 0===B?void 0:B.symbol}),(0,w.jsx)("div",{className:"text-lg font-bold text-high-emphesis",children:null===B||void 0===B?void 0:B.name})]}),(0,w.jsxs)("div",{className:"rounded-3xl text-sm bg-[#414a6c] py-px px-2 flex items-center space-x-1",children:[(0,w.jsx)("div",{children:(0,x.Xn)(T)}),(0,w.jsx)("div",{className:"cursor-pointer",onClick:()=>q(T),children:H?(0,w.jsx)(l.nQG,{height:16}):(0,w.jsx)(l.NAN,{height:16,className:"scale-x-[-1]"})})]})]})]}),(0,w.jsxs)("div",{className:"flex space-x-12",children:[(0,w.jsxs)("div",{className:"flex flex-col",children:[(0,w.jsx)("div",{children:"Price"}),(0,w.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,w.jsx)("div",{className:"text-lg font-medium text-high-emphesis",children:(0,x.uf)(null!==V&&void 0!==V?V:0,!0)}),(0,w.jsx)(d.Z,{number:G,percent:!0})]})]}),(0,w.jsxs)("div",{className:"flex flex-col",children:[(0,w.jsx)("div",{children:"Market Cap"}),(0,w.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,w.jsx)("div",{className:"text-lg font-medium text-high-emphesis",children:(0,x.uf)(null!==(P=V*(D/10**(null===B||void 0===B?void 0:B.decimals)))&&void 0!==P?P:0,!0,!1)}),(0,w.jsx)(d.Z,{number:G,percent:!0})]})]})]})]})}),(0,w.jsxs)("div",{className:"px-4 pt-4 space-y-4 lg:px-14",children:[(0,w.jsx)("div",{className:"text-3xl font-bold text-high-emphesis",children:"Overview"}),(0,w.jsxs)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2",children:[(0,w.jsx)(n.Z,{header:"Liquidity",subheader:null===B||void 0===B?void 0:B.symbol,figure:Y,change:$,chart:se.liquidityChart,defaultTimespan:"1W",timespans:k}),(0,w.jsx)(n.Z,{header:"Volume",subheader:null===B||void 0===B?void 0:B.symbol,figure:Q,change:J,chart:se.volumeChart,defaultTimespan:"1W",timespans:k})]}),(0,w.jsxs)("div",{className:"flex flex-row justify-between flex-grow space-x-4 overflow-x-auto",children:[(0,w.jsx)(c.Z,{text:"Liquidity (24H)",number:Y,percent:$}),(0,w.jsx)(c.Z,{text:"Volume (24H)",number:Q,percent:J}),(0,w.jsx)(c.Z,{text:"Fees (24H)",number:.003*Q,percent:J})]}),(0,w.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:"Information"}),(0,w.jsx)("div",{className:"px-4 text-sm leading-48px text-high-emphesis",children:(0,w.jsxs)("table",{className:"w-full table-fixed",children:[(0,w.jsx)("thead",{className:"border-b border-gray-900",children:(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{children:"Name"}),(0,w.jsx)("td",{children:"Symbol"}),(0,w.jsx)("td",{children:"Address"}),(0,w.jsx)("td",{className:"flex justify-end w-full",children:"Etherscan"})]})}),(0,w.jsx)("tbody",{className:"border-b border-gray-900",children:(0,w.jsxs)("tr",{children:[(0,w.jsx)("td",{children:null===B||void 0===B?void 0:B.name}),(0,w.jsx)("td",{children:null===B||void 0===B?void 0:B.symbol}),(0,w.jsx)("td",{children:(0,w.jsx)("div",{className:"w-11/12 overflow-hidden cursor-pointer overflow-ellipsis whitespace-nowrap",children:T})}),(0,w.jsx)("td",{children:(0,w.jsxs)("a",{className:"flex flex-row items-center justify-end space-x-1 text-purple",href:(0,h.E)(Z,T,"token"),target:"_blank",rel:"noreferrer",children:[(0,w.jsx)("div",{children:"View"}),(0,w.jsx)(N.Z,{size:16})]})})]})})]})}),(0,w.jsxs)("div",{children:[(0,w.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:"Top Pairs"}),(0,w.jsx)(o.Z,{pairs:W,type:"all"})]}),(0,w.jsx)(u.x,{pairs:L?L.map((e=>e.id)):[]})]})]})}},11438:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/tokens/[id]",function(){return i(73883)}])}},function(e){e.O(0,[9521,5963,1626,1758,9774,2888,179],(function(){return s=11438,e(e.s=s);var s}));var s=e.O();_N_E=s}]);