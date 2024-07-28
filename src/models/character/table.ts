export function drawTable(ctx: CanvasRenderingContext2D) {
    // Draw table
    ctx.beginPath();
    ctx.rect(100, 380, 200, 20); // Table top
    ctx.fillStyle = '#8b4513'; // Table color (brown)
    ctx.fill();
    ctx.stroke(); // Outline of the table

    // Draw table legs
    ctx.beginPath();
    ctx.rect(100, 400, 20, 60); // Left leg
    ctx.rect(280, 400, 20, 60); // Right leg
    ctx.fillStyle = '#8b4513'; // Table leg color (brown)
    ctx.fill();
    ctx.stroke(); // Outline of the table legs
}
