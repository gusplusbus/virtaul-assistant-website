export function drawHands(ctx: CanvasRenderingContext2D) {
    const handRadius = 15; // Radius for rounded hand and fingers
    const fingerRadius = 7; // Radius for fingers

    // Draw left hand base
    ctx.beginPath();
    ctx.arc(140, 375, handRadius, 0, 2 * Math.PI); // Left hand base
    ctx.fillStyle = '#fddbb0'; // Hand color (skin tone)
    ctx.fill();
    ctx.stroke(); // Outline of the hand

    // Draw left hand fingers
    const leftFingers = [
        { x: 125, y: 370 }, // Adjusted positions
        { x: 135, y: 370 },
        { x: 145, y: 370 }
    ];
    ctx.fillStyle = '#fddbb0'; // Finger color (skin tone)
    leftFingers.forEach(finger => {
        ctx.beginPath();
        ctx.arc(finger.x, finger.y, fingerRadius, 0, 2 * Math.PI); // Left hand fingers
        ctx.fill();
        ctx.stroke();
    });

    // Draw right hand base
    ctx.beginPath();
    ctx.arc(260, 375, handRadius, 0, 2 * Math.PI); // Right hand base
    ctx.fillStyle = '#fddbb0'; // Hand color (skin tone)
    ctx.fill();
    ctx.stroke(); // Outline of the hand

    // Draw right hand fingers
    const rightFingers = [
        { x: 245, y: 370 }, // Adjusted positions
        { x: 255, y: 370 },
        { x: 265, y: 370 }
    ];
    ctx.fillStyle = '#fddbb0'; // Finger color (skin tone)
    rightFingers.forEach(finger => {
        ctx.beginPath();
        ctx.arc(finger.x, finger.y, fingerRadius, 0, 2 * Math.PI); // Right hand fingers
        ctx.fill();
        ctx.stroke();
    });
}
