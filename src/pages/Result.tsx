import styled from "styled-components";
import Title from "../components/common/Title";
import HospitalItem from "../components/HospitalItem";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export interface Hospital {
  id: number;
  rank: number;
  name: string;
  distance: string;
  location: string;
  lat: number;
  lng: number;
  grade: number;
}
const data: Hospital[] = [
  {
    id: 1,
    rank: 1,
    name: "오름정형외과의원",
    distance: "13km",
    location: "충남 천안시 서북구 불당25로 176 율곡스퀘어 6층",
    lat: 36.816274,
    lng: 127.108932,
    grade: 4.5,
  },
  {
    id: 2,
    rank: 2,
    name: "서울프라임병원",
    distance: "10km",
    location: "충남 천안시 서북구 불당25로 226 골든스퀘어Ⅱ2층~4층",
    lat: 36.82096,
    lng: 127.109911,
    grade: 4.2,
  },
  {
    id: 3,
    rank: 3,
    name: "마디손정형외과병원",
    distance: "13km",
    location: "충남 천안시 서북구 불당34길 18",
    lat: 36.806313,
    lng: 127.106505,
    grade: 4,
  },
  {
    id: 4,
    rank: 4,
    name: "연세나무병원",
    distance: "3km",
    location: "충남 천안시 서북구 불당21로 67-18 7~9층 연세나무병원",
    lat: 36.814151,
    lng: 127.108735,
    grade: 3.8,
  },
  {
    id: 6,
    rank: 5,
    name: "쌍용메디컬의원",
    distance: "34km",
    location: "충남 천안시 서북구 월봉로 85 쌍용메디칼",
    lat: 36.798328,
    lng: 127.117961,
    grade: 3.5,
  },
  {
    id: 7,
    rank: 6,
    name: "쌍용메디컬의원",
    distance: "34km",
    location: "충남 천안시 서북구 월봉로 85 쌍용메디칼",
    lat: 36.798328,
    lng: 127.117961,
    grade: 3.5,
  },
  {
    id: 8,
    rank: 7,
    name: "쌍용메디컬의원",
    distance: "34km",
    location: "충남 천안시 서북구 월봉로 85 쌍용메디칼",
    lat: 36.798328,
    lng: 127.117961,
    grade: 3.5,
  },
  {
    id: 9,
    rank: 8,
    name: "쌍용메디컬의원",
    distance: "34km",
    location: "충남 천안시 서북구 월봉로 85 쌍용메디칼",
    lat: 36.798328,
    lng: 127.117961,
    grade: 3.5,
  },
];

function Result() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  useEffect(() => {
    setHospitals(data);
  }, []);
  return (
    <ResultStyle>
      <Title size="small" color="primary">
        병원 맛집
      </Title>
      <p>
        현재 위치와 가까우면서 내과의
        <br />
        후기가 가장 좋은 병원입니다
      </p>
      <div className="content">
        <ul>
          {hospitals.map((hospital) => (
            <React.Fragment key={hospital.id}>
              <HospitalItem key={hospital.id} hospital={hospital} />
            </React.Fragment>
          ))}
        </ul>
      </div>
      <Link to={"/"}>
        <Button size="large" schema="primary">
          처음으로 돌아가기
        </Button>
      </Link>
    </ResultStyle>
  );
}
const ResultStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  ul {
    overflow: hidden;
    max-height: 400px;
    overflow-y: auto;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 10px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
  }
`;

export default Result;
