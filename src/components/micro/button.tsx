import React, { FC, ReactNode } from "react";

const Button: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return (
    <button
      className={`title_element default-box  cursor-pointer custom-button
          px-[1.5em] py-3 text-white font-semibold rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
