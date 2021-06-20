# Clone-HackerNews-by-Vue
HackerNews 클론코딩

프로젝트하면서 배우는 점

===== api Request for axios =====
콜백에는 Vue Component를 바라보고있지 않음 
let vm = this  이런식으로 콜백 밖에서 한번 연결해줘야 함

라우팅이라든지 데이터로직의 경우
레벨이 깊어지거나 설계가 바뀔 때의 상황을 유연하게 대처해야하는 상황이 있을 수밖에 없는데 
이럴땐 해당 로직을 별도의 컴포넌트로 등록시키는게 좋음

Vue 2.20부터 v-for을 사용 시 key로 사용되는 항목을 명시해줘야함
이때 key는 DB의 기본키개념으로다가 생각하면 됨
