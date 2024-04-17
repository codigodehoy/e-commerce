import "./Button.css";

function Button({
  type = "button",
  children,
  onClick,
  hasIcon = false,
  styles,
}) {
  const buttonType = hasIcon ? "ButtonIcon" : "Button";

  return (
    <button type={type} onClick={onClick} className={buttonType} style={styles}>
      {children}
    </button>
  );
}

export { Button };
