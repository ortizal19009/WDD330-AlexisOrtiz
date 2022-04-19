const links = [
    {
        labels: "Week-1 notes",
        url: "week1/index.html"
    },
    {
        labels: "Week-2 notes",
        url: "week2/index.html"
    },
    {
        labels: "Week-3 notes",
        url: "week3/index.html"
    }
]
links.forEach(list =>     
    console.log(list.labels +" .> "+ list.url)
    );
    
    var list = links.map(function(link){
        return("<li><a href="+link.url+">"+link.labels+"</a></li>");
    })
    document.getElementById("weekList").innerHTML = list;


