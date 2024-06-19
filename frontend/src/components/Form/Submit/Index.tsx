import ForgetPassword from "../../Link/ForgetPassword/Index";
import styles from "./index.module.scss";
import { FaArrowRightToBracket } from "react-icons/fa6";

const Submit = ({ text = "Entrar" }) => {
  return (
    <>
      <div className={styles.submit}>
        <FaArrowRightToBracket className={styles.icon} />
        <input type="submit" value={text} className={styles.btn__login} />
      </div>
      <ForgetPassword />
    </>
  );
};

export default Submit;
