import React from "react";
import { IconType } from "react-icons";

type Props = {
  Icon: IconType;
  children?: React.ReactNode;
  divStyle: string;
  iconStyle: string;
};

const Option = ({ Icon, children, divStyle, iconStyle }: Props) => {
  return (
    <div className={divStyle}>
      <Icon className={iconStyle} />
      {children && ( children )}
    </div>
  );
};

export default Option;
