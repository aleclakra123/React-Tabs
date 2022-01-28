import React, { useState, useEffect } from 'react'
import Article from './article';
import Loading from './loading';

const url = 'https://course-api.com/react-tabs-project'
function App() {

  const [data, setData] = useState([]); 
  const [activeIndex, setActiveIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{

    async function loadData() {
      let res = await fetch(url);
      res = await res.json();
      setData(res);
      setActiveIndex(0);
      setLoading(false);
    }
    loadData();
    
  }, []);


  if(loading) {
    return (
      <section className='section loading'>
        <Loading />
      </section>
    )
  }

  return (
       <section className='section'>
         <div className='title'>
           <h2>Experience</h2>
           <div className='underline'></div>
         </div>
         <div className='jobs-center'>
           <div className='btn-container'>
             {
               data.map(({company}, index)=>{
                 return <button className={'job-btn ' + (activeIndex === index ? 'active-btn': '')} key={index} onClick={()=>{ setActiveIndex(index) }}>{company}</button>
               })
             }
           </div>
           {data.length > 0 && <Article {...data[activeIndex]} />}
         </div>
         <button type="button" className="btn">more info</button>
       </section>
  )
}




export default App
