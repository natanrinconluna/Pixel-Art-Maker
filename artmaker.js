const canvas = document.querySelector('.canvas');
const colorControl = document.querySelector('#colorcontrols')
let color = "grey"
let colortext = ['red','blue','green',]

for(let i = 0; i < 2700; i++){
    const div = document.createElement('div');
    div.className = "pixel";
    div.setAttribute('id', 'squares')
    div.addEventListener('click', () => {
      div.style.backgroundColor = color
    })
    canvas.append(div);
}


for(let j = 0; j < colortext.length; j++){
  const div = document.createElement('div');
  div.addEventListener('click', () => {
    color = colortext[j]
  })
  div.setAttribute('id', 'color')
  div.className = 'button';
  div.innerText = colortext[j]
  colorControl.appendChild(div)
}

let colorButton = document.querySelector('.button');
// colorButton.addEventListener('click' , (e) => 
//   console.log(e.target));