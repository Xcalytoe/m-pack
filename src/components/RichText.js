import React, {useState} from 'react';
import {EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import {convertToHTML} from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const Richtext = () => {
	const [editorState, setEditorState] = useState(
		() => EditorState.createEmpty(),
	);
	const [convertedContent, setConvertedContent] = useState(null);
	const handleEditorChange = state => {
		setEditorState(state);
		convertContentToHTML();
	};

	const convertContentToHTML = () => {
		const currentContentAsHTML
		= convertToHTML(editorState.getCurrentContent());
		console.log(currentContentAsHTML);
		setConvertedContent(currentContentAsHTML);
	};

	const createMarkup = html => ({
		__html: DOMPurify.sanitize(html),
	});
	return (
		<div>
			<Editor
				editorState={editorState}
				onEditorStateChange={handleEditorChange}
				wrapperClassName="wrapper-class"
				editorClassName="editor-class"
				toolbarClassName="toolbar-class"
			/>
			<div className="preview" dangerouslySetInnerHTML={
				createMarkup(convertedContent)
			}>

			</div>
			<style>
				{`
				.wrapper-class {
					padding: 1rem;
					border: 1px solid #ccc;
				  }
				  .editor-class {
					background-color:hsl(240, 50%, 98%);
					padding: 1rem;
					border: 1px solid #ccc;
				  }
				  .toolbar-class {
					border: 1px solid #ccc;
				  }
				`}
			</style>
		</div>
	);
};

export default Richtext;
