import React from 'react'
import Header from '../../../components/admin/header/Header'
import VideoComp from '../../../components/admin/video/Video'
import './video.scss'

function Video() {
  return (
    <div>
      <div className="admin-header">
        <Header />
      </div>
      <div className="content">
        <VideoComp />
      </div>
    </div>
  )
}

export default Video