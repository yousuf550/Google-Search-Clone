import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const RoutesSection = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route
          exact
          path={["/search", "/images", "/news", "/videos"]}
          element={<Results />}
        />
      </Routes>

      <h1>Routes</h1>
    </div>
  );
};

export default RoutesSection;
