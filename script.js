var apiKey = "&api-key=VAVs74SNNjzQ0tqH6GVXSCuDm0T4MjE0"
var search = prompt("Search NYT");
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ search + apiKey;

$.ajax({
url: queryURL,
method: "GET",
}).then(function (response) {

    console.log(response);
    for (var i=0;i<5;i++){
        var searchList = $("<h1>");
        searchList.text(response.response.docs[i].abstract);
        console.log(response.response.docs[i].byline.original);
        console.log(response.response.docs[i].abstract);
        $("body").append(searchList);
    }

});