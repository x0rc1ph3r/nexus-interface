(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8926],{95824:function(e,i,s){"use strict";s.d(i,{Z:function(){return n}});s(67294);var l=s(85893);function n({text:e,number:i}){return(0,l.jsxs)("div",{className:"w-full py-3 border rounded px-9 bg-dark-900 border-dark-700",children:[(0,l.jsx)("div",{className:"whitespace-nowrap",children:e}),(0,l.jsx)("div",{className:"text-2xl font-bold",children:i})]})}},38659:function(e,i,s){"use strict";s.r(i),s.d(i,{default:function(){return p}});var l=s(67320),n=s(38239),d=s(74665),o=s(30860),t=s(95824),a=s(42665),r=s(81488),c=s(47448),u=s(76294),h=s(22339),v=s(12614),x=s(67294),m=s(85893);function p(){const{chainId:e}=(0,v.a)(),i=(0,h.ZU)({chainId:e,shouldFetch:!!e}),s=(0,h.T5)({chainId:e,shouldFetch:!!e}),p=(0,h.k$)({chainId:e}),b=(0,h.k$)({chainId:e,variables:{block:i},shouldFetch:!!i}),k=(0,h.k$)({chainId:e,variables:{block:s},shouldFetch:!!s}),f=(0,h.rU)({chainId:e}),j=(0,h.rU)({chainId:e,variables:{block:i},shouldFetch:!!i}),g=(0,h.rU)({chainId:e,variables:{block:s},shouldFetch:!!s}),y=(0,x.useMemo)((()=>new Map(null===f||void 0===f?void 0:f.map((e=>[e.id,e])))),[f]),w=(0,x.useMemo)((()=>new Map(null===j||void 0===j?void 0:j.map((e=>[e.id,e])))),[j]),N=(0,x.useMemo)((()=>new Map(null===g||void 0===g?void 0:g.map((e=>[e.id,e])))),[g]),T=(0,h.x7)({chainId:e,shouldFetch:(0,r.v)(n.L.BENTOBOX,e)}),_=(0,x.useMemo)((()=>((null===T||void 0===T?void 0:T.tokens)||[]).map((({id:e,totalSupplyElastic:i,decimals:s,symbol:l,name:n})=>{var d,o;const t=y.get(e),a=w.get(e),r=N.get(e),c=i/Math.pow(10,s),u=null===t||void 0===t?void 0:t.derivedETH,h=(null!==u&&void 0!==u?u:0)*p;return{token:{id:e,symbol:l,name:n},price:h,liquidity:h*c,change1d:h/((null!==(d=null===a||void 0===a?void 0:a.derivedETH)&&void 0!==d?d:0)*b)*100-100,change1w:h/((null!==(o=null===r||void 0===r?void 0:r.derivedETH)&&void 0!==o?o:0)*k)*100-100,graph:null===t||void 0===t?void 0:t.dayData.slice(0).reverse().map(((e,i)=>({x:i,y:Number(e.priceUSD)})))}})).filter(Boolean)),[T,y,p,w,N,b,k]),{result:Z,term:E,search:I}=(0,u.Z)({options:{keys:["token.address","token.symbol","token.name"],threshold:.4},data:_});return(0,m.jsxs)(d.Z,{children:[(0,m.jsx)(o.Z,{background:"dashboard",children:(0,m.jsxs)("div",{className:"grid items-center justify-between grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-2",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{className:"text-3xl font-bold text-high-emphesis",children:"Bento Box"}),(0,m.jsx)("div",{className:"",children:"Click on the column name to sort tokens by price or liquidity."})]}),(0,m.jsx)(l.Z,{term:E,search:I})]})}),(0,m.jsxs)("div",{className:"py-6 space-y-4 lg:px-14",children:[(0,m.jsx)("div",{className:"text-2xl font-bold text-high-emphesis",children:"Overview"}),(0,m.jsxs)("div",{className:"flex flex-row space-x-4 overflow-auto",children:[(0,m.jsx)(t.Z,{text:"TVL",number:(0,c.uf)(_.reduce(((e,i)=>e+i.liquidity),0),!0,!1)}),(0,m.jsx)(t.Z,{text:"Total Users",number:(0,c.uf)(null===T||void 0===T?void 0:T.totalUsers)}),(0,m.jsx)(t.Z,{text:"Total Tokens",number:null===T||void 0===T?void 0:T.totalTokens}),(0,m.jsx)(t.Z,{text:"Total Kashi Pairs",number:null===T||void 0===T?void 0:T.totalKashiPairs})]})]}),(0,m.jsx)("div",{className:"py-6 space-y-4 text-2xl font-bold text-high-emphesis lg:px-14",children:"Tokens"}),(0,m.jsx)("div",{className:"pt-4 lg:px-14",children:(0,m.jsx)(a.Z,{tokens:Z,enabledColumns:["name","liquidity","price","priceChange","lastWeekGraph"]})})]})}},37072:function(e,i,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/analytics/bentobox",function(){return s(38659)}])}},function(e){e.O(0,[4221,9521,5963,1626,8199,9774,2888,179],(function(){return i=37072,e(e.s=i);var i}));var i=e.O();_N_E=i}]);