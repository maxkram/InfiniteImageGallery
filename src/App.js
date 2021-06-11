import React from "react";
import "./App.css";

export default function App() {
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=nXzPETY22in6xthGFaCkrVEYzDC9ArM_u1ascjZ_nOw"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className='app'>
      <h1>Unsplash Image Gallery!</h1>

      <form>
        <input type='text' placeholder='Search Unsplash...' />
        <button>Search</button>
      </form>

      <div className='image-grid'>
        {[...Array(100)].map((_, index) => (
          <div className='image' key={index}>
            <img src='https://placekitten.com/g/1920/1080' alt='Sample' />
          </div>
        ))}
      </div>
    </div>
  );
}
