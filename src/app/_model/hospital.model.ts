export interface Hospital {
  XPos: number;
  YPos: number;
  addr: string;
  clCd: number;
  clCdNm: string;
  cmdcGdrCnt: number;
  cmdcIntnCnt: number;
  cmdcResdntCnt: number;
  cmdcSdrCnt: number;
  detyGdrCnt: number;
  detyIntnCnt: number;
  detyResdntCnt: number;
  detySdrCnt: number;
  distance: string;
  drTotCnt: number;
  emdongNm: string;
  estbDd: number;
  hospUrl: string;
  mdeptGdrCnt: number;
  mdeptIntnCnt: number;
  mdeptResdntCnt: number;
  mdeptSdrCnt: number;
  pnursCnt: number;
  postNo: string;
  sgguCd: number;
  sgguCdNm: string;
  sidoCd: number;
  sidoCdNm: string;
  telno: string;
  yadmNm: string;
  ykiho: string;
}

export interface FormatHospital {
  XPos: number;
  YPos: number;
  addr: string;
  clCd?: number;
  drTotCnt: number;
  telno: string;
  yadmNm: string;
  distance: string;
  rating?: number | null;
  review?: string;
  rank?: number;
}
