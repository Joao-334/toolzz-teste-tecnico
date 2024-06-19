import React, { SetStateAction } from "react";
import { FaRegMoon } from "react-icons/fa6";

type Props = {
  divStyles: string;
  iconStyles: string;
  isDarkMode: boolean;
  setDarkMode: React.Dispatch<SetStateAction<boolean>>;
};

const Moon = ({ divStyles, iconStyles, isDarkMode, setDarkMode }: Props) => {
  return (
    <div
      className={divStyles}
      data-theme={isDarkMode ? "dark" : "light"}
      onClick={() => setDarkMode(!isDarkMode)}
    >
      <FaRegMoon className={iconStyles} />
    </div>
  );
};

export default Moon;
