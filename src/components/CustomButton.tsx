import { IButtonProps } from "../types";

const CustomButton = ({
  title,
  designs,
  btnType,
  handleClick,
  rIcon
}: IButtonProps) => {
  return (
    <button
      onClick={handleClick}
      disabled={false}
      type="submit"
      className={`custom-btn transition duration-500 hover:bg-blue-800 cursor-pointer bg-primary-blue rounded-full text-white ${designs}`}
    >
      <span className="flex-1">{title}</span>
      {rIcon && (
        <div className="relative w-6 h-l">
          <img src={rIcon} />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
