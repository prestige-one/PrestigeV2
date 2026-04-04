'use client'
import { useEffect, useState } from "react";

interface StickyState {
  sticky: boolean;
}

const useSticky = (): StickyState => {
  const [sticky, setSticky] = useState(false);

  const stickyHeader = (): void => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    stickyHeader();
    window.addEventListener("scroll", stickyHeader, { passive: true });

    return (): void => {
      window.removeEventListener("scroll", stickyHeader);
    };
  }, []);

  return {
    sticky,
  };
};

export default useSticky;
