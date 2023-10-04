import { useSearchParams } from "react-router-dom";
import { IOption } from "../../types";
import { useState, useEffect } from "react";
import Select from "react-select";

interface IfilterProps {
  title: string;
  options: IOption[];
}

const CustomFilter = ({ title, options }: IfilterProps) => {
  const [selected, setSelected] = useState<IOption>(options[0]);
  const [params, setParams] = useSearchParams();

 
  

  useEffect(() => {
    const key = title === "Yakıt Tipi" ? "fuel" : "year";

    if(selected.value){
      params.set(key,selected.value.toLowerCase())
    }else{
      params.delete(key)
    }

    setParams(params)
  },[selected]);

  return (
    <div>
      <Select
        className="text-black min-w-[100px]"
        placeholder={title}
        options={options}
        onChange={(e: IOption | null) => e && setSelected(e)}
      />
    </div>
  );
};

export default CustomFilter;
