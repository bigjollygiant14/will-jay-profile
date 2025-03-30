"use client"

import React, { useState } from "react";
import Image from "next/image";
import Hero from "@/components/organisms/Hero";
import Button from "@/components/ui/Buttons/Button";

const HomePage: React.FC = () => {
  const [backgroundColor, setBackgroundColor] = useState<string>("#ffffff");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchRandomColor = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch('https://fastapi-random-color-withered-water-2515.fly.dev/random-color-hex');
      // const response = await fetch('http://0.0.0.0:8000/random-color-hex');
      const data = await response.json();
      if (response.status === 429) {
        setError(true);
        setBackgroundColor('#ffffff');
      } else {
        setError(false);
      }
      setBackgroundColor(data.color);
    } catch (error) {
      console.error('Error fetching random color:', error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      <Hero />

      <div className="max-w-md md:max-w-2xl m-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="justify-items-center align-items-center">
            <Image className="bg-gray-200 rounded-full object-top object-cover w-[200px] h-[200px]" quality={80} src="/will-jay.jpg" alt="will image" width="200" height="300" priority />
          </div>
          <div className="flex h-full items-center">
            <p className="px-4 py-2">
              &quot;Do or do not. There is no try.&quot;<br />
              - Yoda
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="p-10 text-center text-black" style={{ backgroundColor }}>
        <h2 className="text-2xl font-bold">Welcome!</h2>
        <p className="mt-2 text-lg">
          Feel free to poke around.
          <br />
          <Button 
            onClick={fetchRandomColor} 
            className="ml-4 inline-flex items-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Loading...
              </>
            ) : (
              "Color Me!"
            )}
          </Button>
          {error && (
            <>
              <br />
              <span className="text-sm text-red-500 mt-2">Button is rate limited</span>
            </>
          )}
          <br />
          <span className="text-xs text-red-500 mt-2">Read more about this button on the <a href="/projects/skill-builders/#skillBuilders4">Skill Builders page</a></span>
        </p>
        <p className="mt-2 text-sm">I&apos;m actively updating this site so changes are frequent! This site is built with Next.js, TypeScript, Netlify, Tailwind and Contentful as the CMS. I also have a small FastAPI that handles fun little features around the site hosted on fly.io.</p>
      </section>
    </div>
  );
};

export default HomePage;