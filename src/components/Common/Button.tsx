type SendButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export default function SendButton({
  onClick,
  disabled = false,
}: SendButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2 rounded-full text-sm font-medium transition
        ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700 active:scale-95"
        }`}
    >
      Send
    </button>
  );
}
