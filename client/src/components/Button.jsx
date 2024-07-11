const Button = ({ value, type, onClick, className }) => (
	<button type={type} className={className} onClick={onClick}>
		{value}
	</button>
);

export default Button;
