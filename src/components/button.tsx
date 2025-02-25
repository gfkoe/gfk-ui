import * as React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const defaultVar = `border border-black border-solid rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 h-10 ${className}`;
  return <button className={defaultVar} ref={ref} {...props} />;
});
Button.displayName = "Button";
export { Button };
