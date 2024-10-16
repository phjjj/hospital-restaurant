"use client";
import Title from "../_components/common/Title";
import Button from "../_components/common/Button";
import Link from "next/link";
import homeImg from "../../../public/images/home.png";
import Image from "next/image";
import styled from "styled-components";

export default async function Home() {
  return (
    <HomeStyle>
      <Title size='large' color='primary'>
        병원맛집
      </Title>
      <div className='img'>
        <Image src={homeImg} alt='병원맛집' />
      </div>
      <Link href='/select'>
        <Button size='large' schema='primary'>
          시작하기
        </Button>
      </Link>
    </HomeStyle>
  );
}
const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;

  .img {
    animation: floating 3s ease-in-out infinite;
    @keyframes floating {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-50px);
      }
      100% {
        transform: translateY(0);
      }
    }

    width: 305px;
    img {
      width: 100%;
      height: auto;
    }
  }
`;
