// src/fetchService.ts
import axios from 'axios';

async function fetchContent(url: string): Promise<string> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching the URL:', error);
        throw error;
    }
}

export default fetchContent;
