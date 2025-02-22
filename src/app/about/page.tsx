import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      <section className="p-10 bg-white text-black">
        <div className="w-full max-w-md m-auto mb-2">
          <h1 className="text-3xl font-bold mb-2">About</h1>
          <p className="mb-2">I was born and raised in the DC area but moved to Colorado in 2014. I played basketball growing up so working as a team has always been second nature to me. I love learning and solving puzzles which makes engineering work feel so natural. I love putting my own flare on the things I do.</p>
          <p className="mb-2">Outside of work, I enjoy cooking, spending time with my family, watching and playing sports, and playing PC games (WOW Classic &amp; Escape From Tarkov at the moment).</p>
          <div className="shadow-lg my-2">
            <Image className="bg-gray-200 w-full sm:w-auto sm:max-w-lg mx-auto p-4" quality={80} src="/family.png" alt="will image" width="400" height="300" />
          </div>
          <p className="mb-2">Here&apos;s a list of all the random tech stuff I have experience with in no particular order:</p>
          <ul>
            <li><span className="font-bold">Python:</span> Django, Django Rest Framework, Custom Apps</li>
            <li><span className="font-bold">Local Development:</span> Node, Next.js, Nuxt.js, Nest</li>
            <li><span className="font-bold">JS:</span> TS, JS, Vue/React & Redux/Angular, D3.js</li>
            <li><span className="font-bold">AI:</span> Claude, OpenAI, ChatGPT, CoPilot</li>
            <li><span className="font-bold">Styling:</span> SASS, Tailwind, Styled Components, Stylus, LESS, Bootstrap, MUI</li>
            <li><span className="font-bold">Data Retrieval:</span> Django ORM, GraphQL, REST, SOAP</li>
            <li><span className="font-bold">JAM Stack:</span> Vercel, Amplify, Cloudflare Pages, Github Pages, Netlify</li>
            <li><span className="font-bold">Orchestration and building:</span> Jenkins, Docker, Github Actions, Cloudflare</li>
            <li><span className="font-bold">Testing and Linting:</span> TDD & E2E, Jest, Playwright, Lighthouse, Pytest, Eslist, Stylelint</li>
            <li><span className="font-bold">Utils and Versioning:</span> Webpack, Redis, Celery, Git, Gulp, Grunt</li>
            <li><span className="font-bold">Hosting:</span> AWS, Render</li>
            <li><span className="font-bold">Database:</span> Mongo(NoSQL), SQL</li>
            <li><span className="font-bold">Content:</span> Contentful, Hubspot, Airtable, Wagtail, Headless WordPress, Shopify API</li>
            <li><span className="font-bold">Monitoring and CI:</span> Sentry, Datadog, Circle CI</li>
            <li></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;