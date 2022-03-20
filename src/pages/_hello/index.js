import React from 'react'
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

export const HelloPage = () => {
  const { message } = useParams();

  return (
    <div className="text-center">
      <Header />
      <div className="pt-5">
      {
        isNaN(+message) ? <p>The word is: { message }</p> : message
      }
      </div>
    </div>
  )
}