import{_ as N,u as x,c as u,i as y,r as w,a as M,o as $,b as I,d,e as l,f as B,w as T,g as o,t as r,h as p,n as V,F as j,j as D,p as z,k as E,l as q}from"./index-94ea20d8.js";const A=n=>(z("data-v-126dfd0b"),n=n(),E(),n),G={class:"producta"},H={key:0},J=["src"],K={class:"desa"},L={class:"discouft"},O={key:1},Q=A(()=>o("img",{src:q,alt:""},null,-1)),R=[Q],U={__name:"Product",props:{id:String},setup(n){const _=n,a=x(),m=u(()=>a.favoriteProducts.map(t=>{const c=t.discountPercentage.toString().slice(0,-3),i=Number(c),F=i,C=Math.floor(t.price*(100-i)/100);return{...t,discount:F,prices:C}})),g=t=>{v(t.id)?a.removeFromFavorites(t):a.addToFavorites(t)};u(()=>m.value.map(t=>t.discountPercentage.toString().slice(0,-3)));const v=t=>a.isProductFavorite(t),f=y("api"),h=t=>{if(t)return Math.floor(t)},e=w(null),S=u(()=>{if(e.value){const t=e.value.price*(100-e.value.discountPercentage)/100;return console.log(t),Math.floor(t)}}),b=async()=>{try{const t=await f.get(`/${_.id}`);e.value=t.data}catch(t){console.error(t)}},k=M(),P=(t,s)=>{k.addToCart(t,1)};return $(b),(t,s)=>{const c=I("router-link");return d(),l(j,null,[B(c,{to:"/",class:"hav"},{default:T(()=>[D("⇐")]),_:1}),o("div",G,[e.value?(d(),l("div",H,[o("img",{src:e.value.thumbnail,alt:""},null,8,J),o("h1",null,r(e.value.title),1),o("p",K,r(e.value.description),1),o("div",{onClick:s[0]||(s[0]=p(i=>g(e.value),["prevent"])),class:V([{kert:v(e.value.id)},"heard"])}," ❤ ",2),o("p",null,"Цена: "+r(e.value.price)+" $",1),o("div",L,r(h(e.value.discountPercentage))+"%",1),o("p",null,"Цена со скидкой: "+r(S.value)+" $",1),o("p",null,"В наличии: "+r(e.value.stock),1),o("button",{class:"custom-butto",onClick:s[1]||(s[1]=p(i=>P(e.value,t.idx),["prevent"]))}," В корзину ")])):(d(),l("div",O,R))])],64)}}},X=N(U,[["__scopeId","data-v-126dfd0b"]]);export{X as default};
