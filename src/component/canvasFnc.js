const drawCarrot = (e, contextRef, carrot)=>{
  // 캔버스에 당근 이미지를 그림
  const img = new Image();
  img.src = carrot;
  let x = e.nativeEvent.clientX - img.width/4; // x 좌표
  let y = e.nativeEvent.clientY - img.height/4;  // y 좌표
  img.onload = function(){
    contextRef.current.drawImage(img, x, y, img.width/2, img.height/2); // 마우스 위치에 당근을 그림
  }
}

const moveCarrot = (e, contextRef, carrot)=>{
  // 마우스 커서의 움직임에 따라 당근 이미지가 함께 이동
  // 부드러운 이동을 위해 애니메이션 활용
  // 함수 실행 시 화면 초기화
  contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
  const img = new Image();
  img.src = carrot;
  let x = e.nativeEvent.clientX - img.width/4;
  let y = e.nativeEvent.clientY - img.height/4;
  
  img.onload = function(){
    contextRef.current.drawImage(img, x, y, img.width/2, img.height/2);
  }
}

const removeCarrot = (contextRef)=>{
  // 영역(캔버스)에서 벗어날 경우 캔버스 초기화
  contextRef.current.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

export { drawCarrot, moveCarrot, removeCarrot }