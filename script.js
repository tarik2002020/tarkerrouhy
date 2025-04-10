let exit = document.querySelector("#exit")
let cader = document.querySelector(".cader")
let register = document.querySelector(".Register")
exit.onclick = function() {
    cader.style.top="1000px"
    register.style.display="block"
  }
register.onclick = function() {
  cader.style.top="70px"
  register.style.display="none"
}
