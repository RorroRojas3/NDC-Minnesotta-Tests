"use strict";(self.webpackChunktesting_workshop=self.webpackChunktesting_workshop||[]).push([[321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={description:"Let's understand what is performance testing"},o="Introduction to Performance Testing",s={unversionedId:"performance-testing/intro-to-perf-testing",id:"performance-testing/intro-to-perf-testing",title:"Introduction to Performance Testing",description:"Let's understand what is performance testing",source:"@site/docs/performance-testing/intro-to-perf-testing.md",sourceDirName:"performance-testing",slug:"/performance-testing/intro-to-perf-testing",permalink:"/performance-testing/intro-to-perf-testing",draft:!1,tags:[],version:"current",frontMatter:{description:"Let's understand what is performance testing"},sidebar:"docs",previous:{title:"Performance testing",permalink:"/category/performance-testing"},next:{title:"Smoke testing",permalink:"/performance-testing/smoke-testing"}},l={},p=[{value:"What is Performance testing?",id:"what-is-performance-testing",level:2},{value:"Different types of performance testing",id:"different-types-of-performance-testing",level:2},{value:"Introducing k6",id:"introducing-k6",level:2},{value:"Installation",id:"installation",level:2},{value:"Windows",id:"windows",level:3},{value:"MacOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Debian/Ubuntu",id:"debianubuntu",level:4},{value:"Fedora/CentOS",id:"fedoracentos",level:4}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-performance-testing"},"Introduction to Performance Testing"),(0,a.kt)("h2",{id:"what-is-performance-testing"},"What is Performance testing?"),(0,a.kt)("p",null,'Performance testing is a non-functional testing technique which aims to identify the performance of our system.\n"Performance" is usually quantified by speed, stability, scalability and responsiveness.'),(0,a.kt)("p",null,"It aims to answer questions such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How is my system performing under normal load?"),(0,a.kt)("li",{parentName:"ul"},"How is my system performing under normal load for an extended period of time?"),(0,a.kt)("li",{parentName:"ul"},"How is my system performing when 10000 users use it all at once?"),(0,a.kt)("li",{parentName:"ul"},"How is my system scaling to handle increased traffic and how does it scale down when the traffic is gone?"),(0,a.kt)("li",{parentName:"ul"},"How will my system behave if it's hit with 100.000 requests per second")),(0,a.kt)("p",null,"All of these are questions that performance testing can answer."),(0,a.kt)("h2",{id:"different-types-of-performance-testing"},"Different types of performance testing"),(0,a.kt)("p",null,"There are different types of performance or load testing. The tooling is the same but what changes is the way\nwe send the traffic to the target. "),(0,a.kt)("p",null,"Here are the main types of load testing:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7846).Z,width:"800",height:"368"})),(0,a.kt)("p",null,"Each test type and approach aims to give us specific information about how our system runs under load."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Smoke Tests help us verify how our app performs during expected, normal load."),(0,a.kt)("li",{parentName:"ul"},"Load Tests help us verify how our system performs during expected, high load"),(0,a.kt)("li",{parentName:"ul"},"Stress Tests help us verify how our system performs during unexpected, sustained high load"),(0,a.kt)("li",{parentName:"ul"},"Spike Tests help us verify how our system performs during unexpected, transient high load"),(0,a.kt)("li",{parentName:"ul"},"Soak Tests help us verify how reliable our system is during load over a long period of time")),(0,a.kt)("h2",{id:"introducing-k6"},"Introducing k6"),(0,a.kt)("p",null,"For our performance testing we will be using a tool called ",(0,a.kt)("a",{parentName:"p",href:"https://k6.io/"},"k6"),"."),(0,a.kt)("p",null,"It is an open-source load testing tool written in Go and using the CLI to run and JavaScript to script out and makes the process of writing load tests extremely simple."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey package manager")," you can install the unofficial k6 package with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"choco install k6\n")),(0,a.kt)("p",null,"If you use the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/microsoft/winget-cli"},"Windows Package Manager"),", install the official packages from the k6 manifests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"winget install k6\n")),(0,a.kt)("p",null,"Alternatively, you can download and run ",(0,a.kt)("a",{parentName:"p",href:"https://dl.k6.io/msi/k6-latest-amd64.msi"},"the latest official installer"),"."),(0,a.kt)("h3",{id:"macos"},"MacOS"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"brew install k6\n")),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("h4",{id:"debianubuntu"},"Debian/Ubuntu"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},'sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69\necho "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list\nsudo apt-get update\nsudo apt-get install k6\n')),(0,a.kt)("h4",{id:"fedoracentos"},"Fedora/CentOS"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"dnf")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"yum")," on older versions):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-commandline"},"sudo dnf install https://dl.k6.io/rpm/repo.rpm\nsudo dnf install k6\n")))}c.isMDXComponent=!0},7846:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/test-types-929ea59694c6237e6eb8f46a39788c19.jpg"}}]);