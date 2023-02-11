import starIcon from "~/assets/icon-star.svg";
import Button from "~/components/button/Button";
import ButtonRating from "../button/ButtonRating";

const CardRating = ({ setRating }) => {
  return (
    <div className="card">
      <div className="flex-group">
        <img className="card__icon" src={starIcon} alt="Star Icon" />
        <div className="card__header">
          <h1>How did we do?</h1>
        </div>
        <p className="card__body">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="card__rate">
          <ButtonRating onClick={() => setRating(1)}>1</ButtonRating>
          <ButtonRating onClick={() => setRating(2)}>2</ButtonRating>
          <ButtonRating onClick={() => setRating(3)}>3</ButtonRating>
          <ButtonRating onClick={() => setRating(4)}>4</ButtonRating>
          <ButtonRating onClick={() => setRating(5)}>5</ButtonRating>
        </div>
      </div>
      <Button className="card__btn" type="submit">
        Submit
      </Button>
    </div>
  );
};
export default CardRating;
