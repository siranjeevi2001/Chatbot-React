import { 
  MessageSquarePlus, 
  MessageCircle, 
  Trash2, 
  LogOut,
  User
} from "lucide-react";

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

  return (
    <div className="fixed top-0 left-0 h-screen w-72 bg-gray-900 text-white flex flex-col">
      
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-semibold">ChatBot AI</h1>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2">
          <MessageSquarePlus size={18} />
          New Chat
        </button>
      </div>

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-2 space-y-2">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800 cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <MessageCircle size={16} />
              <span className="text-sm">{chat.title}</span>
            </div>

            <Trash2
              size={16}
              className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-500"
            />
          </div>
        ))}
      </div>

      {/* User Profile Section (Bottom) */}
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center justify-between bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition cursor-pointer">
          
          {/* Left Side - Avatar + Name */}
          <div className="flex items-center gap-3">
            
            {/* Avatar */}
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                <User size={18} />
              </div>

              {/* Online Indicator */}
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-gray-900 rounded-full"></span>
            </div>

            {/* User Info */}
            <div className="text-sm">
              <p className="font-medium">{user.name}</p>
              <p className="text-xs text-gray-400 truncate w-32">
                {user.email}
              </p>
            </div>
          </div>

          {/* Logout Icon */}
          <LogOut
            size={18}
            className="text-gray-400 hover:text-red-500 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;