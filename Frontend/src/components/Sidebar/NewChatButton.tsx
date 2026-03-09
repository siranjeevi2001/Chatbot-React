
import { MessageSquarePlus } from "lucide-react";

const NewChatButton = () => {
  return (
        <div className="p-4">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2">
          <MessageSquarePlus size={18} />
          New Chat
        </button>
      </div>
  )
}

export default NewChatButton