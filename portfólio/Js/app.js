const menuLinks = document.querySelectorAll('.menuLinks a[href="#"]')

function getDistanceFromTheTop(element) {
  const id = element.getAtribute("href")
  return document.querySelector(id).offsetTop; 
}

function nativeScroll(getDistanceFromTheTop) {
  window.scroll({
    top: distanceFromTheTop,
    behavior : "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 50;
  nativeScroll(ditanceFromThetop)
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection)
})