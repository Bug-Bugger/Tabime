"use client";
import React, { useState } from "react";

interface TabProps {
  content: React.ReactNode[];
}

const Tabs: React.FC<TabProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className="w-full">
      <div className="flex border-b w-full">
        <button
          className={`flex-1 py-4 text-center relative ${
            activeTab === 0 ? "text-blue-500 font-medium" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(0)}
        >
          Itinerary
          {activeTab === 0 && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
          )}
        </button>
        <button
          className={`flex-1 py-4 text-center relative ${
            activeTab === 1 ? "text-blue-500 font-medium" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Budget
          {activeTab === 1 && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
          )}
        </button>
        <button
          className={`flex-1 py-4 text-center relative ${
            activeTab === 2 ? "text-blue-500 font-medium" : "text-gray-500"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Notes
          {activeTab === 2 && (
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"></div>
          )}
        </button>
      </div>
      <div>{content[activeTab]}</div>
    </div>
  );
};

export default Tabs;
