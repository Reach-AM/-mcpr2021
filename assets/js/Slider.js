document.getElementById('testsub').style.backgroundImage = "url('assets/images/img-Zocalo.JPEG')";
document.getElementById('testsub').style.backgroundPosition = '38% 70%';

var images = new Array('img-Zocalo.jpeg','img-Ciudad.jpeg','img-BellasArtesTarde.jpeg',
                      'img-Ciudad2.jpeg','img-ITAM.jpeg','img-Angel.jpeg',
                      'img-Ciudad3.jpeg','img-Diana.jpeg','img-Ciudad4.jpeg');
var nextimage = 0;
var myVar = setInterval(Slide, 7200);

function Slide() {
    nextimage++;
    //images.length
    if (nextimage >= images.length) nextimage=0;
    document.getElementById('testsub').style.backgroundImage = "url('assets/images/"+images[nextimage]+"')";
    var elm = document.getElementById('testsub')
    var newone = elm.cloneNode(true);
    elm.parentNode.replaceChild(newone, elm);
    //-webkit-animation-name: fade;
    //-webkit-animation-duration: 1s;
    //animation-name: fade;
    //animation-duration: 1s;
    switch(nextimage) {
      case 0:
        document.getElementById('testsub').style.backgroundPosition = '38% 70%';
        break;
      case 1:
        document.getElementById('testsub').style.backgroundPosition = '40% 60%';
        break;
      case 2:
        document.getElementById('testsub').style.backgroundPosition = '45% 60%';
        break;
      case 3:
        document.getElementById('testsub').style.backgroundPosition = '60% 50%';
        break;
      case 4:
        document.getElementById('testsub').style.backgroundPosition = '50% 60%';
        break;
      case 5:
        document.getElementById('testsub').style.backgroundPosition = '65% 100%';
        break;
      case 6:
        document.getElementById('testsub').style.backgroundPosition = '45% 50%';
        break;
      case 7:
        document.getElementById('testsub').style.backgroundPosition = '45% 100%';
        break;
      case 8:
        document.getElementById('testsub').style.backgroundPosition = '45% 20%';
        break;
    }
}
