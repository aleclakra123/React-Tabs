import { FaAngleDoubleRight } from 'react-icons/fa';
import React from 'react';

export default function Article({title, company, dates, duties}) {
    return (
      <article className='job-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        <>
        {
          duties.map((duty, index)=>{
            return (
              <div className='job-desc' key={index}>
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            )
          })
        }
        </>
      </article>
    )
  }