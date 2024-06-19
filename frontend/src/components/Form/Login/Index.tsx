import styles from "./index.module.scss";

import { FaRegUser } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";
import Captcha from "../Captcha/Index";
import Submit from "../Submit/Index";
import Checkbox from "../../Checkbox/Index";
import Box from "../../Box/Index";

type Props = {
  isDarkMode: boolean;
};

const LoginForm = ({ isDarkMode }: Props) => {
  return (
    <form className={styles.form}>
      <Box
        label="Usuário"
        name="username"
        placeholder="aluno290_1u"
        Icon={FaRegUser}
        type="text"
      />
      <Box
        label="Senha"
        name="password"
        placeholder="********"
        Icon={IoLockClosedOutline}
        type="text"
      />
      <Checkbox checkboxName="holdConnection" label="Manter conectado" isDarkMode={isDarkMode}/>
      <Captcha />
      <Submit />
    </form>
  );
};

export default LoginForm;
