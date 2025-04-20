import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@components/ui/button";

interface ChatBoxProps {
    isChatModalOpen: boolean;
    setIsChatModalOpen: (isOpen: boolean) => void;
}

const ChatBox = ({isChatModalOpen, setIsChatModalOpen}: ChatBoxProps) => {
	const [inputMessage, setInputMessage] = useState("");

	const toggleModal = () => {
		setIsChatModalOpen(!isChatModalOpen);
	};

	return (
		<div className="fixed bottom-10 left-6">
			{/* Chat Button */}
			<Button onClick={toggleModal}>
				{isChatModalOpen ? <X /> : <MessageCircle />}
				{!isChatModalOpen && <span>Chat</span>}
			</Button>

			{/* Chat Modal */}
			{isChatModalOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-start z-50 p-4">
					<div className="bg-white w-full max-w-md h-[80vh] rounded-lg shadow-xl flex flex-col">
						{/* Chat Header */}
						<div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
							<h2 className="text-lg font-semibold">Chat With Other Otakus</h2>
							<button
								onClick={toggleModal}
								className="hover:bg-blue-600 p-1 rounded">
								<X size={24} />
							</button>
						</div>

						{/* Messages Container */}
						<div className="flex-grow overflow-y-auto p-4 space-y-3">
							{null}
						</div>

						{/* Message Input */}
						<div className="p-4 border-t flex">
							<input
								type="text"
								value={inputMessage}
								onChange={(e) => setInputMessage(e.target.value)}
								placeholder="Type your message..."
								className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
							<button className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors">
								Send
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ChatBox;
