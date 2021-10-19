import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {createPostSchema} from '../../../validation/schema';
import Spinner from '../../../components/Spinner';
import style from './createPost.module.scss';
import {EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import {convertToHTML} from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function index() {
	const {
		register,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(createPostSchema),
		mode: 'all',
	});
	const createPost = data => {
		console.log(data);
	};

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

	const createMarkup = html => (
		DOMPurify.sanitize(html) // Prevent xss
	);
	console.log(createMarkup(convertedContent).length);
	return (
		<div>
			<form className={style.form} onSubmit={handleSubmit(createPost)}>
				<h4>Create Post</h4>
				<div className={style.form__input}>
					<label htmlFor="postTitle">Post title</label>
					<input className={errors?.postTitle ? style.error : ''}
						type="text"
						id="postTitle"
						{...register('postTitle')}
						name="postTitle"
						placeholder="Enter post title"
					/>
					{errors?.postTitle
						? <span className="form-group__error-msg">
							{errors?.postTitle.message}
						</span>
						: null
					}
				</div>
				<div className={style.form__input}>
					<label htmlFor="description">Post description</label>
					<textarea
						className={errors?.description ? style.error : ''}
						id="description"
						{...register('description')}
						name="description"
						placeholder="Enter post description"
					/>
					{errors?.description
						? <span className="form-group__error-msg">
							{errors?.description.message}
						</span> : null
					}
				</div>
				<div className={style.form__input}>
					<label htmlFor="postBody">Post body</label>
					<textarea
						className={`${errors?.postBody ? style.error : ''}
                         ${style.form__hide}`}
						id="postBody"
						{...register('postBody')}
						name="postBody"
						value={createMarkup(convertedContent)}
						placeholder="Please write your post"
					/>

					<div>
						<Editor
							editorState={editorState}
							onEditorStateChange={handleEditorChange}
							wrapperClassName={`wrapper-class 
                            ${errors?.postBody ? 'wrapper-error' : ''}`}
							editorClassName="editor-class"
							toolbarClassName="toolbar-class"
						/>
						<div dangerouslySetInnerHTML
							={{__html:
                            createMarkup(convertedContent)}}></div>
						<div dangerouslySetInnerHTML={{__html:
                        createMarkup(convertedContent),
						}}>

						</div>
					</div>
					{errors?.postBody
						? <span className="form-group__error-msg">
							{errors?.postBody.message}
						</span> : null
					}
				</div>
				<div className={style.form__input}>
					<label htmlFor="postCategory">Post category</label>
					<select
						className={errors?.postCategory ? style.error : ''}
						id="postCategory"
						{...register('postCategory')}
						name="postCategory"
					>
						<option value="">null</option>
						<option value="no">No</option>
						<option value="no">No</option>
						<option value="no">No</option>
					</select>
					{errors?.postCategory
						? <span className="form-group__error-msg">
							{errors?.postCategory.message}
						</span>
						: null}
				</div>
				<div className={style.form__input}>
					<label htmlFor="postImage">Post image</label>
					<input
						className={errors?.postImage ? style.error : ''}
						type="file"
						id="postImage"
						{...register('postImage')}
						name="postImage"
						accept=".png,.jpg,.jpeg,.webp"

					/>
					{errors?.postImage
						? <span className="form-group__error-msg">
							{errors?.postImage.message}
						</span> : null
					}
				</div>
				<div>
					<button>
						<Spinner
							colorDark="hsl(240, 100%, 48%)"
							colorLight="hsl(240, 100%, 88%)"
						/>
                        Create post</button>
				</div>
			</form>
			<style>
				{`
				.wrapper-class {
					padding: 1rem;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                  }
                  .wrapper-error{
                    border: 1px solid red;
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
}
