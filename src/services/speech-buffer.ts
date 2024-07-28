export class SpeechBuffer {
    private buffer: number[] = [];
    private readonly bufferSize: number;
    private readonly threshold: number;

    private readonly volumeThreshold: number = 5; // Volume threshold for closing the mouth
    private previousVolume: number = 0;

    constructor(bufferSize: number, threshold: number) {
        this.bufferSize = bufferSize;
        this.threshold = threshold;
    }

    public addVolume(volume: number): void {
        if (this.buffer.length >= this.bufferSize) {
            this.buffer.shift(); // Remove oldest volume data
        }
        this.buffer.push(volume);

        this.previousVolume = this.buffer[this.buffer.length - 2] || volume; // Update previous volume
    }

    public getSmoothedVolume(): number {
        if (this.buffer.length === 0) return 0;
        const sum = this.buffer.reduce((acc, val) => acc + val, 0);
        return sum / this.buffer.length;
    }

    public shouldCloseMouth(currentVolume: number): boolean {
        // Check if current volume is below the volume threshold
        if (currentVolume < this.volumeThreshold) {
            return true;
        }
        // If not, check if current volume is lower than the previous volume
        return currentVolume < this.previousVolume;
    }

    public getSmoothedVolumeAdjusted(): number {
        return this.getSmoothedVolume();
    }
}
