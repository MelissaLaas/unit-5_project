window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});

let input = document.querySelector('input');
let photos = document.getElementsByTagName('a');

const filter = () => {
    let x = input.value.toLowerCase();

    for (let i = 0; i < photos.length; i++){
      let title = photos[i].getAttribute('data-caption').toLowerCase();

      if (title.includes(x)) {
        photos[i].style.display = 'block';
      } else {
        photos[i].style.display = 'none';
      }
    }
  };

 input.addEventListener('keyup', filter);  