import React, { useState } from "react";

export const ReadMore = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, maxLength) : text}
      <span
        className="read-or-hide"
        onMouseEnter={toggleReadMore}
        onMouseLeave={toggleReadMore}
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
