import LoginForm from "../../Form/Index";

import styles from "./index.module.scss";
import Logo from "../../../assets/images/logo.png";

import {
  IoLogoFacebook,
  IoLogoApple,
  IoLogoTwitter,
  IoLogoGoogle,
} from "react-icons/io5";
import ArrowBack from "../../Icons/ArrowBack";
import Option from "../../Icons/Option";

type Props = {
  isDarkMode: boolean;
};

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
          <Option
            data-theme={isDarkMode ? "dark" : "light"}
            Icon={IoLogoGoogle}
            divStyle={`${styles.box} ${styles.responsive}`}
            iconStyle={`${styles.icon} ${styles.google}`}
          >
            <span>TZ</span>
          </Option>
          <Option
            data-theme={isDarkMode ? "dark" : "light"}
            divStyle={styles.box}
            iconStyle={styles.icon}
            Icon={IoLogoFacebook}
          />
          <Option
            data-theme={isDarkMode ? "dark" : "light"}
            divStyle={styles.box}
            iconStyle={styles.icon}
            Icon={IoLogoApple}
          />
          <Option
            data-theme={isDarkMode ? "dark" : "light"}
            divStyle={`${styles.box} ${styles.responsive}`}
            iconStyle={styles.icon}
            Icon={IoLogoTwitter}
          />
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
