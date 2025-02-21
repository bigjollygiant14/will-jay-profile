import React from "react";
import Image from "next/image";
import Hero from "@/components/organisms/Hero";

const HomePage: React.FC = () => {
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
      <section className="p-10 bg-white text-black text-center">
        <h2 className="text-2xl font-bold">Welcome!</h2>
        <p className="mt-2 text-lg">Feel free to poke around.</p>
        <p className="mt-2 text-sm">I&apos;m actively updating this site so changes are frequent! This site is built with Next.js, TypeScript, Netlify, Tailwind and Contentful as the CMS.</p>
      </section>
    </div>
  );
};

export default HomePage;