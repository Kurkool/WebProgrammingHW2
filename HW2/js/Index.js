window.onload = function () { 
    
var input = document.getElementById('input');

var result = "";

function Generate() {
    var checkedValue = null; 
    var inputElements = document.getElementsByClassName('SelcNum');
    console.log(inputElements)
    for(var i=0; i<inputElements.length;i++){
        console.log(inputElements)
          if(inputElements[i].checked){
               checkedValue = inputElements[i].value;
               console.log(checkedValue)


               //break;
          }
    }
}


} //window







