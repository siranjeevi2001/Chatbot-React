import SidebarHeader from "./SidebarHeader";
import NewChatButton from "./NewChatButton";
import UserProfile from "./UserProfile";
import ChatHistoryList from "./ChatHistoryList";

const Sidebar = () => {
  const chats = [
    { id: 1, title: "Project Discussion" },
    { id: 2, title: "RAG Architecture Help" },
    { id: 3, title: "Docker Deployment Issue" },
  ];

  const user = {
    name: "siranjeevi",
    email: "siranjeevi@example.com",
  };

  // ## dummy data and handlers for demonstration
  const handleSelectChat = (id) => {
    console.log("Selected chat:", id);
  };

  const handleDeleteChat = (id) => {
    console.log("Delete chat:", id);
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-72 bg-gray-900 text-white flex flex-col">
      
      <SidebarHeader />
      <NewChatButton />

      <ChatHistoryList
        chats={chats}
        activeChatId={1}
        onSelectChat={handleSelectChat}
        onDeleteChat={handleDeleteChat}
      />

      <UserProfile user={user} />
    </div>
  );
};

export default Sidebar;