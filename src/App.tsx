import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main.tsx";
import CustomCursor from "./components/cursor/CustomCursor.tsx";

function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  )
}

export default App
