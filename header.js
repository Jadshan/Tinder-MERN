import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import { IconButton } from '@material-ui/core'
import '../style/header.css'
import ForumIcon from '@material-ui/icons/Forum'
function Header() {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='h_icon' />
      </IconButton>
      <img
        className='h_logo'
        src='https://i.pinimg.com/originals/09/f2/5b/09f25b8b685c3fd8916e06ca136b5d86.jpg'
        alt=''
      />
      <IconButton>
        <ForumIcon fontSize='large' className='h_icon' />
      </IconButton>
    </div>
  )
}

export default Header
