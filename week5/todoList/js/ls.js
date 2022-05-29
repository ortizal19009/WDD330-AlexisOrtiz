const task = [{ task: "Empty" },{task:"hola"}];

var listTask = task.map(function (tasks) {
  return "<li class='row'>"+
  "<div class='itemClass col-md-4 alingFather'>"+
    "<input type='checkbox' name='' class='inputBox alingChild' />"+
  "</div>"+
  "<div class='itemClass col-md-4'>"+
    "<label for='' class='task'>"+ tasks.task +"</label>"+
  "</div>"+
  "<div class='itemClass col-md-4 alingFather text-center'>"+
    "<button class='btnClose alingChild'>X</button>"+
  "</div>"+
"</li>"
});
document.getElementById("ulId").innerHTML = listTask.join("");
function writeToLS(key, data){
    
}

