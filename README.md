
# 리그 오브 레전드 정보 앱

Riot Games의 API를 활용하여 League of Legends 게임의 챔피언 목록, 아이템 목록, 그리고 챔피언 로테이션 정보를 제공합니다. 최신 React와 Next.js의 기능을 활용하여 효율적인 웹 애플리케이션으로 구현되었습니다.

## 목록
1. [Project 목표](#Project-목표)
2. [기능구현](#기능구현)
3. [개발기간](#개발기간)
4. [기술스택](#기술스택)
5. [Trouble Shooting](#Trouble-Shooting)


## Project 목표
리그 오브 레전드 데이터를 활용하여 사용자가 챔피언, 아이템, 로테이션 정보를 쉽게 탐색할 수 있는 웹 애플리케이션을 제공합니다. Next.js와 React Query를 사용해 데이터 페칭과 상태 관리를 효율적으로 처리하며 SSG, SSR 등 다양한 렌더링 방식을 적용하여 최적의 사용자 경험을 구현합니다.


## 기능구현

1. **홈 페이지**
   - 배경에 동영상을 사용하여 몰입감 있는 사용자 경험 제공.
   - League of Legends에 대한 간단한 소개와 개요를 표시.

2. **챔피언 목록 페이지**
   - 모든 챔피언의 이름과 이미지 표시.
   - 챔피언 클릭 시 상세 정보를 확인할 수 있는 페이지로 이동.
   - 최신 데이터를 24시간마다 재생성하도록 설정.

3. **챔피언 상세 페이지**
   - 선택된 챔피언의 상세 정보를 표시.
   - 챔피언의 이미지를 배경으로 활용.

4. **아이템 목록 페이지**
   - 게임 내에서 사용 가능한 모든 아이템의 정보를 표시.
   - 이름과 이미지를 포함하며 그리드 형태로 정렬.

5. **챔피언 로테이션 페이지**
   - 이번 주 무료로 플레이 가능한 챔피언 목록을 표시.
   - React Query를 활용하여 최신 로테이션 정보를 동적으로 가져옵니다.

6. **전역 상태 관리**
   - tanstack/react-query를 사용해 API 데이터 캐싱 및 상태 관리를 효율적으로 처리.

## 개발기간
`24.12.06 ~ 24.12.18`

## 기술스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Trouble Shooting
**1. 이미지 로드 실패 (403 Forbidden)**

  Data Dragon API에서 제공하는 이미지 파일 요청 시, 이미지의 크기를 명시하지 않아 잘못된 요청으로 처리되었습니다. 이로 인해 API 서버가 요청을 차단했습니다.일부 챔피언 및 아이템 이미지가 로드되지 않고, 브라우저 콘솔에서 "403 Forbidden" 에러가 발생했습니다.

 Next.js의 `<Image>` 컴포넌트를 사용하여 이미지 요청 시 `width`와 `height` 속성을 명시적으로 설정했습니다. 이를 통해 정확한 요청이 이루어지도록 수정해서이미지가 정상적으로 로드되었으며, 브라우저 콘솔의 403 에러가 해결되었습니다. 

---

**2. 클라이언트와 서버 컴포넌트의 혼용**

클라이언트 컴포넌트를 서버 컴포넌트 내부에 배치했더니 데이터가 제대로 로드되지 않는 문제가 발생했습니다. 데이터를 클라이언트에서 가져와야 하는 컴포넌트에는 `"use client"`를 선언해 클라이언트 컴포넌트로 설정했습니다. 
