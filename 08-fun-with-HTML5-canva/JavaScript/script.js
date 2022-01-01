const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

ctx.strokeStyle = 'pink';
ctx.lineWidth = 60;
ctx.lineCap = 'round';

let isDrawing = false;
let x = 0, y = 0, hue = 0;
function draw(e) {
    if (!isDrawing) return;
    // ctx.strokeStyle = `rgb(${Math.random() * 250}, ${Math.random() * 250}, ${Math.random() * 250})`;
    ctx.strokeStyle = `hsl(${hue}, 100% , 50%)`;
    hue++;
    // ctx.lineWidth = Math.random() * 200;
    ctx.beginPath();

    ctx.moveTo(x, y);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [x, y] = [e.offsetX, e.offsetY];
}


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [x, y] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mouseup', () => {isDrawing = false});
canvas.addEventListener('mouseout', () => isDrawing = false);