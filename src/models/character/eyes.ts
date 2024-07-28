export function drawEyes(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(170, 180, 15, 0, 2 * Math.PI); // Left eye
    ctx.arc(230, 180, 15, 0, 2 * Math.PI); // Right eye
    ctx.fillStyle = '#ffffff'; // White of the eyes
    ctx.fill();
    ctx.stroke(); // Outline of the eyes

    ctx.beginPath();
    ctx.arc(170, 180, 7, 0, 2 * Math.PI); // Left eye pupil
    ctx.arc(230, 180, 7, 0, 2 * Math.PI); // Right eye pupil
    ctx.fillStyle = '#000000'; // Pupil color
    ctx.fill();
}
