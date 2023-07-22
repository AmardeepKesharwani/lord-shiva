
$(document).ready(function(){
 var audio = document.getElementById("audio");
 $('.bell').on('click', function(){
  navigator.vibrate([400,300,400,300,400]);
  $(this).parent().fadeOut(2000);
  $(".smoke").fadeIn();

   setTimeout(function(){
    audio.play();
   },3000);
   setTimeout(function(){
    smokeHide();
   },4000);
 });
 
 function smokeHide(){
  $('.smoke').fadeOut(2000);
  $(".main").fadeIn(1000);
  setTimeout(()=> jal(),3000);
 }
 function jal(){
 $('.lota').addClass('jal');
 setTimeout(function(){
 $('.ling').addClass('shadow');
 },4000);
 }
 setTimeout(function(){
  $('.main').fadeOut(4000)
 },15000);
 setTimeout(function(){
 $('.smoke').fadeIn(1000)
 },20000)
 setTimeout(function(){
 $('.smoke').fadeOut(1000)
 $('.shiva').fadeIn(4000)
 },25000)
});
/* 
$(window).unload( function () {
 audio.pause()
 });
  */
