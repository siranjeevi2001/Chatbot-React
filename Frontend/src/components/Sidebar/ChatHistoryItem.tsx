import { MessageCircle, Trash2 } from "lucide-react";

const ChatHistoryItem = ({ chat, onDelete, isActive }) => {
  return (
    <div
      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer group transition
        ${isActive ? "bg-gray-800" : "hover:bg-gray-800"}
      `}
    >
      <div className="flex items-center gap-2">
        <MessageCircle size={16} />
        <span className="text-sm truncate">{chat.title}</span>
      </div>

      <Trash2
        size={16}
        onClick={(e) => {
          e.stopPropagation(); // prevent parent click
          onDelete(chat.id);
        }}
        className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-500 transition"
      />
    </div>
  );
};

export default ChatHistoryItem;