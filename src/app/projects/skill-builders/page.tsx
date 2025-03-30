import '@mantine/code-highlight/styles.css';

import React from "react";
import { CodeHighlightTabs } from '@mantine/code-highlight';

const challenge1Code = [
{
  fileName: 'prompt.md',
  code: `
1. Open this [link](Link Redacted)
2. Find a hidden URL within the HTML
  - Each character of the URL is given by this DOM tree, in this specific order. You need to find (in order) all of the occurrences and join them to get the link.
  - The asterisk is a wildcard representing zero or more characters that can be present in the string. These characters are irrelevant to the result and should be ignored.
  - There can be zero or more DOM nodes between each valid tag. These nodes are irrelevant to the result.
  - Any additional attribute that doesn't interfere with the described pattern can be safely ignored.
`,
  language: 'md'
},
{
  fileName: 'example.html',
  code: `
<section data-id="92*">
  <article data-class="*45">
    <span data-tag="*78*">
      <b class="ref" value="VALID_CHARACTER"></b>
    </span>
  </article>
</section>
  `,
  language: 'html'
},
{
  fileName: 'solution.js',
  code: `
function getValues() {
  // Check if the element is within the required 'SECTION > ARTICLE > DIV > B' hierarchy
  function isValidSequence(element) {
    let tagSequence = [];
    
    while (element) {
      tagSequence.unshift(element.tagName);
      element = element.parentElement;
    }

    // Convert array to a joined string and check for the correct order
    const parentSequence = tagSequence.join(" > ");
    return /SECTION.*?>.*?ARTICLE.*?>.*?DIV.*?>.*?B/.test(parentSequence);
  }

  function getValidBValues() {
    return [...document.querySelectorAll("b")] // Get all <b> elements
      .filter(bElement => !bElement.classList.contains("ref0")) // Exclude 'ref0' class
      .filter(isValidSequence) // Ensure valid hierarchy
      .map(bElement => bElement.getAttribute("value") || ""); // Avoid null values
  }

  console.log(getValidBValues().join("")); // Print concatenated values
}

getValues();
  `,
  language: 'js'
}]

const challenge2Code = [
  {
    fileName: 'problem.md',
    code: `
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
    `,
    language: 'md'
  },
  {
    fileName: 'solution.ts',
    code: `
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>(); // Stores {value: index}

  for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];

      if (map.has(complement)) {
          return [map.get(complement)!, i]; // Retrieve stored index of complement
      }

      map.set(nums[i], i); // Store current number and its index
  }

  return []; // No valid pair found
}
    `,
    language: 'ts'
  }
]

const challenge3Code = [
  {
    fileName: 'problem',
    code: `
Implement a feature to allow item selection with the following requirements:
1. Clicking an item selects/unselects it.
2. Multiple items can be selected at a time.
3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
4. Currently selected items should be visually highlighted.
5. Currently selected items' names should be shown at the top of the page.
      `,
      language: 'md'
  }
]

const challenge4Code = [
  {
    fileName: 'FastAPI.py',
    code: `
import random
import os
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter
from slowapi.util import get_remote_address
from starlette.responses import JSONResponse

limiter = Limiter(key_func=get_remote_address)
app = FastAPI()
app.state.limiter = limiter

origins = [
    "https://willjayprofile.netlify.app",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

"""
This endpoint returns a random color in hex format.

Rate limit: 5 requests per minute per IP

Run Locally: uvicorn main:app --host 0.0.0.0 --port 8080 --reload
"""

@app.get("/random-color-hex")
@limiter.limit("5/minute", error_message="Too many requests")
async def get_random_color(request: Request):
    color = "#{:06x}".format(random.randint(0, 0xFFFFFF))
    return JSONResponse(content={"color": color})

if __name__ == "__main__":
    import uvicorn
    port = int(os.getenv("PORT", 8080))  # Match Fly.io PORT
    uvicorn.run(app, host="0.0.0.0", port=port)
    `,
    language: 'py'
  }
]

const SkillBuilders: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="p-6 bg-white text-black">
        <h1 className="text-3xl font-bold">Skill Builders</h1>
        <p>I&apos;ve been working to improve my logic skills. Here are some problems I&apos;ve recently solved while not working on anything else.</p>

        <div className="my-3 p-3 border rounded-sm border-gray-200 shadow-md" id="skillBuilders1">
          <h2 className="text-xl font-bold">Challenge 1 - Dom Traversal</h2>
          <h3 className="py-2 font-medium text-lg">Setup</h3>
          <p>(For the sake of anonymity, I&apos;ve removed identifying information.)</p>
          <CodeHighlightTabs code={challenge1Code}
            withExpandButton={true}
            defaultExpanded={false}
            expandCodeLabel="Show full code"
            collapseCodeLabel="Show less"/>

          <h3 className="py-2 font-medium text-lg">Rationale</h3>
          <p>This problem started as a normal dom traversal, but with a few kinks! I started by selecting the target element, in this case, <code>&lt;b&gt;</code> since this made sense as the starting point as the final point in the pattern. Then I worked up the ancestors checking for the proper pattern, making sure to examine all ancestors all the way to the root as there <i>could</i> be other elements between the matching pattern. By looking at the data, I noticed all the correct <code>&lt;b&gt;</code> elements had a class <code>ref</code> while many decoy elements had <code>ref-0</code>. This was a small optimization as I could immediately eliminate some preliminary matches.</p>
        </div>

        <div className="my-3 p-3 border rounded-sm border-gray-200 shadow-md" id="skillBuilders2">
          <h2 className="text-xl font-bold">Challenge 2 - Two Sum</h2>
          <h3 className="py-2 font-medium text-lg">Setup</h3>
          <CodeHighlightTabs code={challenge2Code}
            withExpandButton={true}
            defaultExpanded={false}
            expandCodeLabel="Show full code"
            collapseCodeLabel="Show less"/>

          <h3 className="py-2 font-medium text-lg">Rationale</h3>
          <p>This problem is pretty straightforward. You move down the list/array and check to see if the values add up to the given sum. The trick here is in the optimizaiton. One solution would be to nest <code>for</code> loops, but this would be inefficient on large datasets as it has a complexity of O(n^2). By using a map, we can reduce this to O(n) as is shown in the solution since we only need to go through the items in the list once.</p>
        </div>

        <div className="my-3 p-3 border rounded-sm border-gray-200 shadow-md" id="skillBuilders3">
          <h2 className="text-xl font-bold">Challenge 3 - Interview Question</h2>
          <h3 className="py-2 font-medium text-lg">Setup</h3>
          <p>
            One interview question I recently did was as follows:
          </p>

          <CodeHighlightTabs code={challenge3Code}
            withExpandButton={true}
            defaultExpanded={false}
            expandCodeLabel="Show full code"
            collapseCodeLabel="Show less"/>
            
          <p className="my-3"><a className="text-blue-400 font-bold" href="https://jsfiddle.net/7zonLk06/" target="_blank">JS Fiddle Solution</a></p>
          <h3 className="py-2 font-medium text-lg">Rationale</h3>
          <p>This was a fun project where I started with just a huge list and the requirements defined above. The result is in the fiddle. Some interesting points were that: list items were all different colors, performance was key!</p>
        </div>
        
        <div className="my-3 p-3 border rounded-sm border-gray-200 shadow-md" id="skillBuilders4">
          <h2 className="text-xl font-bold">Challenge 4 - FastAPI Deployment</h2>
          <h3 className="py-2 font-medium text-lg">Setup</h3>
          <p>
            I decided to build a small FastAPI to handle some fun features around the site. Picked this over lambda as it&apos;s easier to deploy and more cost effective.
          </p>

          <CodeHighlightTabs code={challenge4Code}
            withExpandButton={true}
            defaultExpanded={false}
            expandCodeLabel="Show full code"
            collapseCodeLabel="Show less"/>
            
          <h3 className="py-2 font-medium text-lg">Rationale</h3>
          <p>I was surprised at how easy it was to deploy a simple API on fly.io. The only downside is that it&apos;s not free, but it&apos;s still very cheap. I&apos;m not sure how much it costs to run, but it&apos;m going to try and get somem database stuff going too just to add some complexity.</p>
        </div>
      </section>
    </div>
  );
};

export default SkillBuilders;