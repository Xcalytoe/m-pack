/* eslint-disable react/prop-types */
import React, {useState} from 'react';

// Export const FormInput = ({label, name, ...field }) => {

export const FormInput = ({label, name, errors, ...field}) => {
	const [formState, setFormState] = useState({});
	console.log(formState);

	// Handle onChange
	const onChange = e => {
		const {name} = e.target;
		const {value} = e.target;
		setFormState({...formState, [name]: value});
	};

	return (
	// <div>
	//     <label htmlFor={name}>{label}</label>
	//     <input
	//         id={name}
	//         {...field}/>

	// </div>

		<div className="form-group ">
			<div className="form-input">
				<input
					className={`${errors?.firstName ? 'error' : ''} ${
						formState?.firstName ? 'focused' : ''
					}`}
					name={name}
					id={name}
					// {...register("firstName")}
					// ref={ref}

					{...field}
					onChange={onChange}
				/>
				<label htmlFor="firstName">{label}</label>
			</div>
			{errors?.firstName ? (
				<span className="form-group__error-msg">
					{errors?.firstName.message}
				</span>
			) : null}
		</div>
	);
};
