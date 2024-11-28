"use client";
import styled from "styled-components";
import LoadingImg from "../../../../public/images/spinner.gif";
import Image from "next/image";

function Loading() {
  return (
    <LoadingStyle>
      <div className='img'>
        <Image src={LoadingImg} alt='loading' />
      </div>
      <div className='loading-text'>
        <p>데이터를 불러오는 중입니다...</p>
      </div>
    </LoadingStyle>
  );
}
const LoadingStyle = styled.div`
  .loading-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export default Loading;
