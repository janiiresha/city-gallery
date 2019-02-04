const currnt = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

const example = ['img1','img2','img3'];

for(let i = 0; i < imgs.length; i++){
 imgs[i].addEventListener('click', function(event){
     current.src =event.target.src;
 })
}

