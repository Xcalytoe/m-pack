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
