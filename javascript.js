

function getImg(){
    var url1=document.getElementById('first').value;
    var url2=document.getElementById('second').value;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    var img2 = new Image();
    img.addEventListener('load', function() {
  // execute drawImage statements here
    ctx.drawImage(img, 0, 0,512,512 * 229/394);
    ctx.drawImage(img2, 0, 0);
}, false);
    img.src=url1;
    img2.src=url2;
};