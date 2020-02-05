document.addEventListener('DOMContentLoaded', () => {
  
  const counter = document.querySelector('#counter');
  const minus = document.querySelector ('#minus');
  const plus = document.querySelector ('#plus');
  let knob = document.querySelector('#knob');
  let boo = 4;

  const update = () => {
    counter.textContent = boo;
    knob.style.width = `${boo * 10}%`;
  }

  minus.addEventListener ('click', () => {
    if (boo > 0) {
    boo -= 1 ;
    update();
    }
  })
  
  plus.addEventListener ('click', () => {
    if (boo < 10) {
    boo += 1 ;
    update();
  }})

});