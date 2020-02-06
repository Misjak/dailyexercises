  
document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');

  const progress1 = new ProgressBar(0, 'red', 17);
  const progress2 = new ProgressBar(0, 'green', 17);
  const progress3 = new ProgressBar(0, 'blue', 17);
  
  progress1.mount(app);
  progress2.mount(app);
  progress3.mount(app);

  const mixIt = document.querySelector('.mix');
  const box = document.createElement('div');
 
  box.className = 'box';
  app.appendChild(box);

  mixIt.addEventListener ('click', () => {
  box.style.backgroundColor = `rgb(${progress1.value * 15}, ${progress2.value * 15}, ${progress1.value * 15})`; 
  })
})



// });

// const btn = document.querySelector('button');
// // const box = document.querySelector('#box');
// const box = document.createElement('div');
// box.className = 'box';
// app.appendChild(box);
// btn.addEventListener('click', () => {
//     box.style.backgroundColor = `rgb(${progress1.value * 15 }, ${progress2.value * 15}, ${progress3.value * 15} )`;
//   })