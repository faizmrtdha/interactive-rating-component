const ButtonRating = ({ children, ...props }) => {
  return (
    <button className="btn btn-rating" type="button" {...props}>
      {children}
    </button>
  );
};
export default ButtonRating;
