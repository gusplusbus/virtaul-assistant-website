export function drawNose(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(200, 200); // Nose starting point
    ctx.lineTo(190, 230); // Left side of the nose
    ctx.lineTo(210, 230); // Right side of the nose
    ctx.closePath();
    ctx.fillStyle = '#fddbb0'; // Nose color
    ctx.fill();
    ctx.stroke(); // Outline of the nose
}
