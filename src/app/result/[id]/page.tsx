"use client";

import styled from "styled-components";
import Title from "../../_components/common/Title";
import Button from "../../_components/common/Button";
import Link from "next/link";
import { Suspense } from "react";
import { getDepartment } from "../../_utils/getDepartmet";
import Loading from "../../_components/common/Loading";
import HospitalList from "../../_components/result/HospitalList";

export default function Result({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <ResultStyle>
        <Title size='small' color='primary'>
          병원 맛집
        </Title>
        <p>
          현재 위치와 가까우면서 {getDepartment(parseInt(id)).yadmNm}의
          <br />
          후기가 가장 좋은 병원입니다
        </p>
        <div className='content'>
          <Suspense fallback={<Loading />}>
            <HospitalList departmentId={id} />
          </Suspense>
        </div>
        <Link href='/' passHref>
          <Button size='large' schema='primary'>
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
`;
