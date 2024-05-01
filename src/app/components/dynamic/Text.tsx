import React from "react";
interface IText {
  children: React.ReactNode;
}
const Text: React.FC<IText> = ({ children }) => {
  return <div>{children}</div>;
};

export default Text;
