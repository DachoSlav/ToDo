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