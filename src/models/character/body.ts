export function drawBody(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.ellipse(200, 340, 80, 120, 0, 0, 2 * Math.PI); // Body (oval)
    ctx.fillStyle = '#add8e6'; // Body color (light blue)
    ctx.fill();
    ctx.stroke(); // Outline of the body
}
