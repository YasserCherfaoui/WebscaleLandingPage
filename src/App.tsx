import { Route, Routes } from "react-router-dom";

import PodcastPage from "@/pages/podcast";

function App() {
  return (
    <Routes>

      <Route element={<PodcastPage />} path="/" />
    </Routes>
  );
}

export default App;
