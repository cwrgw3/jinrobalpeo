$(document).ready(function() {
    $(window).scroll( function(){
        $('.fadeinleft').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-left':'0px'},1000);
            }
            
        }); 
    });
});

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0; 
    elmnt.onmousedown = dragMouseDown;
 
    function dragMouseDown(e) {
       e = e || window.event;
       e.preventDefault(); 
       pos3 = e.clientX;
       pos4 = e.clientY; 
       document.onmouseup = closeDragElement;
       document.onmousemove = elementDrag;
    }
 
    function elementDrag(e) {
       e = e || window.event;
       e.preventDefault();
       pos1 = pos3 - e.clientX;
       pos2 = pos4 - e.clientY;
       pos3 = e.clientX;
       pos4 = e.clientY; 
       elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
       elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
 
    function closeDragElement() {
       document.onmouseup = null;
       document.onmousemove = null;
       console.log("현재 요소의 위치 y는 " + elmnt.top +", x는" + elmnt.left  + "입니다.");
    }
 }

 dragElement(document.getElementById("mydiv"));