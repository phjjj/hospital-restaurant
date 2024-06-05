import styled from "styled-components";
import Title from "../components/common/Title";
import Button from "../components/common/Button";
import DepartmentItem from "../components/DepartmentItem";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface Department {
  id: number;
  name: string;
}
const departments: Department[] = [
  { id: 1, name: "내과" },
  { id: 2, name: "비뇨기과" },
  { id: 3, name: "산부인과" },
  { id: 4, name: "신경과" },
  { id: 5, name: "신경외과" },
  { id: 6, name: "심장내과" },
  { id: 7, name: "외과" },
  { id: 8, name: "정형외과" },
  { id: 9, name: "피부과" },
  { id: 10, name: "안과" },
  { id: 11, name: "이비인후과" },
  { id: 12, name: "치과" },
  { id: 13, name: "한의원" },
];

function Select() {
  const [selected, setSelected] = useState<number>(0); // 선택된 아이템의 id

  const handleClickItem = (id: number) => {
    setSelected(id);
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
          <DepartmentItem selected={selected} onSelect={handleClickItem} key={department.id} department={department} />
        ))}
      </div>
      <Link to={"/result"}>
        <Button size="medium" schema={selected ? "primary" : "secondary"} disabled={!selected}>
          다음 단계로
        </Button>
      </Link>
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
  height: 100vh;

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
