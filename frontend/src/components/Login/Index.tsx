import LeftSide from "./LeftSide/Index";
import RightSide from "./RightSide/Index";

export type Props = {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
};

const Login = ({ isDarkMode, setDarkMode }: Props) => {
  return (
    <>
      <LeftSide setDarkMode={setDarkMode} isDarkMode={isDarkMode} />
      <RightSide isDarkMode={isDarkMode} />
    </>
  );
};

export default Login;
