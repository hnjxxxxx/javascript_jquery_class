//갤러리 스크립트 gallery.js

//1. 변수 페이지번호, 좌우버튼
let n =1; //인덱스번호
let img_n = document.querySelectorAll('.list_photo li');//썸네일이미지 배열
let l_btn = document.querySelectorAll('.fa-angle-left');
let r_btn = document.querySelectorAll('.fa-angle-right');

document.getElementById('img_num').innerHTML=n+'/'+img_n.length;

//2. 썸네일 이미지 목록(li)태그 클릭시 해당 인덱스번호를 구하여
for(let i=0;i<img_n.length;i++){
  img_n[i].addEventListener('click', function(){
    // console.log(i+1);
    n=i+1;
    //이미지 변경하기 위한 함수로 넘기기
    imgChange(n);
  })
}
//3. 이미지 변경하기 위한 함수
/*사용자 정의 함수 imgChange()
1.숫자변경
2.이미지변경
*/
function imgChange(){
  console.log(n);
  //1. 모든서식 지우기
  for(let j=0;j<img_n.length;j++){
    img_n[j].style.border='none';
    img_n[j].style.box_sizing='border-box';
  }
  //2. 클릭한 인덱스번호에만 서식 적용
  img_n[n-1].style.border='3px solid #f00';
  //3. 인덱스 번호 표시
  document.getElementById('img_num').innerHTML=n+'/17';
  //4. 클릭한 사진을 큰이미지에 적용
  document.getElementById('main').src='./images01/movie_image'+n+'.jpg';
}

//4. 좌우버튼 클릭시 n값을 imgChange함수에 넘기기
// l_btn[0].addEventListener('click',function(){
//   alert('left');
// })
// r_btn[0].addEventListener('click',function(){
//   alert('right');
// })

//forEach함수는 배열에서만 사용가능한 메서드이다
/*
문법
  객체.fotEach((매개변수,index)){
    각각 실행할 함수 내용을 적는다
  }
*/
l_btn.forEach((el)=>{
  el.addEventListener('click', ()=>{
    // alert('left');
    if(n==1){
      n=img_n.length;
    }else{
      n--;
    }
    imgChange(n); // 숫자를 함수에 넘겨준다
  })
})
r_btn.forEach((el)=>{
  el.addEventListener('click', ()=>{
    // alert('right');
    if(n==img_n.length){
      n=1;
    }else{
      n++;
    }
    imgChange(n);
  })
})