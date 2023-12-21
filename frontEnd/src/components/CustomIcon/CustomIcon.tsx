import React, { HTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface CustomIconProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode | null;
  textSize?: string;
  className?: string;
  href?: string;
}

export default function CustomIcon({ icon, textSize, className, href, ...otherDivProps }: CustomIconProps) {
  return (
    <div className={`${className} ${textSize ? textSize : "text-2xl"}`} {...otherDivProps}>
      {href ?
        <Link to={href} className="w-full h-full block cursor-pointer">{icon}</Link> :
        <span>{icon}</span>
      }
    </div>
  );
}