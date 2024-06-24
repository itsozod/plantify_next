import React, { CSSProperties, FC, ReactNode } from "react";

// Define the props interface
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  className?: string;
  style?: CSSProperties;
}

// Define the Button component
export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
  style,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};
