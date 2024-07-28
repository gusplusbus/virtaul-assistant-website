export function drawShoes(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(160, 460, 20, 0, 2 * Math.PI); // Left shoe
    ctx.arc(240, 460, 20, 0, 2 * Math.PI); // Right shoe
    ctx.fillStyle = '#8B4513';
    ctx.fill();
    ctx.stroke(); // Outline of the shoes
}
