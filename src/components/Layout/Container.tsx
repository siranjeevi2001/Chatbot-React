// src/components/layout/Container.tsx
// import { ReactNode } from "react";
import type { ReactNode } from "react";


interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {children}
    </div>
  );
};

export default Container;
