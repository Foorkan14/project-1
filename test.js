/////////////this should change bgc//////////////


window.onload = function() {
    setInterval(changeColor, 2000);
  }

  function changeColor() {
  var body = document.getElementsByTagName('body');
    body.style.backgroundColor = body.style.backgroundColor == 'black' ? 'red' : 'black';
  };
