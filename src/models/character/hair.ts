export function drawHair(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(200, 130, 100, Math.PI, 2 * Math.PI); // Hair (semi-circle)
    ctx.fillStyle = '#4a2c2a'; // Hair color
    ctx.fill();
    ctx.stroke(); // Outline of the hair
}
