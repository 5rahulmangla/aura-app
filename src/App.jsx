import React, { useRef } from "react";
import HomePage from "./components/HomePage";

export default function App() {
  const homeRef = useRef(null);
  return <HomePage ref={homeRef} />;
}
