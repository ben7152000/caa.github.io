import{_ as m,r as d,o as _,a as g,c as h,b as t,n,p as b,d as C,u as S}from"./index-DG-a51r7.js";const I=""+new URL("logo-Ky9hkXC0.png",import.meta.url).href,c=s=>(b("data-v-832057b6"),s=s(),C(),s),f={class:"home"},k=c(()=>t("div",{class:"nav-bar"},"Commercial Pilot",-1)),y=c(()=>t("img",{src:I,alt:"logo",class:"logo"},null,-1)),x={class:"bottom-info"},B=c(()=>t("div",{class:"select-practice"},[t("span",null,"Commercial Airplane")],-1)),L={class:"select-lang"},T={class:"select-topic"},$=c(()=>t("div",{class:"copyright"}," Copyright © 2024 Y.C.C. ",-1)),j={__name:"home",setup(s){const v=S(),l=d("chinese"),o=d("study"),p=a=>{l.value=a},i=a=>{o.value=a},u=()=>{localStorage.setItem("lang",l.value),localStorage.setItem("topic",o.value),v.push("/subjects")};return _(()=>{localStorage.removeItem("lang"),localStorage.removeItem("topic"),localStorage.removeItem("subject")}),(a,e)=>(g(),h("div",f,[k,y,t("div",x,[B,t("div",L,[t("div",{class:n(["tab",{active:l.value==="chinese"}]),onClick:e[0]||(e[0]=r=>p("chinese"))},"Chinese",2)]),t("div",T,[t("div",{class:n(["tab",{active:o.value==="study"}]),onClick:e[1]||(e[1]=r=>i("study"))},"Study",2),t("div",{class:n(["tab",{active:o.value==="test"}]),onClick:e[2]||(e[2]=r=>i("test"))},"Test",2)]),t("button",{class:"btn-start",onClick:u},"Start"),$])]))}},R=m(j,[["__scopeId","data-v-832057b6"]]);export{R as default};
