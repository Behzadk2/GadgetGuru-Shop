import { ComponentProps } from "react";
type tVariant = "primary" | "secondary" | "danger" | "warning" | "success" ; 
type tButton = ComponentProps<'button'> & {variant : tVariant;}
function Button({children , variant , ...rest}: tButton) {
   
  return (
    <button style={{...checkVariant(variant)}} {...rest}>{children}</button>
  )
}

export default Button

function checkVariant( variant: tVariant){
  if(variant === "primary") {return{backgrounColor : "blue", color:"white"}}
  else if(variant === "secondary") {return{backgrounColor : "gray", color:"white"}}
  else  if(variant === "danger") {return{backgrounColor : "red", color:"black"}}
  else if(variant === "warning") {return{backgrounColor : "yellow", color:"white"}}
  else  if(variant === "success") {return{backgrounColor : "green", color:"white"}}

}