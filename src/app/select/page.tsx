"use client";

import styled from "styled-components";
import Title from "../_components/common/Title";
import Button from "../_components/common/Button";
import DepartmentItem from "../_components/select/DepartmentItem";
import { useState } from "react";
import { useRouter } from "next/navigation";
import selectImg from "../../../public/images/select.png";
import { departments } from "../_constants/departments";

export interface Department {
  id: number;
  clCd?: string;
  dgsbjtCd?: string;
  yadmNm: string;
}

function Select() {
  const [selected, setSelected] = useState<Department>();

  const router = useRouter();

  const handleClickItem = (department: Department) => {
    setSelected(department);
  };

  const handleClickNext = () => {
    router.replace(`/result/${selected?.id}`);
  };

  return (
    <SelectStyle>
      <div className='explain'>
        <Title size='small' color='primary'>
          병원맛집
        </Title>
        <p>
          병 이름을 입력하시면 우리 집 근처
          <br />
          가장 알맞은 병원을 추천해드려요!
          <br />
        </p>
      </div>

      <div className='explain'>
        <div className='img'>
          <img src={selectImg.src} alt='Select Image' />
        </div>
        <h2>진료 과목을 선택해주세요.</h2>
      </div>

      <div className='content'>
        {Object.values(departments).map((department) => (
          <DepartmentItem
            key={department.id}
            selected={selected?.id}
            onSelect={() => handleClickItem(department)}
            department={department}
          />
        ))}
      </div>

      <Button
        onClick={handleClickNext}
        size='large'
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
