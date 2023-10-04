// Apiye istek atacak ve isteği döndürecek bir fonksiyon yazıp bunu useeffect içinde alacağız

import { colors } from "../constants";
import { ICarProps } from "../types";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d4d2d3dfadmshf9dc48e96cfef32p105891jsneac5523a880e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

interface fetchParams {
  make?: string;
  model?: string;
  limit?: string;
  year?: string;
  fuel?: string;
}

export async function fetchCars(filters: fetchParams) {
  const { make = "bmw", model = "", limit="5", year="", fuel="" } = filters;
  const res = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?&limit=${limit}&make=${make}&model=${model}&year=${year}&fuel_type=${fuel}`,
    options
  );
  const data = await res.json();
  console.log(data);
  return data;
}

export const generateImage = (car: ICarProps, angle?: string): string => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", car.make);
  url.searchParams.append("modelFamily", car.model.split(" ")[0].split("/")[0].split(".")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  const i = Math.round(Math.random() * colors.length);

  url.searchParams.append("paintId", colors[i]);
  if (angle) {
    url.searchParams.append("angle", angle);
  }

  //oluşturulan url return edilmeli.
  return url.href;
};
