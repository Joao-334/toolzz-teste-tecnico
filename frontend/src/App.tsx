import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Login from "./components/Login/Index.tsx";

function App() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <div className="start" data-theme={isDarkMode ? "dark" : "light"}>
      <Toaster position="top-right" reverseOrder={false} />
      <Login isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
