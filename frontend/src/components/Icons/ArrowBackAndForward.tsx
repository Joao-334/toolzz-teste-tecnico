import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Props = {
  divStyles: string;
  arrowBackStyle: string;
  arrowForwardStyle: string;
};

const ArrowBackAndForward = ({
  divStyles,
  arrowBackStyle,
  arrowForwardStyle,
}: Props) => {
  return (
    <div className={divStyles}>
      <IoIosArrowBack className={arrowBackStyle} />
      <IoIosArrowForward className={arrowForwardStyle} />
    </div>
  );
};

export default ArrowBackAndForward;
