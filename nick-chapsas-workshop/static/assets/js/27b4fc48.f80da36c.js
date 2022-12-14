"use strict";(self.webpackChunktesting_workshop=self.webpackChunktesting_workshop||[]).push([[8030],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={description:"Integration tests can create data. Let's deal with that."},s="Dealing with leftover data",o={unversionedId:"integration-testing/api/leftover-data",id:"integration-testing/api/leftover-data",title:"Dealing with leftover data",description:"Integration tests can create data. Let's deal with that.",source:"@site/docs/integration-testing/api/leftover-data.md",sourceDirName:"integration-testing/api",slug:"/integration-testing/api/leftover-data",permalink:"/integration-testing/api/leftover-data",draft:!1,tags:[],version:"current",frontMatter:{description:"Integration tests can create data. Let's deal with that."},sidebar:"docs",previous:{title:"Our first integration test",permalink:"/integration-testing/api/first-integration-test"},next:{title:"Running the API smarter",permalink:"/integration-testing/api/using-waf"}},l={},c=[{value:"Cleanup - The naive approach",id:"cleanup---the-naive-approach",level:2},{value:"Cleanup - The &quot;a bit smarter&quot; approach",id:"cleanup---the-a-bit-smarter-approach",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dealing-with-leftover-data"},"Dealing with leftover data"),(0,r.kt)("h2",{id:"cleanup---the-naive-approach"},"Cleanup - The naive approach"),(0,r.kt)("p",null,"Cleanup, in one form or another, is an essential part of integration testing. We don't want to let our integration tests to leave data behind.\nThere are a few ways to deal with this problem."),(0,r.kt)("p",null,"What might come in mind is to create a connection against the database and delete the item by id once our test is completed its assertion.\nThis is actually a great idea and a very common technique. However, our case is a bit special."),(0,r.kt)("p",null,"Our API is a CRUD API, which means that it contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," endpoint to delete resources.\nWe can use that in our integration tests to delete the created resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'// Cleanup\nawait client.DeleteAsync($"customers/{customerResponse.Id}");\n')),(0,r.kt)("p",null,"With this being the final section in our integration test, we can run it and see that the test passes and there is no data left in the database. "),(0,r.kt)("h2",{id:"cleanup---the-a-bit-smarter-approach"},'Cleanup - The "a bit smarter" approach'),(0,r.kt)("p",null,'Now you might be thinking, "Ok but what happens if an assertion failed? Will my data never be cleaned up?". This is a fair concern.\nWe can actually work around that problem by utilizing xUnit\'s test lifecycle capabilities.'),(0,r.kt)("p",null,"Instead of cleaning the data on each test we can make two changes in our test class."),(0,r.kt)("p",null,"First we can remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"HttpClient")," from being method specific and move it to a class field:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class CustomerControllerTests\n{\n    private readonly HttpClient _client = new()\n    {\n        BaseAddress = new Uri("https://localhost:5001")\n    };\n    \n    ...\n')),(0,r.kt)("p",null,"Now, under that, let's create a list that stores all the ids of the items we created and want to delete:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"private readonly List<Guid> _idsToDelete = new();\n")),(0,r.kt)("p",null,"Then after we create any test data that we need cleaned up, we will get the id and put it in that list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"_idsToDelete.Add(customerResponse.Id);\n")),(0,r.kt)("p",null,"Now here is where the magic comes in. We will change our test class to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"IAsyncLifetime")," interface.\nThis is a special xUnit interface that will allow us to asynchronously run code before and after a test run.\nThis will force us to implement two methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"InitializeAsync")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DisposeAsync"),"."),(0,r.kt)("p",null,"For now we won't care about ",(0,r.kt)("inlineCode",{parentName:"p"},"InitializeAsync")," and simply make it return ",(0,r.kt)("inlineCode",{parentName:"p"},"Task.CompletedTask"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"public Task InitializeAsync() => Task.CompletedTask;\n")),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"DisposeAsync"),", however, we will add a loop that goes through the ids we want to delete and calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"DeleteAsync")," method of the client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public async Task DisposeAsync()\n{\n    foreach (var id in _idsToDelete)\n    {\n        await _client.DeleteAsync($"customers/{id}");\n    }\n}\n')),(0,r.kt)("p",null,"And that's it! Now the cleanup code is outside our main code and we can keep adding items in that List, knowing that at the end of the test execution it will be cleaned up."),(0,r.kt)("p",null,"Here is the full code of the ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomerControllerTests")," class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'public class CustomerControllerTests : IAsyncLifetime\n{\n    private readonly HttpClient _client = new()\n    {\n        BaseAddress = new Uri("https://localhost:5001")\n    };\n\n    private readonly List<Guid> _idsToDelete = new();\n\n    [Fact]\n    public async Task Create_ShouldCreateCustomer_WhenDetailsAreValid()\n    {\n        // Arrange\n        var request = new CustomerRequest\n        {\n            Email = "nick@chapsas.com",\n            FullName = "Nick Chapsas",\n            DateOfBirth = new DateTime(1993, 01, 01),\n            GitHubUsername = "nickchapsas"\n        };\n\n        // Act\n        var response = await _client.PostAsJsonAsync("customers", request);\n        \n\n        // Assert\n        var customerResponse = await response.Content.ReadFromJsonAsync<CustomerResponse>();\n        _idsToDelete.Add(customerResponse.Id);\n        response.StatusCode.Should().Be(HttpStatusCode.Created);\n        customerResponse.Should().BeEquivalentTo(request);\n        response.Headers.Location.Should().Be($"https://localhost:5001/customers/{customerResponse!.Id}");\n    }\n\n    public Task InitializeAsync() => Task.CompletedTask;\n\n    public async Task DisposeAsync()\n    {\n        foreach (var id in _idsToDelete)\n        {\n            await _client.DeleteAsync($"customers/{id}");\n        }\n    }\n}\n')))}u.isMDXComponent=!0}}]);