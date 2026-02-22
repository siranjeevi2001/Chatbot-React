import { 
  LogOut,
  User
} from "lucide-react";



interface UserProfileProps {
  user: {
    name: string;
    email: string;
  };
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
      <div className="p-4 border-t border-gray-700">
        <div className="flex items-center justify-between bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition cursor-pointer">
          
          {/* Left Side - Avatar + Name */}
          <div className="flex items-center gap-3">
            
            {/* Avatar */}
            <div className="relative">
              <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center juxstify-center">
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
  )
}

export default UserProfile