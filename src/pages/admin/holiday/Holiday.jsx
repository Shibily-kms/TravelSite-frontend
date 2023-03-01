import React from 'react'
import './holiday.scss'
import Header from '../../../components/admin/header/Header'
import HolidayComp from '../../../components/admin/holiday/Holiday'

function Holiday() {
  return (
    <div>
      <div className="admin-header">
        <Header />
      </div>
      <div className="content">
        <HolidayComp />
      </div>
    </div>
  )
}

export default Holiday