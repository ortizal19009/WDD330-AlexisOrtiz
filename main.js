const links = [
  {
    labels: "Week-1 notes",
    url: "week1/index.html"
  },
   {
    labels: "Week-2 notes",
    url: "week2/index.html"
  },
/*  {
    labels: "Week-3 notes",
    url: "week3/index.html"
  },
  {
    labels: "Week-4 notes",
    url: "week4/index.html"
  },
  {
    labels: "Week-5 notes",
    url: "week5/index.html"
  },
  {
    labels: "Week-6 notes",
    url: "week6/index.html"
  },
  {
    labels: "Week-7 notes",
    url: "week7/index.html"
  },
  {
    labels: "Week-8 notes",
    url: "week8/index.html"
  },
  {
    labels: "Week-9 notes",
    url: "week9/index.html"
  },
  {
    labels: "Week-10 notes",
    url: "week10/index.html"
  },
  {
    labels: "Week-11 notes",
    url: "wee-11/index.html"
  },
  {
    labels: "Week-12 notes",
    url: "week12/index.html"
  },
  {
    labels: "Week-13 notes",
    url: "week13/index.html"
  },
  {
    labels: "Week-14 notes",
    url: "week14/index.html"
  } */
];
var list = links.map(function (link) {
  return ("<div class='clButtoms col-md-3 col-sm-12'><a href=" + link.url + ">" + link.labels + "</a></div>");
});
document.getElementById("weekList").innerHTML = list.join('');
