var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;import{k as c,u as a,r as l,a as d,j as p,b as u,c as f,l as h,R as m,d as g}from"./vendor.71c7dc03.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const b=function(e){return e*Math.PI/180},y=(e,r)=>{const t=b(r);return[e*Math.cos(t),e*Math.sin(t)]},v=()=>{const e=c.useCss(O),{width:m,height:g}=a(),v=l.exports.useRef(null),{docX:k,docY:w}=d(v),[x,j]=l.exports.useState([]),[N,P]=l.exports.useState(45);return p("div",(I=((e,r)=>{for(var t in r||(r={}))o.call(r,t)&&s(e,t,r[t]);if(n)for(var t of n(r))i.call(r,t)&&s(e,t,r[t]);return e})({},e),M={className:"root",ref:v,onClick:()=>{j([{force:y(1,N)}]);const e=h.exports.random(0,360,!0);P(e)},children:u(f.World,{width:m,height:g,gravity:[0,0],children:[x.map(((e,r)=>p(f.Item,{left:k,top:w,density:1e-5,friction:0,restitution:1,width:50,height:50,initialForce:e.force,shape:"circle",children:p("div",{className:"cannon-ball"})},e.force[1]))),p("div",{className:"line",style:{top:w,left:k,backgroundColor:"black"}}),p("div",{className:"line",style:{top:w,left:k,transform:`rotate(${b(N)}rad)`,backgroundColor:"green"},children:u("span",{children:[h.exports.round(N,1),"°"]})})]})},r(I,t(M))));var I,M},O="\n* {\n  margin: 0;\n  padding: 0;\n}\n\n& .root {\n  cursor: pointer;\n}\n\n& .line {\n  position: absolute;\n  height: 2px;\n  width: 50px;\n  transform-origin: left center;\n  text-align: right;\n}\n\n& .line span {\n  font-size: 10px;\n}\n\n& .cannon-ball {\n  background-color: hotpink;\n}\n";m.render(p(g.StrictMode,{children:p(v,{})}),document.getElementById("root"));