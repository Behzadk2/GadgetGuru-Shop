import { ComponentProps } from "react";

type tButton = ComponentProps<'button'>;
function Button({children,...rest}: tButton) {
   
  return (
    <button {...rest}>{children}</button>
  )
}

export default Button
