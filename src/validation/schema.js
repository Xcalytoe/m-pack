import * as yup from 'yup';

export const regSchema = yup
	.object()
	.shape({
		firstName: yup.string().required('Please enter firstname'),
		lastName: yup.string().required('Please enter your lastname'),
		email: yup
			.string()
			.email('Must be a valid email')
			.required('Please enter your email'),
		password: yup
			.string()
			.min(6, 'Password must be at least 6 characters')
			.matches(/^(?=.*[A-Z])/, 'Must contain one uppercase')
		//   .matches(/^(?=.*[!@#\$%\^&\*])/,
		// "Must contain one unique character")
			.matches(/^(?=.*[!@#$%^&\\*])/, 'Must contain one unique character')
			.required(),
		// DateOfBirth : yup.date().nullable()
		// .transform((curr, orig) => orig === '' ? null : curr)
		// .required('Please enter date of birth')
	})
	.required();

export const loginSchema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email('Must be a valid email')
			.required('Please enter your email'),
		loginPass: yup.string().required('Field cannot be empty'),
	})
	.required();

export const forgotPassSchema = yup
	.object()
	.shape({
		email: yup
			.string()
			.email('Must be a valid email')
			.required('Please enter your email'),
	})
	.required();

export const createPostSchema = yup
	.object()
	.shape({
		postTitle: yup
			.string()
			.required('Field cannot be empty'),
		description: yup
			.string()
			.min(80, 'Description must be at least 80 characters')
			.required('Field cannot be empty'),
		postBody: yup
			.string()
			// .min(1, 'Post must be at least 130 characters')
			.required('Field cannot be empty'),
		postCategory: yup
			.string()
			.required('Field must be selected'),
		postImage: yup
			.mixed()
			.test('name',
				'Image is required',
				file => file.length !== 0)
			.test('fileSize',
				'File size too large, max file size is 1 Mb',
				file => file.length !== 0 && file[0].size <= 1100000),

	})
	.required();
