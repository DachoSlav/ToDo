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
 var noteTime = document.getElementById("form__time");
 var noteDate = document.getElementById("form__duedate"); 
 
 add.addEventListener("click", function(){
    if(noteName.value == "" || parseInt(noteName.value)+0 == noteName.value){
        alert("Please enter your Note Name properly");
    }else{
    
    

    
    const listElement = document.createElement("div");
    const todo = document.getElementById("todo");
    const done = document.getElementById("done")
    const doneButton = document.createElement("button");
    




    listElement.className += "todo__item";
    listElement.setAttribute("id","todo__item");
    listElement.innerHTML = noteName.value+"  -" + ' '+ " Due: "+ noteTime.value+"h" + " " + noteDate.value;
    
    const theName = listElement.innerHTML = noteName.value;
    doneButton.setAttribute("id", "done__button");
    doneButton.textContent = "Done";


    
    todo.appendChild(listElement);
    listElement.appendChild(doneButton);


    doneButton.addEventListener("click",function(){
        todo.removeChild(listElement);
        listElement.removeChild(doneButton);
        done.appendChild(listElement);
        listElement.innerHTML = theName;
        listElement.setAttribute("class", "done__style__element")
        
    } )
   
 
    document.getElementById("display-none").style = 'display: none';
    noteName.value = "";
    noteDate.value = "";


}
 })



 