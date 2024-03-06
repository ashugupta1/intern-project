// components/ReviewPage.js

import { useState } from 'react';

const ReviewPage = () => {
  const [rating, setRating] = useState(0);
  const [rating1, setRating1] = useState(0);

  const [comment, setComment] = useState('');

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleRatingChange1 = (newRating1) => {
    setRating1(newRating1);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to submit review
  };

  return (
    <div>
      <h1>Leave your Review</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating"><h1>Safety</h1></label>
          <h5>Thank you for your valuable rating</h5>
          <div>
            {[...Array(5)].map((_, index) => (
              <span
                className='bg-yellow-50'
                key={index}
                onClick={() => handleRatingChange(index + 1)}
                style={{ cursor: 'pointer' }}
              >
                {index + 1 <= rating ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="rating"><h1>Communication</h1></label>
          <h5>Thank you for your valuable rating</h5>
          <div>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                onClick={() => handleRatingChange1(index + 1)}
                style={{ cursor: 'pointer' }}
              >
                {index + 1 <= rating1 ? '★' : '☆'}
              </span>
            ))}
          </div>
        </div>
        <div>
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewPage;
