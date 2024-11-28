import OpenAI from "openai";
import { FormatHospital } from "../_model/hospital.model";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const getRanking = async (hospitals: FormatHospital[]) => {
  let prompt =
    "다음 병원들에 대해 5점 만점의 평점과 짧은 리뷰를 한글로 제공해 주세요. 결과는 병원 이름을 키로 사용하는 JSON 형식으로 반환해 주세요:\n\n";

  hospitals.forEach((hospital, index) => {
    prompt += `병원 ${index + 1}:\n이름: ${hospital.yadmNm}\n주소: ${
      hospital.addr
    }\n전화번호: ${hospital.telno}\n총 의사 수: ${hospital.drTotCnt}\n\n`;
  });

  prompt += "\n결과는 다음과 같은 JSON 형식으로 반환해 주세요:\n";
  prompt += `{\n  "병원이름": {"rating": 평점, "review": "리뷰 내용"}\n}`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 2000,
    temperature: 1,
  });

  const content = response.choices[0].message?.content;

  if (!content) {
    throw new Error("OpenAI 응답에 내용이 없습니다.");
  }

  let parsedResponse;
  try {
    parsedResponse = JSON.parse(content);
  } catch (error) {
    console.error("JSON 파싱 에러:", error);
    return hospitals;
  }

  const results = hospitals.map((hospital) => {
    const reviewData = parsedResponse[hospital.yadmNm];
    return {
      ...hospital,
      rating: reviewData ? reviewData.rating : null,
      review: reviewData ? reviewData.review : "",
    };
  });

  // 병원 평점 순으로 정렬 후 순위 부여
  results.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  // results 값에 순위 부여
  results.forEach((hospital, index) => {
    hospital.rank = index + 1;
  });

  return results;
};
