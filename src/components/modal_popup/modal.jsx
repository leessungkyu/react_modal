import React from 'react';
import './modal.css'

export default function Modal({id,_header,_body,_footer,onClose}) {
  return(
    <>
    {/* 
      id값은 사용하는 곳에서 설정할 수 있게 설정 
      매개변수 (사용하는 곳에서 결정)
      컴포넌트의 매개변수 1.props  2.{} 직접생성

      id값을 사용하는 곳에서 넣어주면 넣어주는 값으로 설정,
      안넣어주면 'Modal'로 아이디 설정
      && : (그리고)앞에가 틀리면 어차피 틀린거라 뒤에거 무시
      || : (또는)앞에가 맞으면 어차피 맞은거라 뒤에거 무시
      틀렸다(0, false, "", null, Nan, underfined)
    */}
      <div className='modal-component' id={id || 'Modal'} onClick={(e)=>{
          if (e.target.className === 'modal-component') {
            onClose();
          }
        }}>
        <div className='modal-content'>
            <div className='modal-header'>
              <span className='close-modal-icon' onClick={onClose}>&times;</span>
              {/* 모달의 내용은 사용하는 곳에서 정하기 == 매개변수 */}
              <h2>{_header}</h2>
            </div>
            <div className='modal-body'>
              {_body}
            </div>
            <div className='modal-footer'>
              <h2>{_footer}</h2>
            </div>  
        </div>  
      </div>
    </>
  )
}