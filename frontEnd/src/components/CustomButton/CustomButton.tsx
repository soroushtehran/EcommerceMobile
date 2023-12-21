import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textSize?: string;
  className?: string;
  href?: string;
  children?: ReactNode;
}

export default function CustomButton({
  textSize,
  className,
  href,
  children,
  ...otherButtonProps
}: CustomButtonProps) {
  return (
    // <a className={``} {...otherDivProps}>
    // <motion.span>
    //   {href ? (
    //     <Link to={href} className="w-full h-full inline-block">
    //       {children}
    //     </Link>
    //   ) : (
    //     <>{children}</>
    //   )}
    // </motion.span>
    // </a>
    <button
      {...otherButtonProps}
      className={`${className}  cursor-pointer rounded-md mx-2 font-bold`}
    >
      {href ? (
        <Link to={'/'} className="w-full h-full inline-block">
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </button>
  );
}
