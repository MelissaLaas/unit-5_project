
window.addEventListener('load', function() {
  baguetteBox.run('.gallery');
});

// const search = new Filter('search', 'data-caption');​ removed 

let input = document.querySelector('input');
let photos = document.getElementsByTagName('a');

const searchFilter = () => {
  let x = input.value.toLowerCase();

  for (let i = 0; i < photos.length; i++){
    let caption = photos[i].getAttribute('data-caption').toLowerCase();

    if (caption.includes(x)) {
      photos[i].style.display = 'block';
    } else {
      photos[i].style.display = 'none';
    }
  }
};

input.addEventListener('keyup', searchFilter);  