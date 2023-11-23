# Projects related to DOM

## project link (Chai aur code)
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 solution

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e, e.target);
    switch (e.target.id) {
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        text = 'No value found';
    }
  });
});

```
## project 2 solution

```javascript
const form = document.querySelector("form")

form.addEventListener('submit', (e)=>{
  e.preventDefault()

  const height = parseInt(document.querySelector("#height").value)
  const weight = parseInt(document.querySelector("#weight").value)
  const results = document.querySelector("#results")

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML= "Please give a valid height"
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML= "Please give a valid weight"
  }else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML= `<span>${bmi}</span>`
  }
})

```
## project 3 solution

```javascript
const clock = document.getElementById("clock")
// const clock = document.querySelector("#clock")

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString());
  clock.innerHTML= date.toLocaleTimeString()
}, 1000)

```
## project 5 solution

```javascript
const insert = document.querySelector("#insert")

window.addEventListener("keydown", (e)=>{
  insert.innerHTML = `<div class="color">
    <table>
      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>`
})

```
## project 6 solution

```javascript
// generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDEF";
  let color = "#";
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color
}

let intervalId;


document.querySelector("#start").addEventListener("click", function(){
  if(!intervalId){
    intervalId = setInterval(()=>{document.querySelector("body").style.backgroundColor = randomColor()}, 1000)
  }
});
document.querySelector("#stop").addEventListener("click", function(){
  clearInterval(intervalId);
  intervalId = null;
});

```