var headerSlider = document.getElementById('testsub');
headerSlider.style.backgroundImage = "url('assets/images/img-Zocalo.JPEG')";
headerSlider.style.backgroundPosition = '38% 70%';

var images = new Array('img-Zocalo.jpeg','img-Ciudad.jpeg','img-BellasArtesTarde.jpeg',
                      'img-Ciudad2.jpeg','img-ITAM.jpeg','img-Angel.jpeg',
                      'img-Ciudad3.jpeg','img-Diana.jpeg','img-Ciudad4.jpeg');

var nextimage = images.length; Slide(); var slide = setInterval(Slide, 7200);

function Slide() {
    var headerSlider = document.getElementById('testsub');
    nextimage++; if (nextimage >= images.length) {nextimage=0;}
    headerSlider.style.backgroundImage = "url('assets/images/"+images[nextimage]+"')";
    var reset = headerSlider.cloneNode(true); headerSlider.parentNode.replaceChild(reset, headerSlider);
    switch(nextimage) {
      case 0: reset.style.backgroundPosition = '38% 70%'; break;
      case 1: reset.style.backgroundPosition = '40% 60%'; break;
      case 2: reset.style.backgroundPosition = '45% 60%'; break;
      case 3: reset.style.backgroundPosition = '60% 50%'; break;
      case 4: reset.style.backgroundPosition = '50% 60%'; break;
      case 5: reset.style.backgroundPosition = '65% 100%'; break;
      case 6: reset.style.backgroundPosition = '45% 50%'; break;
      case 7: reset.style.backgroundPosition = '45% 100%'; break;
      case 8: reset.style.backgroundPosition = '45% 20%'; break;
    }
}
