window.onscroll = function(){
    var header = document.getElementById('menu');
    var scroll_var = window.scrollY;
    if(scroll_var >= 100){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}