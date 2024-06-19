import styles from "./index.module.scss";

type Props = {
    checkboxName: string
    label: string;
    isDarkMode: boolean;
};

const Checkbox = ({ isDarkMode, checkboxName, label }: Props) => {
  return (
    <div className={styles.checkbox}>
      <div className={styles.input}>
        <input className={styles.field} type="checkbox" name={checkboxName} />
      </div>
      <label className={styles.label} data-theme={isDarkMode ? "dark" : "light"}>{label}</label>
    </div>
  );
};

export default Checkbox;
