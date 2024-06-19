import { IoIosArrowBack } from "react-icons/io";

type Props = {
    divStyles: string;
    iconStyles: string;
}

const ArrowBack = ({ divStyles, iconStyles }: Props) => {
  return (
    <div className={divStyles}>
        <IoIosArrowBack className={iconStyles} />
    </div>
  )
}

export default ArrowBack;