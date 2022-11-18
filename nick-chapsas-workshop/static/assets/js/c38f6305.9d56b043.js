"use strict";(self.webpackChunktesting_workshop=self.webpackChunktesting_workshop||[]).push([[6952],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),h=s,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),s=(n(7294),n(3905));const o={description:"Let's see how we can implement soak tests with k6"},a="Soak testing",i={unversionedId:"performance-testing/soak-testing",id:"performance-testing/soak-testing",title:"Soak testing",description:"Let's see how we can implement soak tests with k6",source:"@site/docs/performance-testing/soak-testing.md",sourceDirName:"performance-testing",slug:"/performance-testing/soak-testing",permalink:"/performance-testing/soak-testing",draft:!1,tags:[],version:"current",frontMatter:{description:"Let's see how we can implement soak tests with k6"},sidebar:"docs",previous:{title:"Stress testing",permalink:"/performance-testing/stress-testing"}},l={},c=[{value:"Implementing a soak test",id:"implementing-a-soak-test",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"soak-testing"},"Soak testing"),(0,s.kt)("p",null,"Soak testing is all about reliability. It takes those relatively small timespans of minutes per stage and it turns them into\nhours. Soak tests can run from 1 to 24 hours and the ultimate goal is to assess the long term reliability of the system."),(0,s.kt)("p",null,"Soak tests are used to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Detect memory leaks or random crashes"),(0,s.kt)("li",{parentName:"ul"},"Detect race-conditions that are hard to reproduce"),(0,s.kt)("li",{parentName:"ul"},"Detect issues such as socket exhaustion or database connectivity and storage issues"),(0,s.kt)("li",{parentName:"ul"},"Detect issues with log storage"),(0,s.kt)("li",{parentName:"ul"},"Detect issues with third party services")),(0,s.kt)("p",null,"You should run soak tests when you think that your system suffers from a reliability issue.\nEven though soak tests are usually run against the real production or staging system, it is also very common\nto run them locally with profiling tools hooked to your app to detect said issues."),(0,s.kt)("h2",{id:"implementing-a-soak-test"},"Implementing a soak test"),(0,s.kt)("p",null,"Soak tests are even simpler than spike tests. They only have 3 stages:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Ramp up to normal load in 2 minutes"),(0,s.kt)("li",{parentName:"ol"},"Sustain normal load for 1-24 hours"),(0,s.kt)("li",{parentName:"ol"},"Ramp down to 0 users in 2 minutes")),(0,s.kt)("p",null,"That's it!. The test method can have anything from single requests to batched one."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import http from 'k6/http';\nimport { check, sleep} from 'k6';\n\nexport const options = {\n    stages: [\n        { duration: '2m', target: 400 },\n        { duration: '1h56m', target: 400 },\n        { duration: '2m', target: 0 }\n    ],\n\n    thresholds: {\n        http_req_duration: ['p(99)<15'], \n    },\n};\n\nconst BASE_URL = 'https://localhost:5001';\n\nexport default () => {\n    const responses = http.batch([\n        ['GET', `${BASE_URL}/customers/`, null],\n        ['GET', `${BASE_URL}/customers/`, null],\n        ['GET', `${BASE_URL}/customers/`, null],\n        ['GET', `${BASE_URL}/customers/`, null],\n    ]);\n\n    responses.forEach(x => {\n        const customers = x.json();\n        check(customers, { 'retrieved customers': (obj) => obj.customers.length > 0 });\n    })    \n    sleep(1);\n};\n")),(0,s.kt)("p",null,"This is the graph that soak tests produce:"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(5894).Z,width:"685",height:"215"})))}p.isMDXComponent=!0},5894:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/soak-test-5c3dcad4024d82aded44e873ca6d31a9.jpg"}}]);