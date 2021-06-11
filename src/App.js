import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./App.css";

const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(accessKey);
    fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
      .then((res) => res.json())
      .then(setImages);
  }, []);

  if (!accessKey) {
    return (
      <a href='https://unsplash.com/developers' className='error'>
        Required: Get Your Unsplash API Key First
      </a>
    );
  }

  return (
    <div className='app'>
      <h1>Unsplash Image Gallery!</h1>

      <form>
        <input type='text' placeholder='Search Unsplash...' />
        <button>Search</button>
      </form>
      <InfiniteScroll
        dataLength={images.length}
        next={() => setPage((page) => page + 1)}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className='image-grid'>
          {images.map((image, index) => (
            <div className='image' key={index}>
              <img src={image.urls.regular} alt={image.alt_description} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
