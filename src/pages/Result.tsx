import styled from "styled-components";
import Title from "../components/common/Title";
import HospitalItem from "../components/Hospitaltem";
import Button from "../components/common/Button";
import { Link, useLocation } from "react-router-dom";
import { useHospitals } from "../hooks/useHospital";
import Loading from "../components/common/Loading";

function Result() {
  const location = useLocation();
  const department = location.state;

  const { hospitals, loading } = useHospitals(
    department.name,
    department.clCd,
    department.dgsbjtCd
  );

  if (loading) {
    return (
      <ResultStyle>
        <Loading />
      </ResultStyle>
    );
  }

  return (
    <>
      <ResultStyle>
        <Title size="small" color="primary">
          병원 맛집
        </Title>
        <p>
          현재 위치와 가까우면서 {department.name}의
          <br />
          후기가 가장 좋은 병원입니다
        </p>
        <div className="content">
          <ul>
            {hospitals &&
              hospitals.map((hospital, idx) => (
                <HospitalItem key={idx} hospital={hospital} />
              ))}
          </ul>
        </div>
        <Link to={"/"}>
          <Button size="large" schema="primary">
            처음으로 돌아가기
          </Button>
        </Link>
      </ResultStyle>
    </>
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
