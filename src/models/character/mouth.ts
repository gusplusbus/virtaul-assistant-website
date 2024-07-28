const drawMouth = {
    open: (ctx: CanvasRenderingContext2D) => {
        // Draw the open mouth as a half-circle
        ctx.beginPath();
        ctx.arc(200, 250, 40, 0, Math.PI);
        ctx.fillStyle = '#FFFFFF'; // Mouth fill color (white)
        ctx.fill(); // Fill the half-circle with white
        ctx.strokeStyle = '#000000'; // Mouth outline color
        ctx.stroke(); // Draw the outline of the half-circle

        // Draw the top lip line
        ctx.beginPath();
        ctx.moveTo(160, 250); // Start point (left side of the top lip line)
        ctx.lineTo(240, 250); // End point (right side of the top lip line)
        ctx.stroke(); // Draw the top lip line
    },
    close: (ctx: CanvasRenderingContext2D) => {
        // Draw the closed mouth as an arc
        ctx.beginPath();
        ctx.arc(200, 250, 40, 0, Math.PI); // Mouth (arc)
        ctx.strokeStyle = '#000000'; // Mouth color
        ctx.stroke();
    },
    clear: (ctx: CanvasRenderingContext2D) => {
        // Clear the mouth area by filling it with the background color
        ctx.beginPath();
        ctx.arc(200, 250, 40, 0, Math.PI);
        ctx.fillStyle = '#fddbb0'; // Skin color
        ctx.fill(); // Fill the half-circle area to clear the mouth
        // Clear the top lip line by drawing over it with the skin color
        ctx.beginPath();
        ctx.moveTo(160, 250); // Start point (left side of the top lip line)
        ctx.lineTo(240, 250); // End point (right side of the top lip line)
        ctx.strokeStyle = '#fddbb0'; // Skin color
        ctx.lineWidth = 2; // Ensure line width matches the original line
        ctx.stroke(); // Draw over the top lip line
    }
};

export { drawMouth };
