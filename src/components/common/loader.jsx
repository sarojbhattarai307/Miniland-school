"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Fake delay for smooth transition

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 h-[3px] bg-black transition-shadow duration-200 ${
        loading ? "w-full opacity-100" : "w-0 opacity-0"
      }`}
    ></div>
  );
};

export default Loader;
