import { FaStar } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
    console.log("mouse Enter: ", getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            className={index<=(hover||rating)? 'active' : 'inacive'}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={40}
          />
        );
      })}
    </div>
  );
}
