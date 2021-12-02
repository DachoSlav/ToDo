var add__note = document.getElementById("add__form");
var add = document.getElementById("add");
var discard = document.getElementById("discard");

var notes__created__counter = 0;
var notes__done__counter = 0;

//function for appearing the filling form
add__note.addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("display-none").style = "display: block";
    document.getElementById("text").style = "display: none";
  }, 100);
});



//function for discarding the element
discard.addEventListener("click", function () {
  setTimeout(function () {
    document.getElementById("display-none").style = "display: none";
  }, 250);
});


//function for adding the new element in ToDo list 
var noteName = document.getElementById("form__subject");
var noteTime = document.getElementById("form__time");
var noteNameArray = [];


add.addEventListener("click", function () {
  if (
    noteName.value == "" ||
    parseInt(noteName.value) + 0 == noteName.value 
    
  ) {
    alert("Please check if all your credentials are correctly provided ");
  } else {

    const str = noteName.value;
    const arr = str.split(" ");
    console.log(str)
    console.log(arr)
    
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  
    }

    const str2 = arr.join(" ");
    



    

    document.getElementById("list").style = "display: block";
    document.getElementById("success__rate").innerHTML = "Productivity: "+ (notes__done__counter/notes__created__counter)*100 + "%"
    document.getElementById("notes__created").innerHTML = "NotesCreated: 0";
    document.getElementById("notes__done").innerHTML = "Noted Done: 0";
    document.getElementById("success__rate").innerHTML = "Productivity: 0%";


    const listElement = document.createElement("div");
    const todo = document.getElementById("todo");
    const done = document.getElementById("done");
    const doneButton = document.createElement("button");

    theTime = document.createElement("p");
    notes__created__counter++;

    document.getElementById("notes__created").innerHTML =
      "Notes Created: " + notes__created__counter;

    listElement.setAttribute("class", "todo__item");
    listElement.setAttribute("id", "todo__item");

    listElement.innerHTML = str2;
    
  
    const theName = (listElement.innerHTML = str2);
  
    doneButton.setAttribute("id", "done__button");
    doneButton.textContent = "Done";




    todo.appendChild(listElement);
    listElement.appendChild(doneButton);
   

    doneButton.addEventListener("click", function () {
      todo.removeChild(listElement);
      listElement.removeChild(doneButton);

      done.appendChild(listElement);
      listElement.innerHTML = theName;
      listElement.setAttribute("class", "done__style__element");
      notes__done__counter++;
      document.getElementById("notes__done").innerHTML =
        "Notes Done: " + notes__done__counter;

        document.getElementById("success__rate").innerHTML = "Productivity: "+ (notes__done__counter/notes__created__counter)*100 + "%"
        document.getElementById("todo__item").className = "done__button__class";
    });
    document.getElementById("display-none").style = "display: none";
    }
  noteName.value ='';
});


