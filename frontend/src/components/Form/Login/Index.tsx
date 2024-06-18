import styles from "./index.module.scss";

import { FaRegUser } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";

const LoginForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.box}>
        <label className={styles.label}>Usuário</label>
        <div className={styles.input}>
          <FaRegUser className={styles.icon} />
          <input
            className={styles.field}
            type="text"
            placeholder="aluno290_1u"
            name="username"
          />
        </div>
      </div>
      <div className={styles.box}>
        <label className={styles.label}>Senha</label>
        <div className={styles.input}>
          <IoLockClosedOutline className={styles.icon} />
          <input
            className={styles.field}
            type="text"
            placeholder="********"
            name="password"
          />
        </div>
      </div>
      <div className={styles.checkbox}>
        <div className={styles.input}>
            <input
              className={styles.field}
              type="checkbox"
              name="holdConnection"
            />
          </div>
        <label className={styles.label}>Manter conectado</label>
      </div>
    </form>
  );
};

export default LoginForm;
