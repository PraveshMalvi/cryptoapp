(this["webpackJsonpfolio-5"]=this["webpackJsonpfolio-5"]||[]).push([[0],{19:function(e,c,t){},20:function(e,c,t){},21:function(e,c,t){},40:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var n=t(2),a=t(13),s=t.n(a),r=(t(19),t(20),t(21),t(4)),i=t(14),o=t.n(i),l=(t(40),t(0));var j=function(e){var c=e.name,t=e.image,n=e.symbol,a=e.price,s=e.volume,r=e.priceChange,i=e.marketcap;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"coin-container",children:Object(l.jsxs)("div",{className:"coin-row",children:[Object(l.jsxs)("div",{className:"coin",children:[Object(l.jsx)("img",{src:t,alt:"crypto"}),Object(l.jsx)("h1",{children:c}),Object(l.jsx)("p",{className:"coin-symbol",children:n})]}),Object(l.jsxs)("div",{className:"coin-data",children:[Object(l.jsxs)("p",{className:"coin-price",children:["$",a]}),Object(l.jsxs)("p",{className:"coin-price",children:["$",s.toLocaleString()]}),r<0?Object(l.jsxs)("p",{className:"coin-percent red",children:[r.toFixed(2),"%"]}):Object(l.jsxs)("p",{className:"coin-percent green",children:[r.toFixed(2),"%"]}),Object(l.jsxs)("p",{className:"coin-marketcap",children:["Mkt Cap: $",i.toLocaleString()]})]})]})})})};var m=function(){var e=Object(n.useState)([]),c=Object(r.a)(e,2),t=c[0],a=c[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),m=i[0],p=i[1];Object(n.useEffect)((function(){o.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false").then((function(e){a(e.data)})).catch((function(e){console.log(e)}))}),[]);var d=t.filter((function(e){return e.name.toLowerCase().includes(m.toLocaleLowerCase())}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"coin-app",children:[Object(l.jsxs)("div",{className:"coin-search",children:[Object(l.jsx)("h1",{className:"coin-text",children:"Search a currency"}),Object(l.jsx)("form",{children:Object(l.jsx)("input",{type:"text",placeholder:"search",className:"coin-input",onChange:function(e){p(e.target.value)}})})]}),d.map((function(e){return Object(l.jsx)(j,{name:e.name,image:e.image,symbol:e.symbol,marketcap:e.market_cap,price:e.current_price,priceChange:e.price_change_percentage_24h,volume:e.total_volume},e.id)}))]})})};var p=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(m,{})})};s.a.render(Object(l.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.ebb9779b.chunk.js.map