"use client";
import styled from "styled-components";
import { getHospitals } from "../../_api/hospital.api";
import { getDepartment } from "../../_utils/getDepartmet";
import HospitalItem from "./Hospitaltem";
import { getRanking } from "../../_api/openai.api";

export default async function HospitalList({
  departmentId,
}: {
  departmentId: string;
}) {
  const department = getDepartment(parseInt(departmentId));
  const hospitalsData = await getHospitals(
    department.yadmNm,
    department.clCd,
    department.dgsbjtCd,
  );
  const rankedHospitals = await getRanking(hospitalsData);

  return (
    <HospitalListStyle>
      {rankedHospitals.map((hospital, index) => (
        <HospitalItem key={index} hospital={hospital} />
      ))}
    </HospitalListStyle>
  );
}

const HospitalListStyle = styled.ul`
  overflow: hidden;
  max-height: 400px;
  overflow-y: auto;
  display: inline-flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;
