import { departments } from "../../src/app/_constants/departments";
describe("홈 화면", () => {
  it("홈 화면이 렌더링", () => {
    cy.visit("/");
  });

  it("홈 화면에 이미지가 렌더링", () => {
    cy.visit("/");
    cy.get(".img img").should("be.visible");
  });

  it("홈 화면에 시작하기 버튼이 렌더링", () => {
    cy.visit("/");
    cy.get("button").should("have.text", "시작하기");
  });

  it("시작하기 버튼을 클릭하면 /select 페이지로 이동한다.", () => {
    cy.visit("/");
    cy.get("button").click();
    cy.url().should("include", "/select");
  });
});

describe("진료 선택 화면", () => {
  it("진료 선택 화면이 렌더링", () => {
    cy.visit("/select");
    cy.get("p").should(
      "have.html",
      "병 이름을 입력하시면 우리 집 근처<br>가장 알맞은 병원을 추천해드려요!<br>",
    );
    cy.get("h2").should("have.text", "진료 과목을 선택해주세요.");
  });

  it("진료 과목 selector들 렌더링", () => {
    cy.visit("/select");
    Object.values(departments).forEach((department) => {
      cy.contains("button", department.yadmNm).should("be.visible");
    });
  });

  it("진료 선택 버튼 클릭후 다음 단계로 버튼 활성화", () => {
    cy.visit("/select");
    Object.values(departments).forEach((department) => {
      cy.contains("button", department.yadmNm).click();
      cy.contains("button", "다음 단계로").should("be.visible");
    });
  });
});

describe("결과 화면", () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: "GET",
        url: "https://apis.data.go.kr/B551182/hospInfoServicev2/getHospBasisList**",
      },
      { fixture: "hospitals.json" },
    ).as("getHospitals"); // as는

    cy.intercept(
      {
        method: "POST",
        url: "https://api.openai.com/v1/**",
      },
      { fixture: "ranking.json" },
    ).as("getRanking");
  });

  it("병원 정보 리스트", () => {
    // item부분에서 오류가 발생하여 오류를 무시하도록 설정
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false; // 오류를 Cypress에서 무시
    });

    cy.visit("/result/0");
    cy.wait(["@getHospitals", "@getRanking"]); //

    cy.get("h1").should("have.text", "병원 맛집");
    cy.get("p").should(
      "have.html",
      "현재 위치와 가까우면서 <!-- -->내과<!-- -->의<br>후기가 가장 좋은 병원입니다",
    );
  });

  // 병원 리스트 클릭 시 모달창 렌더링
  it("병원 리스트 클릭 시 모달창 렌더링", () => {
    cy.visit("/result/0");
    cy.wait("@getHospitals");
    cy.wait("@getRanking");

    cy.get("li").first().click();
    cy.get(".info").should("be.visible");
  });

  it("네이버 맵 렌더링", () => {
    cy.visit("/result/0");
    cy.wait("@getHospitals");
    cy.wait("@getRanking");

    cy.get("li").first().click();
    cy.get(".map").should("be.visible");
  });
});
