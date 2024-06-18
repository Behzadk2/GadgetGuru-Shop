import { ComponentProps } from "react";
type TVariant = "primary" | "secondary" | "danger" | "warning" | "success";

type TButton = ComponentProps<"button"> & {
  variant?: TVariant;
};

function Button({ children, variant, style, ...rest }: TButton) {
  return (
    <button {...rest} style={{ borderRadius: "6px", padding: "4px 8px", ...style, ...checkvariant(variant) }}>
      {children}
    </button>
  );
}

export default Button;

function checkvariant(variant?: TVariant) {
  if (variant === "primary") {
    return { backgroundColor: "#008bff", color: "white" };
  } else if (variant === "secondary") {
    return { backgroundColor: "gray", color: "black" };
  } else if (variant === "danger") {
    return { backgroundColor: "red", color: "white" };
  } else if (variant === "success") {
    return { backgroundColor: "green", color: "white" };
  } else if (variant === "warning") {
    return { backgroundColor: "yellow", color: "white" };
  }
}
