// canvasSetup.js

import { drawBody } from '../models/character/body';
import { drawShoes } from '../models/character/shoes';
import { drawFace } from '../models/character/face';
import { drawHair } from '../models/character/hair';
import { drawEyes } from '../models/character/eyes';
import { drawNose } from '../models/character/nose';
import { drawHands } from '../models/character/hands';
import { drawTable } from '../models/character/table';
import { drawKeyboard } from '../models/character/keyboard';
import {AnimateMouthEvent} from "../events/animate-mouth.event";

export function virtualTeacher() {
    const canvas = document.getElementById('assistantCanvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('Could not get 2D context');
    }

    drawBody(ctx);
    drawShoes(ctx);
    drawFace(ctx);
    drawHair(ctx);
    drawEyes(ctx);
    drawNose(ctx);
    // drawMouth(ctx);
    drawHands(ctx);
    drawTable(ctx);
    drawKeyboard(ctx);
    const animateMouthEvent = new AnimateMouthEvent();
    animateMouthEvent.setContext(ctx);
}
