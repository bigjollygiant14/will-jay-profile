"use client";

import { useEffect } from "react";

const ConsoleLogger: React.FC = () => {
  useEffect(() => {
    const readMoreUrl: string = "https://shorturl.at/IG6Wc";
    console.log(`Welcome to my site! You can read more about the tech here: ${readMoreUrl}`);
  }, []);

  return null;
};

export default ConsoleLogger;
