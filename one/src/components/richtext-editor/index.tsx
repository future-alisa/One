import { useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Slate, Editable, withReact } from "slate-react";


const initialValue = [
    {
        type: 'paragraph',
        children: [{ text: '' }],
    },
]
/**
 * 富文本编辑器
 */
export default function RichTextEditor() {
    const [editor] = useState(() => withReact(withHistory(createEditor())));

    return (
        <Slate editor={editor} initialValue={initialValue}>
            <Editable />
        </Slate>
    )
}