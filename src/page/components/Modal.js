import React from 'react';

/* 
const Main = ({ props }) => {
  props를 전부 가져오고
  const data = props.data;
  그중 data를 data에 넣을 거다
  로 적으면 너무 기니까 하단처럼 props대신 data를 가져온다
  */
//  사용할 props이름 넣어줘야함
const Main = ({ detail, openEvent, closeModal }) => {

  return (
    <div className={openEvent ? 'modal show' : 'modal'}>
      <div className='modal-bg' onClick={closeModal}></div>
      <div className='modal-conts'>
        <button type='button' className='modal-close' onClick={closeModal}>닫기</button>
        {detail.map((target) => {
          return (
            <div className='modal-wrapper' key={target} data-id={target.id}>
              <dl className='card-info-list-wrap'>
                <dt className='card-info-ttl'>등록일 :&nbsp;</dt>
                <dd className='card-info-dec'>{target.date_uploaded}</dd>
              </dl>
              <dl className='card-info-list-wrap'>
                <dt className='card-info-ttl'>장르 :&nbsp;</dt>
                <dd className='card-info-dec'>{target.genres[0]} {target.genres[1]}</dd>
              </dl>
              <dl className='card-info-list-wrap'>
                <dt className='card-info-ttl'>시간 :&nbsp;</dt>
                <dd className='card-info-dec'>{target.runtime}분</dd>
              </dl>
              <dl className='card-info-list-wrap'>
                <dt className='card-info-ttl'>평점 :&nbsp;</dt>
                <dd className='card-info-dec'>{target.rating}점</dd>
              </dl>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Main;