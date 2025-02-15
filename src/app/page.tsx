import React from "react";
import Image from "next/image";
import Hero from "@/components/organisms/Hero";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      <Hero />

      <div className="max-w-md md:max-w-2xl m-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="justify-items-center">
            <Image src="/globe.svg" alt="globe image" width="200" height="300" />
          </div>
          <div className="flex h-full items-center">
            <p className="px-4 py-2">
              Mama always said that &quot;Life was like a box of chocolates&quot;<br /><br />
              - Abraham Lincoln (1066 AD)
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="p-10 bg-white text-black text-center">
        <h2 className="text-2xl font-bold">Welcome!</h2>
        <p className="mt-2 text-lg">Feel free to poke around.</p>
      </section>
    </div>
  );
};

export default HomePage;