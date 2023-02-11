import feedbackImage from "~/assets/illustration-thank-you.svg";

const CardFeedback = ({ rating }) => {
  return (
    <div className="card card-feedback">
      <img src={feedbackImage} alt="" className="card__img" />
      <div className="card__tag">
        <span>You selected {rating} out of 5</span>
      </div>
      <div className="card__thanks">
        <h1>Thank you!</h1>
      </div>
      <p className="card__body">
        We appreciate you taking the time to give a rating. If you ever need
        more support, dont' hesitate to get in touch!
      </p>
    </div>
  );
};
export default CardFeedback;
