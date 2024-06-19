import LoginForm from "../../Form/Login/Index";

import styles from "./index.module.scss";
import Logo from "../../../assets/images/logo.png";

import { IoLogoFacebook, IoLogoApple, IoLogoTwitter, IoLogoGoogle } from "react-icons/io5";
import ArrowBack from "../../Icons/ArrowBack";

type Props = {
  isDarkMode: boolean;
}

const RightSide = ({ isDarkMode }: Props) => {
  return (
    <div
      className={styles.background}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <div className={styles.container__mobile}>
        <ArrowBack
          divStyles={styles.container__mobile_arrow}
          iconStyles={styles.icon}
        />
        <p className={styles.container__mobile_text}>Criar conta</p>
      </div>
      <div className={styles.container}>
        <div className={styles.container__image}>
          <img src={Logo} alt="logo toolzz" className={styles.image} />
          <p>Toolzz®</p>
        </div>
        <p className={styles.container__text}>Criar conta</p>
      </div>
      <div className={styles.options__container}>
        <div className={styles.hello}>
          <h2
            className={styles.title}
            data-theme={isDarkMode ? "dark" : "light"}
          >
            Boas-vindas!
          </h2>
          <p
            className={styles.paragraph}
            data-theme={isDarkMode ? "dark" : "light"}
          >
            Entre utilizando uma das opções abaixo
          </p>
        </div>
        <div className={styles.options}>
          <div
            className={`${styles.box} ${styles.responsive}`}
            data-theme={isDarkMode ? "dark" : "light"}
          >
            <IoLogoGoogle className={`${styles.icon} ${styles.google}`}/><span>TZ</span>
          </div>
          <div
            className={styles.box}
            data-theme={isDarkMode ? "dark" : "light"}
          >
            <IoLogoFacebook className={styles.icon}></IoLogoFacebook>
          </div>
          <div
            className={styles.box}
            data-theme={isDarkMode ? "dark" : "light"}
          >
            <IoLogoApple className={styles.icon}></IoLogoApple>
          </div>
          <div
            className={`${styles.box} ${styles.responsive}`}
            data-theme={isDarkMode ? "dark" : "light"}
          >
            <IoLogoTwitter className={styles.icon}></IoLogoTwitter>
          </div>
        </div>
        <div className={styles.bars}>
          <span className={styles.bar}></span>
          <span className={styles.text}>ou</span>
          <span className={styles.bar}></span>
        </div>
      </div>
      <LoginForm isDarkMode={isDarkMode} />
    </div>
  );
};

export default RightSide;
