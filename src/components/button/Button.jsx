import './Button.css';

export default function Button(props) {
  return (
    <>
      <button
        className={
          props.type === 'reset' || props.type === 'submit'
            ? 'reset-button'
            : null
        }
        type={props.type}
        onClick={props.handleClick}
        disabled={props.disabled}
      >
        {/* Met props.children kun je hier als button text schrijven: Reset, +, -, etc.: */}
        {props.children}
      </button>
    </>
  );
}
