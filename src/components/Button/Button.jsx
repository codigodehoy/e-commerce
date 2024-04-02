import "./Button.css";

function Button({ type = "button", children, onClick, hasIcon = false }) {
  const buttonType = hasIcon ? "ButtonIcon" : "Button";

  return (
    <button type={type} onClick={onClick} className={buttonType}>
      {children}
    </button>
  );
}

export { Button };
