import ChatHistoryItem from "./ChatHistoryItem";

const ChatHistoryList = ({
  chats,
  activeChatId,
  onSelectChat,
  onDeleteChat,
}) => {
  return (
    <div className="flex-1 overflow-y-auto px-2 space-y-2">
      {chats.map((chat) => (
        <div key={chat.id} onClick={() => onSelectChat(chat.id)}>
          <ChatHistoryItem
            chat={chat}
            isActive={chat.id === activeChatId}
            onDelete={onDeleteChat}
          />
        </div>
      ))}
    </div>
  );
};

export default ChatHistoryList;