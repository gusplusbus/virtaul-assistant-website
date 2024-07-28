export function drawFace(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(200, 200, 100, 0, 2 * Math.PI); // Face (circle)
    ctx.fillStyle = '#fddbb0'; // Skin color
    ctx.fill();
    ctx.stroke(); // Outline of the face
}
