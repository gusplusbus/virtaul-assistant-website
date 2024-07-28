import { MicService } from '../services/mic.service';
import { drawMouth } from '../models/character/mouth';
import { SpeechBuffer } from "../services/speech-buffer";

export class AnimateMouthEvent {
    private micService: MicService;
    private ctx: CanvasRenderingContext2D | null = null;
    private speechBuffer: SpeechBuffer;
    private readonly silenceThreshold: number = 0.5;

    constructor() {
        this.micService = new MicService();
        this.speechBuffer = new SpeechBuffer(30, this.silenceThreshold); // Buffer size and threshold
        this.initialize();
    }

    private async initialize(): Promise<void> {
        await this.micService.initMicrophone();
        this.setupVolumeHandler();
    }

    private setupVolumeHandler(): void {
        this.micService.getVolumeData().subscribe(volume => {
            this.speechBuffer.addVolume(volume);
            if (this.ctx) {
                this.renderMouth(this.ctx, volume);
            }
        });
    }

    public setContext(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    private renderMouth(ctx: CanvasRenderingContext2D, currentVolume: number) {
        console.log(currentVolume);
        drawMouth.close(ctx)

        if (this.speechBuffer.shouldCloseMouth(currentVolume)) {
            drawMouth.clear(ctx);
        } else {
            drawMouth.open(ctx);
        }
    }
}

// Create an instance to initialize the setup
const animateMouthEvent = new AnimateMouthEvent();
