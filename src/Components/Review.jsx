
import service from '@/appwrite/config';
import { Query } from 'appwrite';
import { useCallback } from 'react';
import React, { useState, useEffect } from 'react';

// Simulated API call
const getReviews = async () => {
  return [
    { id: 1, userName: "Alice Johnson", Rating: 5, date: "2023-06-01", comment: "Excellent service! Highly recommended." },
    { id: 2, userName: "Bob Smith", Rating: 4, date: "2023-05-28", comment: "Great experience overall. Would use again." },
    { id: 3, userName: "Carol White", Rating: 3, date: "2023-05-25", comment: "Decent service, but room for improvement." },
  ];
};

const StarRating = ({ Rating, setRating = null }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating && setRating(star)}
          className={`cursor-pointer text-2xl ${star <= Rating ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ReviewCard = ({ review }) => {
  return (
    <div className="border border-gray-300 rounded-lg mb-4">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-300 rounded-full mx-3 flex items-center justify-center font-bold">
          {review.userName.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold m-2">{review.userName}</h3>
          <div className="flex items-center">
            <StarRating Rating={review.Rating} />
            <span className="ml-2 text-sm text-gray-600">
              {new Date(review.Date).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-800 m-3">{review.comment}</p>
    </div>
  );
};

const ReviewList = ({ reviews }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const currentReviews = reviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  return (
    <div>
      {currentReviews.map((review) => (
        <ReviewCard key={review.Id} review={review} />
      ))}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`py-2 px-4 bg-gray-200 rounded-lg ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <span>{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`py-2 px-4 bg-gray-200 rounded-lg ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const ReviewForm = ({ onSubmit }) => {
  const [Name, setName] = useState('');
  const [Rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ Name, Rating, comment });
    setName('');
    setRating(0);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
      <div>
        <label htmlFor="Name" className="block mb-1">Your Name</label>
        <input
          type="text"
          id="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <div>
        <label className="block mb-1">Rating</label>
        <StarRating Rating={Rating} setRating={setRating} />
      </div>
      <div>
        <label htmlFor="comment" className="block mb-1">Your Review</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-lg">
        Submit Review
      </button>
    </form>
  );
};

const ReviewStats = ({ reviews }) => {
  const averageRating = reviews.reduce((acc, review) => acc + review.Rating, 0) / reviews.length;
  const RatingCounts = reviews.reduce((acc, review) => {
    acc[review.Rating] = (acc[review.Rating] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Review Statistics</h2>
      <div className="text-3xl font-bold mb-4">
        {averageRating.toFixed(1)} out of 5
      </div>
      {[5, 4, 3, 2, 1].map((Rating) => (
        <div key={Rating} className="flex items-center mb-2">
          <span className="w-4">{Rating}</span>
          <span className="text-yellow-400 ml-1 mr-2">★</span>
          <div className="flex-1 bg-gray-200 h-2 rounded-lg">
            <div
              className="bg-yellow-400 h-full rounded-lg"
              style={{ width: `${((RatingCounts[Rating] || 0) / reviews.length) * 100}%` }}
            />
          </div>
          <span className="ml-2 text-sm">{RatingCounts[Rating] || 0}</span>
        </div>
      ))}
    </div>
  );
};

export default function Review({vendorId}) {
  const [reviews, setReviews] = useState([]);
  const [activeTab, setActiveTab] = useState('reviews');

  const getReviewsData = useCallback(async ()=>{
    if (!vendorId) {
      console.error("vendorId is missing or invalid.");
      return;
    }
    try {
      const response = await service.getReview([Query.equal('vendorId', vendorId)]);
      setReviews(response.documents.reverse())
    } catch (error) {
      console.error(error)
    }
  },[vendorId])

  useEffect(() => {
    getReviewsData();
  }, [getReviewsData]);

  useEffect(() => {
    console.log(reviews.length)
    if(reviews.length>0)
    {
      console.log(reviews)
    }
  }, [reviews]);

  const isoDate = new Date().toISOString().split('T')[0];
  const [year, month, day] = isoDate.split('-');
  const formattedDate = `${day}-${month}-${year}`;

  const handleSubmitReview = async(newReview) => {
    try{
       await service.createReview(
        reviews.length+1,
        newReview.Name,
        newReview.Rating,
        formattedDate,
        newReview.comment,
        vendorId 
      )
    }
    catch(error)
    {
      console.error(error);
      
    }
    console.log( new Date().toISOString().split('T')[0],)
    getReviewsData();
    setActiveTab('reviews');
  };
  return (
    <div className="container">
      <h1 className="header font-bold text-2xl m-3">Customer Reviews</h1>
      <div className="grid">
        <div>
          <div className="button-group text-center">
            <button
              onClick={() => setActiveTab('reviews')}
              className={`button ${activeTab === 'reviews' ? 'bg-blue-500' : 'bg-white' } p-4 font-semibold
              rounded-lg my-2 ${activeTab === 'reviews' ? 'text-white' : 'text-black' }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setActiveTab('write')}
              className={`button ${activeTab === 'write' ? 'bg-blue-500' : 'bg-white' } p-4 font-semibold
              rounded-lg my-2 ${activeTab === 'write' ? 'text-white' : 'text-black' }`}
            >
              Write a Review
            </button>
          </div>

        <div className='flex justify-center items-center max-[600px]:flex-col'>
          <div className=' w-2/4 m-4 max-[600px]:w-full'>
          {activeTab === 'reviews' ? (
            <ReviewList reviews={reviews} />
          ) : (
            <div className="border border-gray-300 w-full rounded-lg p-4">
              <h2 className="mb-4 font-semibold">Leave a Review</h2>
              <ReviewForm onSubmit={handleSubmitReview} />
            </div>
          )}
          </div>
        <div className='m-4 w-1/3 max-[450px]:w-full max-[600px]:w-2/3'>
          <ReviewStats reviews={reviews} />
        </div>
`      </div>

        </div>
      </div>
    </div>
  );
}
