"use client";

import React, { useState } from "react";

interface Item {
  id: number;
  name: string;
  categories: string[];
  description: string;
  descriptionExtended: string;
}

// To Do: Move to contentful and implement React Hook
const rothbrightContent: string = `Managed offshore and nearshore developers to deliver projects on time and under budget. These projects focused mainly around requirements gathering, architecting custom applications leveraging AWS resources, rapid prototyping, and maintaining existing applications.`;
const rothbrightContentExtended: string = ``;

const motleyFoolContent: string = `Worked with product owners to design, build, test, deliver, and iterate front-end and back-end components and automations. Responsible for maximizing technical SEO, managing site data, and maintaining uptime allowing the business to grow from $20M to $100M in revenue. Participated in a mentorship program of junior developers.`;
const motleyFoolContentExtended: string = ``;

const deloitteDigitalContent: string = `Senior Staff Engineer leading diverse front-end projects across multiple industries, including food and beverage, B2B, B2C, insurance, and transportation. Responsibilities included designing and delivering solutions such as REST API integrations, custom dashboards, portal development, and website design enhancements.`;
const deloitteDigitalContentExtended: string = ``;

const bahContent: string = `Led migrations from SharePoint 2007 to 2010 and developed custom dashboards integrating REST APIs.`;
const bahContentExtended: string = ``;

const cfContent: string = `Functioned as a help desk resource, developed and implemented training curriculum for senior FAA personnel, making minor updates to UI, and administering the Emergency Operations SharePoint instance.`;
const cfContentExtended: string = ``;

const items: Item[] = [
  { id: 1, name: "Rothbright", categories: ["AWS", "Back-End", "Front-End", "Git", "API", "Database", "Testing"], description: rothbrightContent, descriptionExtended: rothbrightContentExtended },
  { id: 2, name: "The Motley Fool", categories: ["AWS", "Back-End", "Front-End", "Git", "API", "Database", "Testing"], description: motleyFoolContent, descriptionExtended: motleyFoolContentExtended },
  { id: 3, name: "Deloitte Digital", categories: ["Front-End", "Back-End", "Git", "API", "Testing"], description: deloitteDigitalContent, descriptionExtended: deloitteDigitalContentExtended },
  { id: 4, name: "Booz Allen Hamilton", categories: ["Front-End", "API"], description: bahContent, descriptionExtended: bahContentExtended },
  { id: 5, name: "Codefry LLC/LS Technologies", categories: ["Front-End", "API"], description: cfContent, descriptionExtended: cfContentExtended },
];

const categories = ["AWS", "Back-End", "Front-End", "Git", "API", "Database", "Testing"];

const PillSelector: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (category: string) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredItems = selectedFilters.length
    ? items.filter((item) => item.categories.some((category) => selectedFilters.includes(category)))
    : items;

  return (
    <div className="my-4">
      <div className="mb-4 flex gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              selectedFilters.includes(category)
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => toggleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id} className="py-2 border-b">
            <b>{ item.name }</b><br />
            { item.description }<br />
            { item.descriptionExtended }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PillSelector;
