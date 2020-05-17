import React from 'react';
import classes from './Button.module.scss';
import { Link } from 'gatsby';
const Button = (props) => {

  let buttonClasses = [classes.Button];

  switch(props.type){
    case "successOutline":{
      buttonClasses.push(classes.successOutline)
      break;
    }
    case "secondaryOutline":{
      buttonClasses.push(classes.secondaryOutline)
      break;
    }
    default:
      
    
  }
  return (
    <Link to={props.link}  className={buttonClasses.join(" ")} style={props.centered ? {margin: "0 auto"} : null}>{props.children}</Link>
  )
}

export default Button
