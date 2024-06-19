import { useState } from "react";
import RightSide from "./components/Login/RightSide/Index.tsx";
import LeftSide from "./components/Login/LeftSide/Index.tsx";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className="start" data-theme={ isDarkMode ? "dark" : "light" }>
      <LeftSide setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <RightSide isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
