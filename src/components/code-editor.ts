import { EditorState, StateField } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { EditorView } from "@codemirror/view";

let editorView: EditorView | null = null; // To store the EditorView instance
let editorState: EditorState | null = null; // To store the EditorState

export function codeEditor(): void {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('code');
        if (container) {
            editorState = EditorState.create({
                doc: "console.log('Hello, world!');",
                extensions: [javascript(), oneDark]
            });

            editorView = new EditorView({
                state: editorState,
                parent: container
            });
        }
    });
}

export function updateEditorContent(content: string): void {
    if (editorView && editorState) {
        const newState = editorState.update({
            changes: { from: 0, to: editorState.doc.length, insert: content }
        });
        editorView.dispatch(newState);
    }
}
