import { useState, useMemo } from "react";
import Select from "react-select";
import { makes } from "../../constants";
import { IOption } from "../../types";
import SearchButton from "./SearchButton";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [make, setMake] = useState("");
  const [model, setModal] = useState("");
  const [params,setParams]=useSearchParams()

  // Sürekli renderın önüne geçip ön bellekte saklanıyor, performansı arttırıyor.
  const newMakes = useMemo(
    () =>
      makes.map((item) => ({
        value: item,
        label: item,
      })),
    [makes]
  );

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (make  && model === "") {
      setParams({make:make.toLowerCase()})

    } else if (make  && model ) {
      setParams({make:make.toLowerCase(), model:model.toLowerCase()})
    } else {
      alert("Lütfen Marka Seçinizz...")
    }
  };

  return (
    <form onSubmit={handleSubmit} className="searchbar gap-3">
      {/* marka */}
      <div className=" searchbar__item text-black">
        <Select
          className="w-full"
          options={newMakes}
          onChange={(e: IOption | null) => e && setMake(e.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      {/* model */}
      <div className="searchbar__item">
        <img width={25} src="/model-icon.png" className="absolute ml-4" />
        <input
          className="searchbar__input text-black rounded"
          type="text"
          placeholder="Civic"
          onChange={(e) => setModal(e.target.value)}
        />
        <SearchButton styling="sm:hidden" />
      </div>
      <SearchButton styling="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
