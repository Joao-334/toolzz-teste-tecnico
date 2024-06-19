import styles from "./index.module.scss";

type Props = {
  checkboxName: string;
  label: string;
  isDarkMode: boolean;
  responsiveDisplay: boolean;
};

const Checkbox = ({
  isDarkMode,
  checkboxName,
  label,
  responsiveDisplay = true,
}: Props) => {
  return (
    <div className={`${styles.checkbox} ${responsiveDisplay ? styles.responsive : ""}`}>
      <div className={styles.input}>
        <input className={styles.field} type="checkbox" name={checkboxName} />
      </div>
      <label
        className={styles.label}
        data-theme={isDarkMode ? "dark" : "light"}
      >
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
