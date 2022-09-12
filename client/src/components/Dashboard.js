import React from 'react'
import { Link } from 'react-router-dom'
import ProfileList from './profiles/ProfileList'

const Dashboard = () => {
  return (
    <div>
      <ProfileList/>
      <div className='fixed-action-btn'>
        <Link to="/profiles/new" className='btn-floating btn-large red'>
          <i className='large material-icons'>add</i>
        </Link>
      </div>
    </div>

  )
}

export default Dashboard