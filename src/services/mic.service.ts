import { Observable, Subject } from 'rxjs';

export class MicService {
    private audioContext: AudioContext;
    private analyser: AnalyserNode;
    private microphone!: MediaStreamAudioSourceNode; // Definite assignment assertion
    private dataArray: Uint8Array;
    private volumeSubject = new Subject<number>();
    private lastUpdate = 0;
    private readonly fpsInterval = 1000 / 60; // 60 FPS interval in milliseconds

    constructor() {
        this.audioContext = new AudioContext();
        this.analyser = this.audioContext.createAnalyser();
        this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    }

    async initMicrophone(): Promise<void> {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            this.microphone = this.audioContext.createMediaStreamSource(stream);
            this.microphone.connect(this.analyser);
            this.analyser.fftSize = 2048;
            this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);

            this.startMonitoring();
        } catch (error) {
            console.error('Error accessing microphone', error);
        }
    }

    private startMonitoring(): void {
        const getVolume = (timestamp: number) => {
            if (this.microphone) {
                // Check if enough time has passed to update the volume
                if (timestamp - this.lastUpdate >= this.fpsInterval) {
                    this.analyser.getByteFrequencyData(this.dataArray);
                    const average = this.getAverageVolume();
                    this.volumeSubject.next(average);
                    this.lastUpdate = timestamp;
                }
                requestAnimationFrame(getVolume);
            }
        };

        requestAnimationFrame(getVolume);
    }

    private getAverageVolume(): number {
        const sum = this.dataArray.reduce((a, b) => a + b, 0);
        return sum / this.dataArray.length;
    }

    getVolumeData(): Observable<number> {
        return this.volumeSubject.asObservable();
    }
}
