/*
Program Name: Recipe Display Application

Author: Rachel Newton

Date: 04/06/16

Filename: script.js

*/

//displays the next element after the current target 
function display (event){
    
    $(event.currentTarget) .next() .fadeIn("slow") ;
    
}// end of display

//atach event listener to h3 elements to invoke display function when clicked
$("h3") .click(display) ;


