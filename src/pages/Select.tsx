import styled from "styled-components";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import DepartmentItem from "../components/DepartmentItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface Department {
  id: number;
  clCd?: string; // 종별 코드
  dgsbjtCd?: string; // 진료 과목 코드
  name: string;
}
const departments = [
  { id: 0, clCd: "31", dgsbjtCd: "01", name: "내과" },
  { id: 1, clCd: "31", dgsbjtCd: "02", name: "신경과" },
  { id: 2, clCd: "31", dgsbjtCd: "03", name: "정신건강의학과" },
  { id: 3, clCd: "31", dgsbjtCd: "04", name: "외과" },
  { id: 4, clCd: "31", dgsbjtCd: "05", name: "정형외과" },
  { id: 5, clCd: "31", dgsbjtCd: "06", name: "신경외과" },
  { id: 6, clCd: "31", dgsbjtCd: "08", name: "성형외과" },
  { id: 7, dgsbjtCd: "10", name: "산부인과" },
  { id: 8, clCd: "31", dgsbjtCd: "11", name: "소아청소년과" },
  { id: 9, clCd: "31", dgsbjtCd: "12", name: "안과" },
  { id: 10, clCd: "31", dgsbjtCd: "13", name: "이비인후과" },
  { id: 11, clCd: "31", dgsbjtCd: "14", name: "피부과" },
  { id: 12, clCd: "31", dgsbjtCd: "15", name: "비뇨기과" },
  { id: 13, clCd: "31", dgsbjtCd: "18", name: "병리과" },
  { id: 14, clCd: "31", dgsbjtCd: "21", name: "재활의학과" },
  { id: 15, dgsbjtCd: "49", name: "치과" },
];

function Select() {
  const [selected, setSelected] = useState<Department>(); // 선택된 아이템
  const navigate = useNavigate();
  const handleClickItem = (item: Department) => {
    setSelected(item);
  };

  const handleClickNext = () => {
    navigate("/result", { state: selected });
  };

  return (
    <SelectStyle>
      <div className="explain">
        <Title size="small" color="primary">
          병원맛집
        </Title>
        <p>
          병 이름을 입력하시면 우리 집 근처
          <br />
          가장 알맞은 병원을 추천해드려요!
          <br />
        </p>
      </div>

      <div className="explain">
        <div className="img">
          <img src={"/src/assets/img/select.png"} />
        </div>
        <h2>진료 과목을 선택해주세요.</h2>
      </div>

      <div className="content">
        {departments.map((department) => (
          <DepartmentItem
            selected={selected?.id}
            onSelect={handleClickItem}
            key={department.id}
            department={department}
          />
        ))}
      </div>

      <Button
        onClick={handleClickNext}
        size="large"
        schema={selected ? "primary" : "secondary"}
        disabled={!selected}>
        다음 단계로
      </Button>
    </SelectStyle>
  );
}
const SelectStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-bottom: 40px;
  gap: 20px;
  min-height: 100vh;

  .explain {
    display: flex;
    align-items: center;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .img {
    width: 30px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default Select;
