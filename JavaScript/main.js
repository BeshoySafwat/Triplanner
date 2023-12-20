function Flip(){
    var card=
    ``
}
document.querySelectorAll(".enter").forEach(function(link) {
    link.addEventListener("click", function() {
      let container = document.querySelector(".container");
      container.classList.toggle("flipped");
    });
  });
