import { useState } from "react";
import CardRating from "~/components/card/CardRating";
import CardFeedback from "~/components/card/CardFeedback";

function App() {
  const [rating, setRating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  console.log(rating);

  return (
    <>
      <main className="App">
        <form onSubmit={handleSubmit}>
          {isSubmitted && rating ? (
            <CardFeedback rating={rating} />
          ) : (
            <CardRating setRating={setRating} />
          )}
        </form>
      </main>
      <footer>
        Challenge by.{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/faizmrtdha">faizmrtdha</a>.
      </footer>
    </>
  );
}

export default App;
