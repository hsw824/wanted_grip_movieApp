# wanted_grip_movieApp

원티드 프리온보딩 프론트엔드 그립 기업 개인 과제 입니다.

필수조건

1. 타입스크립트로 작성하기
2. Recoil 사용하기

구조 설정

```bash
src
┣ assets
┃ ┗ svgs
┃ ┃ ┣ check.svg
┃ ┃ ┣ index.js
┃ ┃ ┗ logo.svg
┣ hooks
┃ ┣ worker
┃ ┃ ┣ index.tsx
┃ ┃ ┣ useAxios.tsx
┃ ┃ ┗ useAxiosCore.tsx
┃ ┗ index.tsx
┣ routes
┃ ┣ Search
┃ ┃ ┣ MovieList
┃ ┃ ┃ ┗ index.tsx
┃ ┃ ┣ Search.module.scss
┃ ┃ ┗ index.tsx
┃ ┣ Routes.module.scss
┃ ┗ index.jsx
┣ styles
┃ ┣ base
┃ ┃ ┣ _fonts.scss
┃ ┃ ┣ _more.scss
┃ ┃ ┗ _reset.scss
┃ ┣ constants
┃ ┃ ┣ _colors.scss
┃ ┃ ┣ _levels.scss
┃ ┃ ┗ _sizes.scss
┃ ┣ mixins
┃ ┃ ┣ _animation.scss
┃ ┃ ┣ _flexbox.scss
┃ ┃ ┣ _position.scss
┃ ┃ ┣ _responsive.scss
┃ ┃ ┗ _visual.scss
┃ ┣ index.js
┃ ┗ index.scss
┣ types
┃ ┗ ProductList.tsx
┣ utils
┃ ┗ axios.ts
┣ index.tsx
┣ logo.svg
┣ react-app-env.d.ts
┣ reportWebVitals.ts
┗ setupTests.ts
```

기능 요약

- 기본 구현
- 두개의 하단 탭바(검색/즐겨찾기)

- 검색 탭
  입력창 / 검색 버튼
  검색 결과 화면로 구성

  검색을 하지 않은 경우 '검색 결과가 없습니다'로 노출
  검색어 입력후 검색 버튼을 클릭한 경우 검색 결과가 노출

  영화의 정보는 한 줄에 하나의 영화가 노출되는 리스트형이며
  리스트 왼쪽에 포스터, 오른쪽에 제목, 연도, 타입이 표시됨

  검색결과 목록을 최하단으로 내렸을 경우 API를 이용하여 다음페이지를 불러와 노출해야함.

  검색 결과가 없는 경우 "검색 결과가 없습니다."로 노출

  - 검색 결과 중 영화 클릭
    선택창이 뜨면서 즐겨찾기 / 취소 선택이 가능함
    즐겨찾기를 선택 하면 해당 영화는 즐겨찾기 탭에서 조회할 수 있음
    즐겨찾기 된 데이터는 로컬에 저장하고, 나중에 접속 시 조회가 되어야 함
    이미 즐겨찾기가 되어있는 영화의 경우에는 "즐겨찾기 제거" 버튼이 보이도록 함
    즐겨찾기 된 영화는 검색 목록에서 알아볼 수 있도록 아이콘/텍스트를 노출(꽉 찬 별 표시)

- 즐겨찾기 탭
  현재까지 즐겨찾기한 영화 목록이 노출
  즐겨찾기된 영화를 클릭하면 즐겨찾기 해제/취소가 선택 가능함
  즐겨찾기 해제를 누르면 해당 영화는 즐겨찾기 목록에서 즉시 제거함
