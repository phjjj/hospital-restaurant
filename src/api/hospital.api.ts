import axios from "axios";
import { Hospital } from "../pages/Result";

export const getHospital = async (yadmNm: string, clCd?: string, dgsbjtCd?: string) => {
  const latitude = localStorage.getItem("Latitude");
  const longitude = localStorage.getItem("Longitude");

  let url = `${import.meta.env.VITE_SERVICE_URL}?serviceKey=${
    import.meta.env.VITE_SERVICE_KEY
  }&yadmNm=${yadmNm}&pageNo=1&numOfRows=50&xPos=${longitude}&yPos=${latitude}&radius=20000`;

  if (clCd) {
    url += `&clCd=${clCd}`;
  }

  if (dgsbjtCd) {
    url += `&dgsbjtCd=${dgsbjtCd}`;
  }

  const response: Hospital[] = (await axios.get(url)).data.response.body.items.item;

  return response;
};
