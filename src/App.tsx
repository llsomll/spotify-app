import React, { Suspense, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "./common/components/LoadingSpinner";
import useExchangeToken from "./hooks/useExchangeToken";
const AppLayout = React.lazy(() => import("./layout/AppLayout"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));
const SearchPage = React.lazy(() => import("./pages/SearchPage/SearchPage"));
const SearchWithKeywordPage = React.lazy(
  () => import("./pages/SearchPage/SearchWithKeywordPage")
);
const PlaylistDetailPage = React.lazy(
  () => import("./pages/PlaylistDetailPage/PlaylistDetailPage")
);
const PlaylistPage = React.lazy(
  () => import("./pages/PlaylistPage/PlaylistPage")
);

// 0. side bar (playlist & menu)
// 1. home page /
// 2. search page /search
// 3. search result page /search/:keyword
// 4. playlist detail page /playlist/:id
// 5. (mobile version) playlist page /playlist
function App() {
  const urlParams = new URLSearchParams(window.location.search);
  let code = urlParams.get("code");
  const codeVerifier = localStorage.getItem("code_verifier");
  const { mutate: exchangeToken } = useExchangeToken();

  useEffect(() => {
    if (code && codeVerifier) {
      exchangeToken({ code, codeVerifier });

      // Prevent reusing the code on page reload
      const url = new URL(window.location.href);
      url.searchParams.delete("code");
      window.history.replaceState({}, document.title, url.toString());
    }
  }, [code, codeVerifier, exchangeToken]);

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
