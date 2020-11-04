function moveBox(e) {
    // console.log(e);
    var box = document.getElementsByClassName('box')[0];

    // box.setAttribute('style', 'position: absolute; left: 189px; top: 48px;')

    box.style.position = 'absolute';
    box.style.left = e.x + 'px';
    box.style.top = e.y + 'px';

    //box.styleText = 'position: absolute; left:' + e.x + 'px; top: 48px;'

    console.log("X " + e.x)
    console.log("Y " + e.y)
}


var color;

function setColor(e) {
    color = e.target.value;
}

function tryPaint(e) {
    console.log("X " + e.x + " Y " + e.y);

    var canvas = document.getElementsByClassName('paint_canvas')[0]; // e.target;

    //var code = `<div class="dot" style=" left: ${e.x}px; top: ${ e.y }px; "> </div>`;

    var d = document.createElement('div');
    d.className = 'dot';
    d.style.cssText = `left: ${e.x}px; top: ${ e.y }px;`;
    d.style.backgroundColor = color;

    canvas.appendChild(d);


}