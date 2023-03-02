import React from 'react'
import Header from '../../../components/admin/header/Header'
import PopularComp from '../../../components/admin/popular/Popular'
import './popular.scss'

function Popular() {
  return (
    <div>
    <div className="admin-header">
      <Header />
    </div>
    <div className="content">
      <PopularComp />
    </div>
  </div>
  )
}

export default Popular