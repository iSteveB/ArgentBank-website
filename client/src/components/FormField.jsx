import React from 'react';

const FormField = ({parentClassName, label, inputType, inputId, value, onChange, isDisabled = false, autocomplete}) => {
	return (
		<div className={parentClassName}>
			<label htmlFor={inputId}>{label}</label>
			<input
				type={inputType}
				id={inputId}
				value={value}
				onChange={onChange}
        disabled={isDisabled}
				autoComplete={autocomplete}
			/>
		</div>
	);
};

export default FormField;
