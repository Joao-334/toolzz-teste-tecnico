import styles from "./index.module.scss";

import ArrowBack from "../../Icons/ArrowBack";
import Moon from "../../Icons/Moon";
import ArrowBackAndForward from "../../Icons/ArrowBackAndForward";

export type baseProps = {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isDarkMode: boolean;
};

const LeftSide = ({ setDarkMode, isDarkMode }: baseProps) => {
  return (
    <div className={styles.background}>
      <div className={styles.background__icons}>
        <ArrowBack
          divStyles={styles.icon__container_arrow}
          iconStyles={styles.arrow}
        />
        <Moon
          divStyles={styles.icon__container_moon}
          iconStyles={styles.moon}
          isDarkMode={isDarkMode}
          setDarkMode={setDarkMode}
        />
      </div>
      <div className={styles.about__platform}>
        <span className={styles.about__platform_tag}>Cursos</span>
        <h3 className={styles.about__platform_title}>
          Plataforma de cursos completa
        </h3>
        <p className={styles.about__platform_text}>
          Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida
          tincidunt, etiam magna sapien gravida sodales sed vel pulvinar
          suspendisse, morbi mi proin urna ornare posuere donec aptent. orci
          vivamus primis fusce lacinia libero nostra aliquam vestibulum
        </p>
        <div className={styles.about__platform_icons}>
          <div className={styles.about__platform_icons_bars}>
            <span className={`${styles.bar} ${styles.enabled}`}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </div>
          <ArrowBackAndForward
            divStyles={styles.about__platform_icons_arrows}
            arrowBackStyle={styles.arrow}
            arrowForwardStyle={`${styles.arrow} ${styles.enabled}`}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
