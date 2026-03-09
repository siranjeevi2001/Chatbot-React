import { useState } from "react";
import SidebarHeader from "./SidebarHeader";
import NewChatButton from "./NewChatButton";
import UserProfile from "./UserProfile";
import ChatHistoryList from "./ChatHistoryList";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const chats = [
    { id: 1, title: "Project Discussion" },
    { id: 2, title: "RAG Architecture Help" },
    { id: 3, title: "Docker Deployment Issue" },
  ];

  const user = {
    name: "siranjeevi",
    email: "siranjeevi@example.com",
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen
        bg-gray-900 text-white
        flex flex-col
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-72" : "w-12"}
      `}
    >
      {/* Header */}
      <SidebarHeader
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      />

      {/* Content */}
      {isOpen && (
        <>
          <NewChatButton />
          <ChatHistoryList
            chats={chats}
            activeChatId={1}
            onSelectChat={(id) => console.log(id)}
            onDeleteChat={(id) => console.log(id)}
          />
          <UserProfile user={user} />
        </>
      )}
    </aside>
  );
};

export default Sidebar;