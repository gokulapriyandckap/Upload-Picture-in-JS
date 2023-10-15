let image = document.querySelector('img');
let input = document.querySelector('input');

input.addEventListener('change',(e)=>{
     image.src = URL.createObjectURL(e.target.files[0])
})