import * as React from 'react'
import Box from '@mui/material/Box'
import TopHeader from './TopHeader'
import SecondaryHeader from './SecondaryHeader'

function HeaderWrapper(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* TODO: Seperate Mobile header from Top Header  */}
      <TopHeader />
      <SecondaryHeader />
    </Box>
  )
}

export default HeaderWrapper
