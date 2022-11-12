import React, { useEffect, useState } from 'react';
import Header from './page/components/Header';
import Main from './page/components/Main';
import Search from './page/components/Search';

// 데이터 불러오기
import axios from 'axios';

import './assets/css/reset.css'
import './assets/css/header.css'
import './assets/css/main.css'
import './assets/css/search.css'

// useEffect(); // 변화가 생길거다 ex| 이벤트 발생(클릭, 리스트 변경 등)
// useState(); // 상태를 관리할거다 ex| 좋아요 등
// useEffect(() => {}, [/* 여기가 비어있으면 도큐먼트 레디 상태*/]) // data가 변경될 때 effect로 타서 새로 그릴거다 
const App = () => {
  // useState([]) 는 data가 비어있을 때 저걸 초기에 넣어줌

  const [data, setData] = useState([]);
  const [detail, setDetail] = useState([]);

  // 그려질 때 쓸게
  useEffect(() => {
    getList();
  }, []);

  // 상태중 data가 바뀌면 이거 쓸게
  // 상태는 병렬로도 가능하고 분리해서 여러 useEffect를 적어도 됨
  useEffect(() => {
    console.log(data);
  }, [data]);

  const getList = async () => {
    // npm install axios import axios
    // const res = await axios.get('/api/v2/list_movies.json', {파라미터});
    const res = await axios.get('/api/v2/list_movies.json', {
      params: {
        limit: 5,
        sort_by: 'year',
        order_by: 'desc',
        query_term: 'mother'
      }
    });

    setData(res.data.data.movies);
  }

  // props로 가져와야함
  const clickEvent = (e) => {
    const { target } = e;
    // let parent = target.target;
    
    // if (target.target.tagName.toLowerCase() !== 'li') {
    //   parent = target.target.closest('li');
    // }
    const parent = target.tagName.toLowerCase() === 'li' ? target : target.closest('li');

    console.log(parent.dataset.id);
  }

  return (
    <div className='app'>
      <Header />
      {/* props는 부모가 자식한테로만 ㄱㄴ */}
      <Search />
      {/* props로 가져오려면 각각을 선언 */}
      <Main data={ data} clickEvent={ clickEvent } />
      {/* 상태 바뀔때 클래스 추가 문법 */}
      <div id="modal" className={!setDetail ? '' : 'show'}></div>
    </div>
  );
}

export default App;
