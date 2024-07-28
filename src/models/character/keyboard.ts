export function drawKeyboard(ctx: CanvasRenderingContext2D) {
    // Draw keyboard
    ctx.beginPath();
    ctx.rect(110, 370, 180, 10); // Keyboard top
    ctx.fillStyle = '#000000'; // Keyboard color (black)
    ctx.fill();
    ctx.stroke(); // Outline of the keyboard

    // Draw keyboard keys
    const keyWidth = 20;
    const keyHeight = 10;
    ctx.fillStyle = '#ffffff'; // Key color (white)
    for (let x = 0; x < 180; x += keyWidth) {
        ctx.beginPath();
        ctx.rect(110 + x, 370, keyWidth, keyHeight); // Adjusted y-coordinate
        ctx.fill();
        ctx.stroke();
    }
}
