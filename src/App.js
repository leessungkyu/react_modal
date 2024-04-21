import logo from './logo.svg';
import './App.css';
import Modal from './components/modal_popup/modal'
import {useState} from 'react';
// .jsx: 자바스크립트에서 HTML형식으로 코딩할 수 있게 해주는 확장자
//index 이름은 폴더까지만 import해도 되지만 그외에는 모두 입력해야한다.

//state를 만들어서 모달창을 띄웠다 지웠다함
function App() {
  let [showModal, setShowModal] = useState(false);
  //true면 모달뜨고 false면 안뜨게함

  function modalClose(){
    //모달을 열기 위해선 setShowModal(true) 햇으니까
    //모달을 닫기 위해선 setShowModal(false)
    setShowModal(false)
  }

  return (
    <div className="App">
      <button onClick={
        ()=> setShowModal(true) 
      }>모달창열기</button>
      
      {
        //showModal이 true면 <Modal/> 실행
        //showModal ? <Modal /> : null

        //&&: 그리고(둘다 true면 true 다르면 false)
        //앞이 틀리면 뒤에는 실행안함
        showModal &&  <Modal id={'modal-1'} 
        _header={<div>모달헤더</div>}
        _body={<div>모달바디</div>}
        _footer={<div>모달푸터</div>}
        onClose={modalClose}
        />
      }
    </div>
  );
}

export default App;

