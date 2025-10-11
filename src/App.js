import React from "react";
import WatchPage from "./pages/WatchPage";

function App() {
  const movieName = "anime";

  return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>🎬 Ryan Movie</h1>
        <WatchPage movieName={movieName} />
      </div>
  );
}

export default App;
