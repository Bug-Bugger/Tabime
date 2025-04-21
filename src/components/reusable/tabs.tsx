"use client";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { cn } from "@src/lib/utils";
import { TabProps } from "@components/types/reusableTypes";

const Tabs: React.FC<TabProps> = ({ tabs = [], initialTab = 0 }) => {
  const [activeTab, setActiveTab] = useState<number>(initialTab);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Effect to calculate and update the indicator position and width
  useEffect(() => {
    const currentTab = tabRefs.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  // Add resize listener to recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      const currentTab = tabRefs.current[activeTab];
      if (currentTab) {
        setIndicatorStyle({
          left: currentTab.offsetLeft,
          width: currentTab.offsetWidth,
        });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeTab]);

  if (!tabs || tabs.length === 0) {
    return <div>No tabs to display.</div>;
  }

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="relative flex border-b border-gray-200 w-full">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(el) => (tabRefs.current[index] = el)}
            className={cn(
              "flex-1 py-3 md:py-4 px-1 text-center text-sm md:text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors duration-200 ease-in-out",
              activeTab === index
                ? "text-blue-600 font-medium"
                : "text-gray-500 hover:text-gray-700"
            )}
            onClick={() => setActiveTab(index)}
            aria-selected={activeTab === index}
            role="tab"
          >
            {tab.label}
          </button>
        ))}
        {/* Animated Indicator */}
        <div
          className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />
      </div>

      {/* Tab Content */}
      <div className="px-2 py-1 overflow-hidden">
        <div
          key={activeTab}
          className="animate-in fade-in duration-300 ease-in-out"
          role="tabpanel"
        >
          {tabs[activeTab]?.content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
