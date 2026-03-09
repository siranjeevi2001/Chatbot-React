import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "../Sidebar/Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

// const MainLayoutGuess = ({ children }: MainLayoutProps) => {
//   return (
//     <div className="h-screen flex bg-gray-100 overflow-hidden">

//       {/* Sidebar */}
//       <Sidebar />

//       {/* Right Section */}
//       <div className="flex flex-col flex-1 ml-72 h-screen">

//         {/* Header */}
//         <Header />

//         {/* Main Content */}
//         <main className="flex-1">
//           {children}
//         </main>

//       </div>
//     </div>
//   );
// };

// export default MainLayoutGuess;


const MainLayoutGuess = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-screen flex overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex flex-col flex-1 ml-72">

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="flex-1 overflow-hidden">
          {children}
        </main>

      </div>
    </div>
  );
};

export default MainLayoutGuess;