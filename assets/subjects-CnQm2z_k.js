import{_ as g,e as d,o as p,a as o,c,b as s,F as h,f as m,t as A,p as k,d as w,u as j}from"./index-Bj6XlVMj.js";const H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKhSURBVHgB7ZnLjeJAEIYLhHiIwxKCQ9jNYLkgHpd1BEAGSwRrIgAiWDYCcwEkLjMhTAjOYH3hAEIwf42w5IN73N3ubs/Bn4RgVH2ov6urqquHqKKiQokwDHun0+k7fRFqKouPx+P08Xis8bOHT9RoNPzBYPBGJSItgHe+1Wr9zzAtxuPxmkqiLruw2Wx6AtMKkflDJSEt4Hq9RviKs2w4VkFZIpRygJP3druF+Oll2SFkC6EL3/djcoSSAAY77cHRFxKLeKvX6/5oNIrIAcoCGBZxv9/DWq0mKqcRbH0XIqRzIA07hqPSx8+dYMlHlFgoWUYrAmn2+32A3RYlMOfCHGV2R5bQikCayWQSYLeXAjM3vPBwOPwmSxSOQMLTyZXIjigFOHpLMowxAQzO/E9Eg8tsL8uO6rQeDocLMohRAUxemQW7y+UyN9UrjAtgJEQYK7OFkzgLdowd5KYmWGKszFqJQBok9xZfU4G58JXcSgTSoAfMPimzHu5WHIkpaWI9Agk5DY/xdRqe9QgkcMODgLnIDtuMNHAm4MmDxDPFN9LAmQAeeHheIEGTAxvSwImAp/OBwBzDpn3hs5rE/BDQbrdXcHAmWBKjjPaLlNEGWYKdx0PAC5z/dOiB8xEVoJSrhMmx03gO8OCfcw965WnO1Ljp9DoN2wb9wOhwYywCz2dH3nmR80vTzjNGBKRqvIgFd2KyQOEjhNsmj5GinY1RaThZX8kS2gK4THY6nb94H/olWOLk9VqrDyQPW/hYrfEyKOdAUuNFr3Jc4zHz/nD1tKgkQKLG/+Ma7/JxV+kI5bxMb2yUyTykI4CJio+Ml2WzVeNlKPwPDr4K26rxMkgL4HONxE2/qvHffTi/pRJR7gNc/7vdrnc+nyOXyVpRUZHNO1FfYSEGl+5AAAAAAElFTkSuQmCC",I="chinese",_=[{id:1,title:"民用航空法及相關法規",questionCounts:294,testTopic:"law"}],S={lang:I,subject:_},v="english",x=[{id:1,title:"Civil Aviation Law and Related Regulations",questionCounts:294,testTopic:"law"}],R={lang:v,subject:x},i=t=>(k("data-v-a6fc3655"),t=t(),w(),t),b={class:"subjects-page"},C=i(()=>s("span",null,"Commercial Airplane",-1)),O={class:"subjects"},B=["onClick"],K={class:"subject-info"},E=i(()=>s("img",{src:H,alt:"arrow-right",class:"arrow"},null,-1)),L={__name:"subjects",setup(t){const a=j(),l=d(()=>localStorage.getItem("lang")==="chinese"?S.subject:R.subject),r=()=>{a.push("/")},u=n=>{a.push(`/subjects/${n}`)};return p(()=>{localStorage.removeItem("subject")}),(n,Q)=>(o(),c("div",b,[s("div",{class:"nav-bar"},[s("span",{class:"back",onClick:r},"Back"),C]),(o(!0),c(h,null,m(l.value,e=>(o(),c("div",O,[(o(),c("div",{key:e.id,class:"subject",onClick:Y=>u(e.testTopic)},[s("div",K,[s("span",null,A(e.title),1),s("span",null,"Questions: "+A(e.questionCounts),1)]),E],8,B))]))),256))]))}},N=g(L,[["__scopeId","data-v-a6fc3655"]]);export{N as default};