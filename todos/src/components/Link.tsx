import React, { useCallback } from "react";

interface LinkProps {
  selected: boolean;
  text: string;
  onClick: () => void;
}

const Link: React.FC<LinkProps> = ({ selected, text, onClick }) => {
  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      onClick();
    },
    [onClick]
  );

  if (selected) {
    return <span>{text}</span>;
  }
  return (
    <a href="#" onClick={handleLinkClick}>
      {text}
    </a>
  );
};

export default Link;
