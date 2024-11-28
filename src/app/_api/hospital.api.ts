"use client";
import axios from "axios";
import { FormatHospital, Hospital } from "../_model/hospital.model";
import { useLocationStore } from "../_store/useLocationStore";

export const getHospitals = async (
  yadmNm: string,
  clCd?: string,
  dgsbjtCd?: string,
) => {
  const { latitude, longitude } = useLocationStore();
  console.log(latitude, longitude);

  let url = `${process.env.NEXT_PUBLIC_SERVICE_URL}?serviceKey=${process.env.NEXT_PUBLIC_SERVICE_KEY}&yadmNm=${yadmNm}&pageNo=1&numOfRows=10&xPos=${longitude}&yPos=${latitude}&radius=20000`;

  if (clCd) {
    url += `&clCd=${clCd}`;
  }

  if (dgsbjtCd) {
    url += `&dgsbjtCd=${dgsbjtCd}`;
  }

  const response: Hospital[] = (await axios.get(url)).data.response.body.items
    .item;

  // 데이터 구조 변경
  const formatData: FormatHospital[] = response.map((hospital) => {
    return {
      yadmNm: hospital.yadmNm,
      addr: hospital.addr,
      telno: hospital.telno,
      XPos: hospital.XPos,
      YPos: hospital.YPos,
      drTotCnt: hospital.drTotCnt,
      distance: Math.floor(parseInt(hospital.distance, 10) / 1000) + "km",
    };
  });

  return formatData;
};
