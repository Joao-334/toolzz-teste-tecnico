import styles from "./index.module.scss";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaRegMoon } from "react-icons/fa6";

const LoginPageLeftSide = () => {
  return (
    <div className={styles.background}>
        <div className={styles.background__icons}>
          <div className={styles.icon__container_arrow}><IoIosArrowBack className={styles.arrow}/></div>
          <div className={styles.icon__container_moon}><FaRegMoon className={styles.moon}/></div>
        </div>
        <div className={styles.about__platform}>
            <span className={styles.about__platform_tag}>Cursos</span>
            <h3 className={styles.about__platform_title}>Plataforma de cursos completa</h3>
            <p className={styles.about__platform_text}>
              Lorem ipsum nisl etiam himenaeos ligula augue vehicula gravida tincidunt, etiam magna sapien gravida sodales sed vel pulvinar 
              suspendisse, morbi mi proin urna ornare posuere donec aptent. orci vivamus primis fusce lacinia libero nostra aliquam vestibulum
            </p>
            <div className={styles.about__platform_icons}>
              <div className={styles.about__platform_icons_bars}>
                <span className={`${styles.bar} ${styles.enabled}`}></span><span className={styles.bar}></span><span className={styles.bar}></span>
              </div>
              <div className={styles.about__platform_icons_arrows}>
                <IoIosArrowBack className={styles.arrow}/>
                <IoIosArrowForward className={`${styles.arrow} ${styles.enabled}`}/>
              </div>
            </div>
        </div>
    </div>  
  )
}

export default LoginPageLeftSide;