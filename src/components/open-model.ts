import fetchContent from '../services/fetch-content';
import { updateEditorContent } from './code-editor';

export function openModal(): void {
    function showModal(): void {
        const urlModal = document.getElementById('urlModal') as HTMLDivElement;
        if (urlModal) {
            urlModal.style.display = 'flex';
        }
    }

    function hideModal(): void {
        const urlModal = document.getElementById('urlModal') as HTMLDivElement;
        if (urlModal) {
            urlModal.style.display = 'none';
        }
    }

    async function handleUrlSubmission(): Promise<void> {
        const urlInput = document.getElementById('urlInput') as HTMLInputElement;
        if (urlInput) {
            const url = urlInput.value;
            if (url) {
                try {
                    const content = await fetchContent(url);
                    console.log(content); // Log the content to the console
                    updateEditorContent(content); // Update the CodeMirror editor
                    hideModal();
                } catch (error) {
                    console.error('There was a problem with fetching the content:', error);
                    alert('There was a problem fetching the content. Check the console for details.');
                }
            } else {
                alert('Please enter a URL.');
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        const openButton = document.getElementById('openButton');
        const closeButton = document.getElementById('closeButton');
        const submitButton = document.getElementById('submitButton');

        if (openButton) {
            openButton.addEventListener('click', (event) => {
                event.preventDefault();
                showModal();
            });
        }

        if (closeButton) {
            closeButton.addEventListener('click', () => {
                hideModal();
            });
        }

        if (submitButton) {
            submitButton.addEventListener('click', () => {
                handleUrlSubmission();
            });
        }
    });
}
