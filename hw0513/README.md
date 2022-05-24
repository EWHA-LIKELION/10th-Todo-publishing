# 10th-Todo-publishing
프론트엔드 : Todo UI 퍼블리싱 과제 </br></br>
dvvuny(김다은/기디) -> yyeonzu(정연주/프론트)
* * * 

> ## 완성본

<img src="https://github.com/yyeonzu/iamge/blob/main/image/todolist.png"></img>
</br>

> ## 코드 리뷰
* main과 sub(account + calender) 파트로 분리
* main
  -
  * __title__
  * __date:__ js의 Date 함수를 이용해 currentDate 함수를 작성
  * __todo List:__ js 세션때 만들었던 형태를 거의 그대로 적용, 추가/삭제 버튼만 이미지로 변경
  * __done List:__ js 세션때 만들었던 형태를 거의 그대로 적용, 삭제 버튼만 이미지로 변경
 

* sub
  -
  * __account:__ button(프로필 사진) + button(사용자 이름)
  * __calender:__ 이미지 삽입으로 대체

> ## 추가된 내용
* to do list와 done list를 여러 개 작성하면 페이지를 벗어나는 현상 -> to do list와 done list에 scroll 삽입
* done list의 체크 박스 위치가 아래 쪽으로 치우쳐 있는 현상 -> transform 이용해서 위치 조정


> ## 미해결
* 캘린더 삽입을 도전해봤는데, js상에서 문제가 발생ㅜㅜ하여 일단 캘린더 관련 코드 전체 주석처리, 추후에 해결 예정
* 새로고침시 todo list가 리셋되지 않도록 하는 함수 작성도 아직 완성되지 않아 관련 코드 전체 주석처리
