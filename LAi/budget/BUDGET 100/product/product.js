function onclickX(x,y){

  var titleBox = document.getElementById(y)
  var info= document.getElementById(x);
  var infoStyle = info.style.display;
  

  if (infoStyle == 'block') {
    
    info.style.display = 'none';
    titleBox.style.borderBottom  = "5px solid grey";
  }
  else {
    
    info.style.display = 'block';
    titleBox.style.borderBottom  = "none";
  }

  if(document.getElementById("flower-care").style==="display:" + block + ";"){
    document.getElementById("flower-care").style.display = "none";
  }
  else{
    document.getElementById("flower-care").style.display = "block";
  }
}


//start
window.onscroll = function() {myFunction()};
window.onscroll = function() {scrollFunction()};


var header = document.getElementById("nav");

function myFunction() {
  
  header.classList.add("sticky");
}


function scrollFunction() {
    var x = document.getElementsByClassName('nav-a');
  
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      
      document.getElementById("promo-box").style.display = "none";
    }
    else {
      
      document.getElementById("promo-box").style.display = "block";
    }
  }
  
  function searchAppear() {
                  
    document.getElementById("search").style.display = "block";
    document.getElementById("search-submit").style.display = "block";
    document.getElementById("close").style.display = "block";
    
  }
  
  function searchDisappear(){
    
    var check = confirm('Confirm ?');
    if(check ===  true){
    document.getElementById("search").style.display = "none";
    document.getElementById("search-submit").style.display = "none";
    document.getElementById("close").style.display = "none";
    }
    
  }
  
  function noWorking(x){
    alert('This ' + x + ' do not Function :3')
  }