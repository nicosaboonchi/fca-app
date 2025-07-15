import * as React from "react";

const Card: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export { Card };
