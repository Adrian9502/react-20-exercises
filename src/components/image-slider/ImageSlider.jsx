import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 5, page = 1 }) {
  // State to store images fetched from the API
  const [images, setImages] = useState([]);

  // State to keep track of the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // State to store any error messages
  const [errorMsg, setErrorMsg] = useState(null);

  // State to indicate loading status
  const [loading, setLoading] = useState(false);

  // Function to fetch images from the given URL
  async function fetchImages(getUrl) {
    setLoading(true); // Set loading to true when starting to fetch data
    try {
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data); // Update images state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      }
    } catch (e) {
      setErrorMsg(e.message); // Set error message if there's an issue
      setLoading(false); // Set loading to false if an error occurs
    }
  }

  // Function to handle moving to the previous slide
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  // Function to handle moving to the next slide
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  // useEffect hook to fetch images when the component mounts or when URL changes
  useEffect(() => {
    if (url) {
      fetchImages(url);
    }
  }, [url]);

  // Display a loading message if data is being fetched
  if (loading) {
    return <h1>Fetching data from the url...</h1>;
  }

  // Display an error message if there was an issue fetching data
  if (errorMsg) {
    return <h3>Error: {errorMsg}</h3>;
  }

  return (
    <div className="wrapper">
      <h1 className="text-primary">Image Slider</h1>
      {/* Button to move to the previous slide */}
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />

      {/* Display images */}
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
              key={imageItem.id}
              alt={imageItem.download_url}
            />
          ))
        : null}

      {/* Button to move to the next slide */}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />

      {/* Indicators for each slide */}
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
