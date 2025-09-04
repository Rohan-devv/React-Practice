import { useEffect, useState } from "react"

export default function App() {

  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        setPhotos(data.slice(0, 1));
      });

  },[])
  return (
    <div>
      {photos ? (
        <div key={photos[0].id}>
          <h2 className="text-xl font-bold">{photos[0].title}</h2>
          <img src={photos[0].url} alt={photos[0].title} className="w-full h-auto" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
} 