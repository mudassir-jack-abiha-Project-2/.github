function init(){
  var button = document.getElementById("submit");
  var input = document.getElementById("name");
  button.addEventListener("click", myFunction);
 

  function myFunction() {
    text = ('Thank you ' + input.value + ', you should receive a text message soon!');
    alert(text);
  }
}
window.addEventListener('load', init);
