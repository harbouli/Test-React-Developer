import React from "react";
import clsx from "clsx";

type CardProps = React.ComponentPropsWithRef<"div">;

const MainCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "py-5 px-5 shadow-md bg-white border border-gray-200 rounded-lg",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

export default MainCard;
