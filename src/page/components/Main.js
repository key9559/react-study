import React from 'react';
/* rsc를 누르면 자동으로 기본형이 생성댐 */

/* 
const Main = ({ props }) => {
  props를 전부 가져오고
  const data = props.data;
  그중 data를 data에 넣을 거다
  로 적으면 너무 기니까 하단처럼 props대신 data를 가져온다
  */
//  사용할 props이름 넣어줘야함
const Main = ({ data, clickEvent }) => {

  return (
    <div>
      <div className='card-wrapper'>
        <ul className='card-list'>
          {!data.length ? <li>데이터 로드중</li> :
            data.map((v, i) => {
              return (
                // props 실제 사용
                <li className='card' key={i} onClick={clickEvent} data-id={ v.id }>
                  <div className={!detail ? 'card-detail-wrap' : 'card-detail-wrap show'}>
                    <div className='card-img-wrap'>
                      <img src={v.large_cover_image} alt='poster' className='card-img' />
                      <h2 className='title'>{v.title}</h2>
                    </div>
                    <div className='card-text-wrap'>
                      <dl className='card-info-list-wrap'>
                        <dt className='card-info-ttl'>등록일 :&nbsp;</dt>
                        <dd className='card-info-dec'>{v.date_uploaded}</dd>
                      </dl>
                      <dl className='card-info-list-wrap'>
                        <dt className='card-info-ttl'>장르 :&nbsp;</dt>
                        <dd className='card-info-dec'>{v.genres[0]} {v.genres[1]}</dd>
                      </dl>
                      <dl className='card-info-list-wrap'>
                        <dt className='card-info-ttl'>시간 :&nbsp;</dt>
                        <dd className='card-info-dec'>{v.runtime}분</dd>
                      </dl>
                      <dl className='card-info-list-wrap'>
                        <dt className='card-info-ttl'>평점 :&nbsp;</dt>
                        <dd className='card-info-dec'>{v.rating}점</dd>
                      </dl>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Main;