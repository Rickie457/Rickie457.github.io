const btn = document.getElementById('btn');
const body = document.getElementsByTagName("BODY")[0];
var colors = ['#e8e6e3', '#181a1b', '#ffffff', '#000000']
const rootStyle = document.querySelector(':root').style;

btn.addEventListener("click", function() {
    if (btn.innerHTML == "Light") {
        btn.innerHTML = "Dark";
        rootStyle.setProperty('--dark-bg-text', colors[3]);
        rootStyle.setProperty('--dark-bg-color', colors[4]);
    }
    else { 
        btn.innerHTML = "Light";
        rootStyle.setProperty('--dark-bg-text', colors[0]);
        rootStyle.setProperty('--dark-bg-color', colors[1]);
    }
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

var counter = 0;
const sections = document.getElementsByClassName('fade-in');
var bounding = sections[counter].getBoundingClientRect();

window.addEventListener('scroll', () => {
    if (isElementXPercentInViewport(sections[counter], 25)) {
        if (!sections[counter].classList.contains('appear')){ 
            sections[counter].classList.add('appear'); 
        }
        if (counter < sections.length-1) { counter+=1 }
    } else {
        return;
    }
});

// isElementXPercentInViewPort Source: StackOverFlow
// Original Question Hyperlink: https://stackoverflow.com/questions/30943662/check-if-element-is-partially-in-viewport 
// Author Name and Hyperlink: folo , https://stackoverflow.com/users/7657549/folo

const isElementXPercentInViewport = function(el, percentVisible) {
    let rect = el.getBoundingClientRect(),
        windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return !(
      Math.floor(100 - (((rect.top >= 0 ? 0 : rect.top) / +-rect.height) * 100)) < percentVisible ||
      Math.floor(100 - ((rect.bottom - windowHeight) / rect.height) * 100) < percentVisible
    )
};