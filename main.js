var add__note = document.getElementById("add__form");
var add = document.getElementById("add");
var discard = document.getElementById("discard");



add__note.addEventListener("click", function(){ 
    setTimeout(function(){
        document.getElementById("display-none").style = 'display: block';
    }, 100)
    
 });

 discard.addEventListener("click", function(){ 
    setTimeout(function(){
        document.getElementById("display-none").style = 'display: none';
    }, 250)

 },);
 var noteName = document.getElementById("form__subject");
 var noteDescription = document.getElementById("form__description");
 var noteDate = document.getElementById("form__duedate"); 
 
 add.addEventListener("click", function(){
    
    // document.getElementById("todo__item").innerHTML = 
    // noteName.value + " " 
    // + noteDescription.value + " " 
    // + noteDate.value;

    const listElement = document.createElement("div");
    const todo = document.getElementById("todo");
    
    listElement.className += "todo__item";
    listElement.setAttribute("id","todo__item");
    listElement.innerHTML = noteName.value;
    todo.appendChild(listElement);
   
   


    document.getElementById("display-none").style = 'display: none';

    noteName.value = "";
    noteDescription.value = "";
    noteDate.value = "";

 })

 