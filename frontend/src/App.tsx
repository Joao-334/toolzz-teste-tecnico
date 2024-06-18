import LoginPageLeftSide from "./components/Login/LeftSide/Index.tsx";
import RightSide from "./components/Login/RightSide/Index.tsx";

function App() {

  return (
    <div style={{ display: "flex" }}>
      <LoginPageLeftSide />
      <RightSide />
    </div>
  )
}

export default App;
