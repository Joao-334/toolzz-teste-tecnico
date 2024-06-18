import LoginForm from "../../Form/Login/Index";

import styles from "./index.module.scss";
import Logo from "../../../assets/images/logo.png";

import { IoLogoFacebook, IoLogoApple, IoLogoTwitter } from "react-icons/io5";

const RightSide = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <img src={Logo} alt="logo toolzz" className={styles.container__image} />
        <p className={styles.container__text}>Criar conta</p>
      </div>
      <div className={styles.container__hello}>
        <div className={styles.hello}>
          <h2 className={styles.title}>Boas-vindas!</h2>
          <p className={styles.paragraph}>
            Entre utilizando uma das opções abaixo
          </p>
        </div>
        <div className={styles.options}>
          <div className={styles.box}>
            <span>TZ</span>
          </div>
          <div className={styles.box}>
            <IoLogoFacebook></IoLogoFacebook>
          </div>
          <div className={styles.box}>
            <IoLogoApple></IoLogoApple>
          </div>
          <div className={styles.box}>
            <IoLogoTwitter></IoLogoTwitter>
          </div>
        </div>
        <div className={styles.bars}>
          <span className={styles.bar}></span>
          <span className={styles.text}>ou</span>
          <span className={styles.bar}></span>
        </div>
      </div>
      <LoginForm />
    </div>
  );
};

export default RightSide;
