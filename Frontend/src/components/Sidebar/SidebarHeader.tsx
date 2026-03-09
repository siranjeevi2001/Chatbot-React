import { Menu } from "lucide-react";

type SidebarHeaderProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const SidebarHeader = ({ isOpen, onToggle }: SidebarHeaderProps) => {
  return (
    <div
      className={`
        p-4 border-b border-gray-700
        flex items-center
        ${isOpen ? "justify-between" : "justify-center"}
      `}
    >
      {/* Title (only when expanded) */}
      {isOpen && (
        <h1 className="text-xl font-semibold whitespace-nowrap">
          ChatBot AI
        </h1>
      )}

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="text-gray-400 hover:text-white transition"
        aria-label="Toggle Sidebar"
      >
        <Menu size={20} />
      </button>
    </div>
  );
};

export default SidebarHeader;