import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Hero from "../components/Hero";

import { fetchCars } from "../utils";
import { ICarProps } from "../types";
import Card from "../components/Card";
import ShowMore from "../components/Card/ShowMore";
import SearchBar from "../components/Filters/SearchBar";
import CustomFilter from "../components/Filters/CustomFilter";
import { fuels, years } from "../constants";


const MainPage = () => {
  const [cars, setCars] = useState<ICarProps[]>();
  const [params,setParams]=useSearchParams()

  const limit= Number(params.get('limit')) || 5;

  // parametreler değiştikçe yeniden render edelim.

  useEffect(() => {

    //url içindeki tüm parametreler objeye aktarılıyor:

    const paramsObj = Object.fromEntries(params.entries())

    fetchCars(paramsObj)
      .then((data: ICarProps[]) => setCars(data))
      .catch(() =>
        alert(
          "Üzgünüm veriler çekilirken bir hata oluştu, daha sonra tekrar deneyin..."
        )
      );
  }, [params]);

  // VERİ GELDİ Mİ CONTROLL
  const isDataEmpty: boolean = !Array.isArray(cars) || cars.length < 1 || !cars;

  return (
    <div className="pt-40">
      {/* ÜST */}
      <Hero />
     
      {/* KATALOG */}
      <div className="mt-12 padding-x padding-y max-width">
        {/* BAŞLIK */}
        <section className="home__text-container">
          <h1 className="text-4xl font-extrabold ">Araba Kataloğu</h1>
          <p>Beğenebileceğin Arabaları Keşfet</p>
        </section>

        {/*filtreee  */}
        <section className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter title="Yakıt Tipi" options={fuels}/>
            <CustomFilter title="Üretim Yılı" options={years}/>
          </div>
        </section>

        {/* araba listesi */}
        
          {isDataEmpty ? (
            <div className="home__error-container">
              <h2>Üzgünüz Herhangi Bir Sonuç Bulunamadı</h2>
            </div>
          ) : (
            <>
              <section>
              <div className="home__cars-wrapper">
                
                  {cars?.map((car,i) => (
                    <Card key={i} car={car}/>
                  ))}
                
              </div>
              </section>
            </>
          )}
        

        {/* daha fazla yüklee */}
        <ShowMore limit={limit} isNext={limit < 30}/>
      </div>
    </div>
  );
};

export default MainPage;
