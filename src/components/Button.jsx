/**
 * Reusable button component with optional icon and variant styling.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.text - Text content inside the button
 * @param {function} [props.onClick] - Optional click handler
 * @param {string} [props.type='button'] - Button type (e.g. 'button', 'submit')
 * @param {'primary'|'secondary'} [props.variant='primary'] - Visual style variant
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} [props.icon] - Optional icon element rendered next to the text
 *
 * @returns {JSX.Element} Rendered button component
 */

import PropTypes from 'prop-types';

function Button({
  text,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  icon,
}) {
  const baseStyles =
    'rounded text-base font-medium font-inherit transition duration-100 cursor-pointer shadow-md hover:scale-101';

  const variantStyles = {
    primary: 'bg-[#046604] hover:bg-[#024002] px-5 py-1.5 text-white w-full',
    secondary: '',
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {text}
      {icon}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  icon: PropTypes.element,
};

export default Button;
