// ==UserScript==
// @name        Topcoder fullscreen
// @namespace   Topcoder.com
// @description Changes the view of practise area problems into full screen.
// @include     http://community.topcoder.com/stat?c=problem_statement&*
// @version     1
// @grant       none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

/*
Remove the left navigation bar.
Remove the footer.
Increase the font size to 15.
Add tutorial link to the page for easy access.
*/

$(document).ready(function() {
    $('.leftNavWrapper').hide();
    $('#footer').hide();  
    $('.statText').css("font-size",15);
    $('.statTextBig, .statTextLarge').css("font-size",15);
    $('.statTextLarge').css("font-size",15);  
    var url = 'http://apps.topcoder.com/wiki/display/tc/Algorithm+Problem+Set+Analysis';
   $( ".statText:last" ).append( '<br>"<a href="'+url+'">Tutorial</a>"' );
});