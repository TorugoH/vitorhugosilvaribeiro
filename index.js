
var menu = document.getElementById("menu");
var btns = menu.getElementsByClassName("sessao");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("ativo");
  current[0].className = current[0].className.replace(" ativo", "");
  this.className += " ativo";
  });
}