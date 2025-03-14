"use client";

import React, { useState } from "react";
// import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { ResumeItemType } from "@/lib/types/contentfulTypes";
import DisplayDate from "../ui/DisplayDate";

// To Do: Make dynamic
const categories = ["AI", "AWS", "Back End", "Front End", "API", "Database", "SharePoint", "Testing"];

interface PillSelectorType {
  items: ResumeItemType[];
}

interface DisplayDateItemType {
  timestamp: string;
}

const DisplayDateItem: React.FC<DisplayDateItemType> = ({ timestamp }) => {
  if (timestamp) {
    return (
      <DisplayDate timestamp={ timestamp } />
    );
  }

  return (
    <span>Current</span>
  )
}

const PillSelector: React.FC<PillSelectorType> = ({ items }) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (category: string) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredItems = selectedFilters.length
    ? items.filter((item) => item.contentfulMetadata.tags.some((category) => selectedFilters.includes(category.name)))
    : items;

  return (
    <div className="my-4">
      <span className="text-xs">Note: These buttons are greedy meaning it will show all matches with &quot;Tag A&quot; OR &quot;Tag B&quot;</span>
      <div className="mb-4 py-2 flex gap-2 overflow-x-scroll">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 min-w-[100px] shrink-0 rounded-full text-sm font-medium border transition-colors ${
              selectedFilters.includes(category)
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => toggleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={`${ index }-filtered-items`} className="py-2 border-b">
            <h3 className="text-xl font-bold mt-2 mb-1">{ item.jobTitle } at { item.companyName }</h3>
            <h4 className="font-semibold text-sm mb-2"><DisplayDateItem timestamp={ item.dateStarted } /> - <DisplayDateItem timestamp={ item.dateEnded } /></h4>
            <b>Summary:</b>{ documentToReactComponents(item.description.json, { preserveWhitespace: true, }) }<br />
            <b>Details:</b>{ documentToReactComponents(item.descriptionExtended.json, { 
              preserveWhitespace: true,
              renderText: text => {
                return text.split('\n').reduce((children:React.ReactNode, textSegment:string, index:number) => {
                  return [...(children as []), index > 0 && <br key={index} />, textSegment];
                }, []);
              },
            }) }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PillSelector;
