type Department = {
  id: number;
  clCd?: string;
  dgsbjtCd: string;
  yadmNm: string;
};

export const departments: Record<number, Department> = {
  0: { id: 0, clCd: "31", dgsbjtCd: "01", yadmNm: "내과" },
  1: { id: 1, clCd: "31", dgsbjtCd: "02", yadmNm: "신경과" },
  2: {
    id: 2,
    clCd: "31",
    dgsbjtCd: "03",
    yadmNm: "정신건강의학과",
  },
  3: { id: 3, clCd: "31", dgsbjtCd: "04", yadmNm: "외과" },
  4: { id: 4, clCd: "31", dgsbjtCd: "05", yadmNm: "정형외과" },
  5: { id: 5, clCd: "31", dgsbjtCd: "06", yadmNm: "신경외과" },
  6: { id: 6, clCd: "31", dgsbjtCd: "08", yadmNm: "성형외과" },
  7: { id: 7, dgsbjtCd: "10", yadmNm: "산부인과" },
  8: { id: 8, clCd: "31", dgsbjtCd: "11", yadmNm: "소아청소년과" },
  9: { id: 9, clCd: "31", dgsbjtCd: "12", yadmNm: "안과" },
  10: { id: 10, clCd: "31", dgsbjtCd: "13", yadmNm: "이비인후과" },
  11: { id: 11, clCd: "31", dgsbjtCd: "14", yadmNm: "피부과" },
  12: { id: 12, clCd: "31", dgsbjtCd: "15", yadmNm: "비뇨기과" },
  13: { id: 13, clCd: "31", dgsbjtCd: "18", yadmNm: "병리과" },
  14: { id: 14, clCd: "31", dgsbjtCd: "21", yadmNm: "재활의학과" },
  15: { id: 15, dgsbjtCd: "49", yadmNm: "치과" },
};
