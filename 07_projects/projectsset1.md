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