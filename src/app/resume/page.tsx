import React from "react";
import PillSelector from "@/components/organisms/PillSelector";
import Link from "next/link";
import Button from "@/components/ui/Buttons/Button";

const Resume: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      <section className="p-10 bg-white text-black">
        <h1 className="text-3xl font-bold">Resume</h1>
        <div className="flex justify-end pb-4">
          <Link href="/William A Jay - Resume.pdf" download>
            <Button>Download Resume</Button>
          </Link>
        </div>

        <p>Below is a list of some of the tech I&apos;ve worked with in the last year thanks to being curious and loving to learn. There are some duplicates, but usually all of the tech works together. Hoping to add more to this list soon!</p>
        
        <PillSelector />

        <div>
          <h2 className="text-xl font-bold">Experience as a Senior Full Stack</h2>
          <ul>
            <li>Django, Django Rest Framework</li>
            <li>JS, Vue/React</li>
            <li>Claude, OpenAI</li>
            <li>SASS, Tailwind, Bootstrap</li>
            <li>Jenkins, Docker, Github Actions, Cloudflare</li>
            <li>TDD & E2E, Jest, Playwright, Lighthouse, Pytest, Eslist, Stylelint</li>
            <li>Django ORM, REST</li>
            <li>AWS, Webpack, Docker, Redis, SQL, Git</li>
            <li>Hubspot, Airtable, Wagtail</li>
            <li>Sentry, Datadog</li>
          </ul>

          <h2 className="text-xl font-bold">Experience as a Senior Front End</h2>
          <ul>
            <li>Node, Next.js, Nuxt.js, Nest</li>
            <li>TS, JS, Vue/React & Redux/Angular, D3.js</li>
            <li>Claude, OpenAI</li>
            <li>SASS, Styled Components, Stylus, LESS, Tailwind</li>
            <li>Vercel, Amplify, Cloudflare Pages, Github Pages, Netlify, Docker, Github Actions</li>
            <li>TDD & E2E, Jest, Playwright, Eslist, Stylelint</li>
            <li>GraphQL, REST, SOAP</li>
            <li>AWS, Webpack, SQL, Mongo(NoSQL), Git</li>
            <li>Hubspot, Contentful, Headless WordPress, Shopify API</li>
          </ul>

          <p>To be honest, I love to learn! I&apos;m currently pursuing AWS Developer and AWS ML certifications.</p>
        </div>
      </section>
    </div>
  );
};

export default Resume;