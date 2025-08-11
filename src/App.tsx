import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main.tsx";
// import ProjectDetail from "./pages/project/ProjectDetail.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/*<Route path="/projects/:projectId" element={<ProjectDetail />} />*/}
    </Routes>
  )
}

export default App
