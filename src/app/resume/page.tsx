import React from "react";
import PillSelector from "@/components/organisms/PillSelector";
import Link from "next/link";
import Button from "@/components/ui/Buttons/Button";

import { getAllResumeItems } from "@/lib/api";
;
async function Resume() {
  const resumeItems = await getAllResumeItems();

  return (
    <div className="flex flex-col min-h-screen text-white bg-gray-800">
      <section className="p-10 bg-white text-black">
        <div className="flex justify-between pb-4">
          <h1 className="text-3xl font-bold">Resume</h1>
          <Link href="/William A Jay - Resume.pdf" download>
            <Button>Download Resume</Button>
          </Link>
        </div>

        <p>Below are excerpts from my resume as well as a bit more detail about each job. Talking about myself and the things I&apos;ve done is definitely not my strong suit. I love to learn and I can&apos;t wait to add more experiences to this page.</p>
        
        <PillSelector items={ resumeItems }/>
      </section>
    </div>
  );
};

export default Resume;