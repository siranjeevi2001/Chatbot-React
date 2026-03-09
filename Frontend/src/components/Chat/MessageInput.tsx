import SendButton from "../Common/Button";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
};

export default function ChatInput({
  value,
  onChange,
  onSend,
}: ChatInputProps) {
  return (
    <div className="px-8 py-4 border-t bg-white">
      <div className="flex items-center gap-4 max-w-5xl mx-auto">

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          placeholder="Type your message..."
          className="flex-1 px-5 py-3 border rounded-full text-sm
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <SendButton
          onClick={onSend}
          disabled={!value.trim()}
        />
      </div>
        <p className="text-xs text-gray-400 mt-2 text-center">
          AI may generate incorrect information. Verify important details.
        </p>
    </div>
  );
}
