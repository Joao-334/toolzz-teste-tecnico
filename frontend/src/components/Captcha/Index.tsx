import styles from "./index.module.scss";

import CaptchaImage from "../../assets/images/captcha.png";

const Captcha = () => {
  return (
    <div className={styles.background}>
      <div className={styles.captcha}>
        <div className={styles.checkbox}>
          <div className={styles.checkbox}></div>
          <p className={styles.text}>I am human</p>
        </div>
        <div className={styles.container__image}>
            <img src={CaptchaImage} alt={CaptchaImage} className={styles.image} />
            <p className={styles.text}>Privacy - Terms</p>
        </div>
      </div>
    </div>
  );
};

export default Captcha;
