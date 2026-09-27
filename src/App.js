import { useState } from "react";
import "./App.css";

function App() {

  const [search, setSearch] = useState("");

 const [images, setImages] = useState([
  {
    id: 1,
    title: "Nature",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
  },
  {
    id: 2,
    title: "Mountain",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  },
  {
    id: 3,
    title: "Beach",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    id: 4,
    title: "Forest",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b"
  },
  {
    id: 5,
    title: "City",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
  },
  {
    id: 6,
    title: "Flower",
    image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946"
  },
  {
    id: 7,
    title: "River",
    image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2"
  },
  {
    id: 8,
    title: "Sun",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
  },
  {
    id: 9,
    title: "Road",
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7"
  },
  {
    id: 10,
    title: "Sky",
    image: "https://images.unsplash.com/photo-1499346030926-9a72daac6c63"
  }
]);


  // Search

  const result = images.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );


  // Delete

  function deleteImage(id) {

    const newImages = images.filter((item) => item.id !== id);

    setImages(newImages);

  }


  return (

    <div className="app">

      <h1>My Gallery</h1>

      <p>My Favorite Images</p>


      {/* Search */}

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      {/* Gallery */}

      <div className="gallery">

        {result.map((item) => (

          <div className="card" key={item.id}>

            <img
              src={item.image}
              alt={item.title}
            />

            <h2>{item.title}</h2>


            <button>
              ❤️ Like
            </button>


            <button
              onClick={() => deleteImage(item.id)}
            >
              🗑️ Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default App;