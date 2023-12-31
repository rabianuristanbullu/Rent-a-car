import { ICarProps } from "../../types";
import { generateImage } from "../../utils";

interface IDetailModalProps {
  isOpen: boolean;
  closeModal: () => void;
  car: ICarProps;
}

const DetailModal = ({ isOpen, closeModal, car }: IDetailModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center p-4">
          <div className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto ">
            {/* kapatma butonu */}
            <button
              onClick={closeModal}
              className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
            >
              <img src="/close.svg" />
            </button>
            {/* resimler */}

            <div className="flex-1 flex-col gap-3">
              {/* büyükk */}
              <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                <img
                  src={generateImage(car)}
                  className="h-full mx-auto object-contain"
                />
              </div>
              {/* küçük resimler */}
              <div className="flex gap-3">
                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    src={generateImage(car, "29")}
                    className="h-full mx-auto object-contain"
                  />
                </div>
                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    src={generateImage(car, "33")}
                    className="h-full mx-auto object-contain"
                  />
                </div>
                <div className="relative w-full h-24 bg-primary-blue-100 rounded-lg">
                  <img
                    src={generateImage(car, "13")}
                    className="h-full mx-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* bilgiler */}

            <div className="mt-3 flex-wrap gap-4">
              {
                //objeyi dizi yapmamızı sağlar => object.entries()
                Object.entries(car).map(([key, value]) => (
                  <div className="flex justify-between w-full text-right">
                    <h4 className="text-gray capitalize ">
                      {key.split("_").join(" ")}:
                    </h4>
                    <p className="text-primary-blue font-semibold">{value}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailModal;
