import { useState } from "react";
import { ICarProps } from "../../types";
import CustomButton from "../CustomButton";
import Carinfo from "./CarInfo";
import DetailModal from "./DetailModal";
import { generateImage } from "../../utils";
import {motion} from "framer-motion"
type CardProps = {
  car: ICarProps;
};

const Card = ({ car }: CardProps) => {
  const [isOpened,setIsOpened]=useState<boolean>(false)
  return (
    <motion.div 
    initial={{scale:0.5}}
    whileInView={{scale:1}}
    className="car-card group">
      {/* BAŞLIK */}
      <h2 className="car-card__content-title">
        {car.make} {}car.model
      </h2>
      {/* fiyat */}
      <p className="text-[32px] flex mt-6">
        <span className="self-start text-[14px] font-semibold">TL</span>
        {Math.round(Math.random() * 2000) + 500}
        <span className="self-end font-medium text-[14px]">/Gün</span>
      </p>
      {/* resim */}
      <div className="w-full  h-40 my-3 object-contain">
        <img src={generateImage(car)} className="object-contain w-full h-full" />
      </div>

      {/* bilgiler */}

      <div className="w-full relative mt-2">
        <div className="group-hover:invisible mt-2 flex justify-between text-gray w-full">
          <Carinfo
            icon="/steering-wheel.svg"
            title={car.transmission === "a" ? "Otomatik" : "Manuel"}
          />
          <Carinfo icon="/steering-wheel.svg" title={car.drive?.toUpperCase()} />
          <Carinfo icon="/steering-wheel.svg" title={car.city_mpg + " MPG"} />
        </div>

        <div className="car-card__btn-container">
          <CustomButton
          handleClick={()=>setIsOpened(true)}
            rIcon="/right-arrow.svg"
            title="Daha Fazla"
            designs="w-full py-[16px] "
          />
        </div>
      </div>
{/* detayyy */}
      <DetailModal isOpen={isOpened} closeModal={()=>setIsOpened(false)} car={car}/>
    </motion.div>
  );
};

export default Card;
