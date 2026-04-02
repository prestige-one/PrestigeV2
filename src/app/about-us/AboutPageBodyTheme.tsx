"use client";

import { useEffect } from "react";

export default function AboutPageBodyTheme() {
  useEffect(() => {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
  }, []);

  return null;
}

