import styles from "./index.module.scss";
import { IconType } from "react-icons";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  Icon: IconType
}

const Box = ({ label, type = "text", placeholder, name, Icon }: Props) => {
  return (
    <div className={styles.box}>
      <label className={styles.label}>{label}</label>
      <div className={styles.input}>
        <Icon className={styles.icon} />
        <input
          className={styles.field}
          type={type}
          placeholder={placeholder}
          name={name}
        />
      </div>
    </div>
  );
};

export default Box;
