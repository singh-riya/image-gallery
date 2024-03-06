import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const data = await fetch("https://picsum.photos/v2/list").then((res) =>
      res.json()
    );
    setImages(data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <header
        style={{
          padding: "50px",
          backgroundColor: "antiquewhite",
          fontSize: "35px",
          fontWeight: 100,
        }}
      >
        Picture Gallery
      </header>
      <div>
        <div style={{
                  display: "flex",
                  gap: "20px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
          {images.map((item) => {
            return (
              <div
                key={item.id}
              >
                <img
                  src={item.download_url}
                  alt={item.author}
                  height="400px"
                  width="400px"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
