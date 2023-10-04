import { useSearchParams } from "react-router-dom";
import CustomButton from "../CustomButton";

interface IShowMore {
    limit:number | string;
    isNext:boolean;

}

const ShowMore = ({limit,isNext}:IShowMore) => {
    //Arama Parametrelerine erişim sağlar 
    const [params,setParams]=useSearchParams()
    const handleNavigate= ()=>{
        const newLimit= Number(limit) + 5;

        // Eklenecek olan PARAMETRE belirleniyor
        params.set("limit",String(newLimit))

        // Burada da URL'e Parametreyi Gönderiyoruz.
        setParams(params)
    }
  return (
    <div className="w-full flex-center gap-5 mt-10">
{
    isNext &&
     <CustomButton title="Daha Fazla" handleClick={handleNavigate}/>
}
    </div>
  )
}

export default ShowMore