let btn = document.querySelector('.btn'),
  text = document.querySelector('.text'),
  res = document.querySelector('.res');

btn.addEventListener('click', function(){
  let str = text.value,
    temp = '';
    for (let i = 0; i < str.length; ++i){
      if (i % 2 === 0) temp += str[i]
    }
  res.textContent = temp;
},{passive: true})