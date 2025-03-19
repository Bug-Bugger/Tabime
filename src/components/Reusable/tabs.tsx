"use client";
import React, { useState } from "react";

interface TabProps {
	content: React.ReactNode[];
}

const Tabs: React.FC<TabProps> = ({ content }) => {
	const [activeTab, setActiveTab] = useState<number>(0);

	return (
		<div>
			<div className="flex border-b flex-row justify-between">
				<button
					className={`px-8 py-2 ${
						activeTab === 0
							? "border-b-2 border-blue-500 text-blue-500"
							: "text-gray-500"
					}`}
					onClick={() => setActiveTab(0)}>
					Itinerary
				</button>
				<button
					className={`px-8 py-2 ${
						activeTab === 1
							? "border-b-2 border-blue-500 text-blue-500"
							: "text-gray-500"
					}`}
					onClick={() => setActiveTab(1)}>
					Budget
				</button>
				<button
					className={`px-8 py-2 ${
						activeTab === 2
							? "border-b-2 border-blue-500 text-blue-500"
							: "text-gray-500"
					}`}
					onClick={() => setActiveTab(2)}>
					Notes
				</button>
			</div>
			<div>{ content[activeTab] }</div>
		</div>
	);
};

export default Tabs;
