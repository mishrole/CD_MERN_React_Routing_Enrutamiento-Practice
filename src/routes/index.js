import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage } from '../pages/_home';
import { HelloPage } from '../pages/_hello';
import { HelloStylePage } from '../pages/_helloStyle';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigate to="/home"/> } />
      <Route path="/home" element={ <HomePage /> } />
      <Route path="/:message" element={ <HelloPage /> } />
      <Route path="/:message/:text/:background" element={ <HelloStylePage /> }/>
    </Routes>
  )
}

export default Root;