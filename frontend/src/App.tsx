import { useState } from "react";
import RightSide from "./components/Login/RightSide/Index.tsx";
import LeftSide from "./components/Login/LeftSide/Index.tsx";
import { Toaster } from "react-hot-toast";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className="start" data-theme={isDarkMode ? "dark" : "light"}>
      <Toaster position="top-right" reverseOrder={false} />
      <LeftSide setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <RightSide isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
