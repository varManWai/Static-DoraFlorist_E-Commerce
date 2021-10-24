function myFunction2(){
    var click = document.getElementById("hidden-container");
    var btn = document.getElementById("latest-btn");
    
        click.style.display = "flex";
        click.style.flexDirection = "row";
        click.style.flexWrap = "wrap";
        click.style.justifyContent = "center";

        btn.style.display = "none";
    
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
  var y = document.getElementsByClassName('linker');

  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("nav").style.background = "white";
    document.getElementById("promo-box").style.display = "none";
    document.getElementById("title").style.color = "black";
    
    for (var i = 0; i < x.length; i++) 
    {
      x[i].style.color = "black";
    }
    for (var i = 0; i < y.length; i++) 
    {
      y[i].style.color = "black";
    }
  }
  else {
    document.getElementById("nav").style.background = "none";
    document.getElementById("promo-box").style.display = "block";
    document.getElementById("title").style.color = "white";

    for (var i = 0; i < x.length; i++) 
    {
      x[i].style.color = "white";
    }
    for (var i = 0; i < y.length; i++) 
    {
      y[i].style.color = "white";
    }
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

function noWorking(content){
  alert('This ' + content + ' do not Function :3');
}