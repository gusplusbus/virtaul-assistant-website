import {EditorState} from "@codemirror/state";
import {javascript} from "@codemirror/lang-javascript";
import {oneDark} from "@codemirror/theme-one-dark";
import {EditorView} from "@codemirror/view";

function codeEditor() {
    document.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('code');
        if (container) {
            const editorState = EditorState.create({
                doc: "console.log('Hello, world!');",
                extensions: [javascript(), oneDark] // Removed the empty comma
            });

            new EditorView({
                state: editorState,
                parent: container
            });
        }
    });
}


export default codeEditor;