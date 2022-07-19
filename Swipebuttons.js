import React from 'react'
import '../style/swbtn.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavouriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

function Swipebuttons() {
  return (
    <div className='swbtn'>
      <IconButton className='repeat'>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='left'>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='star'>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className='right'>
        <FavouriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='light'>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

export default Swipebuttons
