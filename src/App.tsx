import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

import PodcastPage from "@/pages/podcast";

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route element={<PodcastPage />} path="/" />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
