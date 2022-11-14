import * as React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'

const prepCss = {
  timeIconStyles: {
    fontSize: '40px',
  },
  recipeSectionWrapper: {
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

function RecipePrepareSection(props) {
  const { recipeData } = props
  return (
    <>
      <div css={prepCss.recipeSectionWrapper}>
        <div css={prepCss.section}>
          <AccessTimeIcon css={prepCss.timeIconStyles} />
          <Box css={prepCss.detailsWrapper}>
            <span css={prepCss.label}>PREP</span>
            <span css={prepCss.value}>{recipeData.prepTime}</span>
          </Box>
        </div>
        <div css={prepCss.section}>
          <Box css={prepCss.detailsWrapper}>
            <span css={prepCss.label}>BAKE</span>
            <span css={prepCss.value}>{recipeData.bakeTime}</span>
          </Box>
          <Box css={prepCss.detailsWrapper}>
            <span css={prepCss.label}>TOTAL</span>
            <span css={prepCss.value}>{recipeData.totalTime}</span>
          </Box>
        </div>
      </div>
      <Divider sx={{marginBottom: "20px"}} />
    </>
  )
}

export default RecipePrepareSection
