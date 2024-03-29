import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = ({ id, cover_img, title, author, edition_count, first_publish_year }) => {
  // Check if author is an array and has elements; if not, provide a default value
  const authorNames = Array.isArray(author) ? author.join(", ") : "Unknown";

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
      <Link to={`/book/${id}`}>
          <img src={cover_img} alt="cover" />
        </Link>
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${id}`}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{authorNames}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{first_publish_year}</span>
        </div>
      </div>
    </div>
  );
};

export default Book;
