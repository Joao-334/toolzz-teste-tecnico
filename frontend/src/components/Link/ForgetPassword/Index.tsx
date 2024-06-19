import styles from "./index.module.scss";

const ForgetPassword = () => {
  return (
    <p className={styles.paragraph}>
      Esqueceu sua senha? <span className={styles.span}>Recuperar senha</span>
    </p>
  );
};

export default ForgetPassword;
