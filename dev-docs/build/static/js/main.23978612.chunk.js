(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(29)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t),a.d(t,"getCities",function(){return s}),a.d(t,"getSpecificCity",function(){return n}),a.d(t,"postCity",function(){return l}),a.d(t,"patchCityWebsite",function(){return o}),a.d(t,"deleteCity",function(){return r}),a.d(t,"getClubs",function(){return c}),a.d(t,"getSpecificClub",function(){return i}),a.d(t,"getComedyClubsByCity",function(){return p}),a.d(t,"postClub",function(){return u}),a.d(t,"patchClubRating",function(){return d}),a.d(t,"deleteClub",function(){return m});var s={exampleUrl:"GET: /api/v1/cities",body:"./body-examples/n-a.png",exampleResponse:"./response-ss/get-cities.png"},n={exampleUrl:"GET: /api/v1/cities/2",body:"./body-examples/n-a.png",exampleResponse:"./response-ss/get-specific-city.png"},l={exampleUrl:"POST: /api/v1/cities",body:"./body-examples/post-city.png",exampleResponse:"./response-ss/post-city.png"},o={exampleUrl:"PATCH: /api/v1/cities/3",body:"./body-examples/patch-city.png",exampleResponse:"./response-ss/patch.png"},r={exampleUrl:"DELETE: /api/v1/cities/10",body:"./body-examples/n-a.png",exampleResponse:"./response-ss/delete.png"},c={exampleUrl:"GET: /api/v1/comedy_clubs",body:"./body-examples/n-a.png",exampleResponse:"./response-ss/get-clubs.png"},i={exampleUrl:"GET: /api/v1/comedy_clubs/2",body:"./body-examples/n-a.png",exampleResponse:"./response-ss/get-specific-club.png"},p={exampleUrl:"GET: /api/v1/cities/15/comedy_clubs",body:"./body-examples/n-a.png",exampleResponse:"./response-ss/get-clubs-by-city.png"},u={exampleUrl:"POST: /api/v1/cities/2/comedy_clubs",body:"./body-examples/post-club.png",exampleResponse:"./response-ss/post-club.png"},d={exampleURL:"PATCH: /api/v1/comedy_clubs/2",body:"./body-examples/patch-club.png",exampleResponse:"./response-ss/patch.png"},m={exampleURL:"DELETE: /api/v1/cities/1/comedy_clubs/10",body:"./body-examples/n-a.png",exampleResponse:"./response-ss/delete.png"}},function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),l=a(7),o=a.n(l),r=(a(14),a(1)),c=a(2),i=a(4),p=a(3),u=a(5),d=(a(16),a(18),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("header",{className:"intro"},n.a.createElement("h1",null,"Comedy Club API - Developers FAQ"),n.a.createElement("p",{className:"intro-text"},"Welcome to the Comedy Club API. This page is designed to help developers gain a firm understanding of the API's endpoints, how to access them, what kind of data can be expected from them, and how to troubleshoot potential issues."))}}]),t}(s.Component)),m=(a(20),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{className:"instructions"},n.a.createElement("article",{className:"left-pane"},n.a.createElement("h3",null,"Interactive API Tester"),n.a.createElement("p",null,"The panel below displays documentation for all endpoints, parameters, and error messages available to the Comedy Club API. Deploy frames for individual endpoints to see how they work.")),n.a.createElement("article",{className:"right-pane"}))}}]),t}(s.Component)),y=(a(22),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.showStatus,s=e.closeModal;return n.a.createElement("aside",{className:"example-modal ".concat(a)},n.a.createElement("button",{onClick:s},"close"),n.a.createElement("h4",null,"Example Endpoint: ",t.exampleUrl),n.a.createElement("h4",null,"Example Body Object:"),n.a.createElement("img",{src:t.body,alt:"body-example"}),n.a.createElement("h4",null,"Example Response Object"),n.a.createElement("img",{src:t.exampleResponse,alt:"example-response"}),n.a.createElement("div",null))}}]),t}(s.Component)),b=(a(24),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).handleClick=function(t){"show example"===t.target.innerText||e.props.modalDeployed||e.setState({deployed:!e.state.deployed,modalStatus:!1})},e.openModal=function(){console.log(e.props.modalDeployed),e.setState({modalStatus:!0}),e.props.openModal()},e.closeModal=function(){e.setState({modalStatus:!1}),e.props.closeModal()},e.state={deployed:!1,modalStatus:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.type,a=e.url,s=e.params,l=e.body,o=e.successStatus,r=e.returns,c=e.failureStatus,i=e.failureMessage,p=e.example;return n.a.createElement("article",{className:"pane",onClick:this.handleClick},n.a.createElement("section",{className:"main-pane"},n.a.createElement("p",{className:"type main-info"},t),n.a.createElement("p",{className:"url main-info"},a),n.a.createElement("p",{className:"returns main-info"},r)),n.a.createElement("section",{className:"secondary-pane ".concat(this.state.deployed)},n.a.createElement("p",{className:"query-params secondary-info"},n.a.createElement("span",{className:"secondary-label"},"Query parameters:")," ",s),n.a.createElement("p",{className:"request-body secondary-info"},n.a.createElement("span",{className:"secondary-label"}," Request body:")," ",l),n.a.createElement("p",{className:"succesful-code secondary-info"},n.a.createElement("span",{className:"secondary-label"},"Succesful status code:")," ",o),n.a.createElement("p",{className:"error-code secondary-info"},n.a.createElement("span",{className:"secondary-label"},"Error status code:")," ",c),n.a.createElement("p",{className:"error-message secondary-info"},n.a.createElement("span",{className:"secondary-label"},"Error message:")," ",i),n.a.createElement("button",{onClick:this.openModal},"show example")),n.a.createElement(y,{data:p,closeModal:this.closeModal,showStatus:this.state.modalStatus}))}}]),t}(s.Component)),f=(a(26),a(28)),h=f.getCities,g=f.getSpecificCity,E=f.postCity,x=f.patchCityWebsite,v=f.deleteCity,C=f.getClubs,S=f.getSpecificClub,N=f.getComedyClubsByCity,j=f.postClub,O=f.patchClubRating,w=f.deleteClub,M=[{type:"GET",url:"/api/v1/cities",params:"N/A",body:"N/A",successStatus:200,returns:"fetches an array of city objects",failureStatus:422,failureMessage:"<error message>",example:h},{type:"GET",url:"/api/v1/cities/:id",params:"city id (number)",body:"N/A",successStatus:200,returns:"fetches an array with a specific city object matching the id parameter",failureStatus:"N/A",failureMessage:"N/A",example:g},{type:"POST",url:"/api/v1/cities",params:"N/A",body:"an object with city (string), state (string), primary_airport (string), population (number), and tourism_website (string) key/value pairs.",successStatus:201,returns:"posts a new city and returns an object with a key/value pair of 'id' and the id number",failureStatus:422,failureMessage:"unprocessable entity",example:E},{type:"PATCH",url:"/api/v1/cities/:id",params:"city id (number)",body:"an object with a tourism_website (string) key/value pair",successStatus:204,returns:"updates a city's tourism website and returns the number of rows affected by the patch (1)",failureStatus:415,failureMessage:"<error message>",example:x},{type:"DELETE",url:"/api/v1/cities/:id",params:"city id (number)",body:"N/A",successStatus:202,returns:"deletes a city and returns the id number of the city",failureStatus:"N/A",failureMessage:"N/A",example:v}],A=[{type:"GET",url:"/api/v1/comedy_clubs",params:"N/A",body:"N/A",successStatus:200,returns:"fetches an array of all comedy club objects",failureStatus:"N/A",failureMessage:"N/A",example:C},{type:"GET",url:"/api/v1/comedy_clubs/:club_id",params:"comedy club id (number)",body:"N/A",successStatus:200,returns:"fetches an array with a specific comedy club object",failureStatus:415,failureMessage:"<error message>",example:S},{type:"GET",url:"/api/v1/cities/:city_id/comedy_clubs",params:"city id (number)",body:"N/A",successStatus:201,returns:"fetches an array of comedy club objects with a specific city id",failureStatus:422,failureMessage:"<error message>",example:N},{type:"POST",url:"/api/v1/cities/:city_id/comedy_clubs",params:"city id (number)",body:"an object with name (string), street_address (string), zip_code (number), and rating (number) key/value pairs",successStatus:201,returns:"posts a new comedy club and returns the entire body object",failureStatus:422,failureMessage:"<error message>",example:j},{type:"PATCH",url:"/api/v1/comedy_clubs/:club_id",params:"comedy club id (number)",body:"on object with the rating (number) key/value pair",successStatus:204,returns:"updates a comedy club's rating and returns the id of the created club",failureStatus:415,failureMessage:"<error message>",example:O},{type:"DELETE",url:"/api/v1/cities/:city_id/comedy_clubs/:club_id",params:"city id (number), comedy club id (number)",body:"N/A",successStatus:202,returns:"deletes a comedy club and returns the id number of the comedy club",failureStatus:"N/A",failureMessage:"N/A",example:w}],T=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).handleModal=function(t){e.setState({deployed:t})},e.closeModals=function(){e.setState({deployed:null})},e.state={deployed:null},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=0,a=M.map(function(a){return t++,n.a.createElement(b,{openModal:e.props.openModal,closeModal:e.props.closeModal,modalDeployed:e.props.modalDeployed,key:t,data:a})}),s=A.map(function(a){return t++,n.a.createElement(b,{openModal:e.props.openModal,closeModal:e.props.closeModal,modalDeployed:e.props.modalDeployed,key:t,data:a})});return n.a.createElement("main",{className:"pane_container"},n.a.createElement("section",{className:"city-section"},a),n.a.createElement("section",{className:"clubs-section"},s))}}]),t}(s.Component),k=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).modalsOpen=function(){e.setState({modalDeployed:!0})},e.modalsClosed=function(){e.setState({modalDeployed:!1})},e.state={modalDeployed:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"dark-overlay ".concat(this.state.modalDeployed)}),n.a.createElement(d,null),n.a.createElement(m,null),n.a.createElement(T,{openModal:this.modalsOpen,closeModal:this.modalsClosed,modalDeployed:this.state.modalDeployed}),n.a.createElement("div",null))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,2,1]]]);
//# sourceMappingURL=main.23978612.chunk.js.map