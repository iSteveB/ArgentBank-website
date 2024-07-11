import React from 'react';

const FormField = ({parentClassName, label, inputType, inputId, value, onChange, isDisabled = false}) => {
	return (
		<div className={parentClassName}>
			<label htmlFor={inputId}>{label}</label>
			<input
				type={inputType}
				id={inputId}
				value={value}
				onChange={onChange}
        disabled={isDisabled}
			/>
		</div>
	);
};

export default FormField;
