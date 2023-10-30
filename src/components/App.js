// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        if (response.ok) {
          const data = await response.json();
          setDogImage(data.message);
        } else {
          throw new Error("Failed to fetch");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        dogImage && <img src={dogImage} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
