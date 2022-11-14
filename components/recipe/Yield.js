import * as React from 'react'
import { css } from '@emotion/react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import BlurCircularIcon from '@mui/icons-material/BlurCircular';


const prepCss = {
  yieldIcon: {
    fontSize: '40px',
  },
  yieldSectionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: "10px"
  },
  detailsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  label: {
    fontSize: '12px',
    fontWeight: 700,
  },
  value: {
    fontWeight: 600,
    fontSize: '18px',
  },
  section: {
    display: 'flex',
  },

}

function YieldSection(props) {
  const { recipeData } = props
  return (
    <>
      <div css={prepCss.yieldSectionWrapper}>
        <div css={prepCss.section}>
          <BlurCircularIcon css={prepCss.yieldIcon} />
          <Box css={prepCss.detailsWrapper}>
            <span css={prepCss.label}>YIELD</span>
            <span css={prepCss.value}>{recipeData.yield}</span>
          </Box>
        </div>

      </div>
    </>
  )
}

export default YieldSection
