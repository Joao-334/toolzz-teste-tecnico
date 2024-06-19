import styles from "./index.module.scss";
import { IconType } from "react-icons";

type Props = {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  Icon: IconType;
  setAnything: React.Dispatch<React.SetStateAction<string>>;
};

const Box = ({
  label,
  type = "text",
  placeholder,
  name,
  Icon,
  setAnything,
}: Props) => {
  return (
    <div className={styles.box}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <div className={styles.input}>
        <Icon className={styles.icon} />
        <input
          name={name}
          onChange={(e) => setAnything(e.target.value)}
          className={styles.field}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Box;
