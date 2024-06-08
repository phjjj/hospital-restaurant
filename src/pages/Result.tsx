import styled from "styled-components";
import Title from "../components/common/Title";
import HospitalItem from "../components/HospitalItem";
import Button from "../components/common/Button";
import { Link, useLocation } from "react-router-dom";
import { useHospitals } from "../hooks/useHospital";
import { FormatHospital } from "../model/hospital.model";

const hospitals: FormatHospital[] = [
  {
    XPos: 128.6991859,
    YPos: 35.1589716,
    addr: "경상남도 창원시 진해구 진해대로 765, (석동)",
    distance: "13km",
    drTotCnt: 3,
    rank: 1,
    rating: 3,
    review: "치료는 만족스러웠지만 시설이 조금 오래되어서 아쉬웠습니다.",
    telno: "055-547-1300",
    yadmNm: "진해라온치과병원",
  },
  {
    XPos: 128.6987645,
    YPos: 35.1590021,
    addr: "경상남도 창원시 진해구 중원로 50, (석동)",
    distance: "12.5km",
    drTotCnt: 5,
    rank: 2,
    rating: 5,
    review: "최고의 의료진과 최신식 시설을 갖춘 병원입니다.",
    telno: "055-123-4567",
    yadmNm: "진해서울병원",
  },
  {
    XPos: 128.6801845,
    YPos: 35.2280452,
    addr: "경상남도 창원시 성산구 중앙로 200, (용호동)",
    distance: "9km",
    drTotCnt: 7,
    rank: 3,
    rating: 4.5,
    review: "의사들이 매우 친절하고 전문적인 진료를 제공합니다.",
    telno: "055-765-4321",
    yadmNm: "창원센트럴병원",
  },
  {
    XPos: 128.7001945,
    YPos: 35.1670652,
    addr: "경상남도 창원시 의창구 봉곡로 50, (팔용동)",
    distance: "14km",
    drTotCnt: 2,
    rank: 4,
    rating: 4,
    review: "의사들이 친절하고 대기 시간이 짧습니다.",
    telno: "055-555-5555",
    yadmNm: "의창중앙병원",
  },
  {
    XPos: 128.6995559,
    YPos: 35.1589451,
    addr: "경상남도 창원시 마산합포구 합포로 100, (신포동)",
    distance: "15km",
    drTotCnt: 4,
    rank: 5,
    rating: 4,
    review: "시설이 깨끗하고 직원들이 친절합니다.",
    telno: "055-666-6666",
    yadmNm: "마산중앙병원",
  },
  {
    XPos: 128.7001852,
    YPos: 35.1570145,
    addr: "경상남도 창원시 진해구 중동로 10, (중동)",
    distance: "10km",
    drTotCnt: 6,
    rank: 6,
    rating: 4.5,
    review: "최신식 장비를 갖추고 있으며 진료가 매우 만족스럽습니다.",
    telno: "055-777-7777",
    yadmNm: "진해현대병원",
  },
  {
    XPos: 128.7101945,
    YPos: 35.1500652,
    addr: "경상남도 창원시 성산구 성산로 300, (성산동)",
    distance: "8.5km",
    drTotCnt: 8,
    rank: 6,
    rating: 5,
    review: "전문적인 진료와 친절한 서비스를 제공합니다.",
    telno: "055-888-8888",
    yadmNm: "창원해운대병원",
  },
  {
    XPos: 128.6901845,
    YPos: 35.1700452,
    addr: "경상남도 창원시 마산회원구 회원로 200, (회원동)",
    distance: "11km",
    drTotCnt: 3,
    rank: 7,
    rating: 3.5,
    review: "의사들은 친절하지만 대기 시간이 길었습니다.",
    telno: "055-999-9999",
    yadmNm: "마산회원병원",
  },
  {
    XPos: 128.7201945,
    YPos: 35.1600652,
    addr: "경상남도 창원시 진해구 제황산로 100, (태평동)",
    distance: "12km",
    drTotCnt: 5,
    rank: 8,
    rating: 4,
    review: "전문적인 진료와 깔끔한 시설이 좋았습니다.",
    telno: "055-101-0101",
    yadmNm: "진해태평양병원",
  },
  {
    XPos: 128.7301845,
    YPos: 35.1500452,
    addr: "경상남도 창원시 성산구 상남로 50, (상남동)",
    distance: "7km",
    drTotCnt: 4,
    rank: 9,
    rating: 3,
    review: "의료진은 친절했지만 시설이 조금 오래되었습니다.",
    telno: "055-202-0202",
    yadmNm: "성산중앙병원",
  },
];

function Result() {
  const location = useLocation();
  const department = location.state;

  // const { hospitals, loading } = useHospitals(department.name, department.clCd, department.dgsbjtCd);

  // if (loading) {
  //   return (
  //     <ResultStyle>
  //       <Title size="small" color="primary">
  //         병원 맛집
  //       </Title>
  //       <p>데이터를 불러오는 중입니다...</p>
  //     </ResultStyle>
  //   );
  // }

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
        <ul>{hospitals && hospitals.map((hospital, idx) => <HospitalItem key={idx} hospital={hospital} />)}</ul>
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
