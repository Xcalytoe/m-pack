import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {createPostSchema} from '../../../validation/schema';
import Spinner from '../../../components/Spinner';
import style from './createPost.module.scss';
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
						className={errors?.postBody ? style.error : ''}
						id="postBody"
						{...register('postBody')}
						name="postBody"
						placeholder="Please write your post"
					/>
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
		</div>
	);
}
