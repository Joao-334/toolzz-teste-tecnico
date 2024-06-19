/* eslint-disable @typescript-eslint/ban-types */
import InputCheckbox from "../Checkbox/Index";
import ForgetPassword from "../ForgetPassword/Index";
import styles from "./index.module.scss";
import { FaArrowRightToBracket } from "react-icons/fa6";

type Props = {
  text: string;
  isDarkMode: boolean;
  procedLogin: Function;
}

const SubmitButton = ({ text = "Entrar", isDarkMode, procedLogin }: Props) => {

  return (
    <>
      <div className={styles.submit}>
        <FaArrowRightToBracket className={styles.icon} />
        <button className={styles.btn__login} onClick={(e) => procedLogin(e)}>{text}</button>
      </div>
      <InputCheckbox
        checkboxName="holdConnection"
        label="Manter conectado"
        isDarkMode={isDarkMode}
        responsiveDisplay={true}
      />
      <ForgetPassword />
    </>
  );
};

export default SubmitButton;
