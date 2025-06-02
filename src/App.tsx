import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./common/components/LoadingSpinner";
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchWithKeywordPage = React.lazy(
  () => import("./pages/SearchPage/SearchWithKeywordPage"));
const PlaylistDetailPage = React.lazy(
  () => import("./pages/PlaylistDetailPage/PlaylistDetailPage"));
const PlaylistPage = React.lazy(
  () => import("./pages/PlaylistPage/PlaylistPage"));

// 0. side bar (playlist & menu)
// 1. home page /
// 2. search page /search
// 3. search result page /search/:keyword
// 4. playlist detail page /playlist/:id
// 5. (mobile version) playlist page /playlist
function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="search/:keyword" element={<SearchWithKeywordPage />} />
          <Route path="playlist/:id" element={<PlaylistDetailPage />} />
          <Route path="playlist" element={<PlaylistPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
