const Button = ({ className = "", children, type = "button", ...props }) => {
  return (
    <button className={`btn btn-submit ${className}`} type={type} {...props}>
      {children}
    </button>
  );
};
export default Button;
