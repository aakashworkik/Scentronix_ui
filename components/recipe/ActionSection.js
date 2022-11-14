import * as React from 'react'
import { css } from '@emotion/react'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import PrintIcon from '@mui/icons-material/Print'

const actionCss = {
  actionSectionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: '10px',
  },
  section: {
    display: 'flex',
  },
  button: {
    whiteSpace: 'nowrap',
    color: '#333',
    borderColor: 'red',
    marginRight: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontSize: '12px',
    fontWeight: 600,
    '& svg': {
      marginRight: '5px',
    },
  },
}

function ActionSection(props) {
  const { recipeData } = props
  return (
    <>
      <div css={actionCss.actionSectionWrapper}>
        <div css={actionCss.section}>
          {/* TODO: Create a common button component for all cases */}
          <Button variant="outlined" css={actionCss.button}>
            <AddIcon /> Save Recipe
          </Button>
          <Button
            onClick={() => {
              window.print()
            }}
            variant="outlined"
            css={actionCss.button}
          >
            <PrintIcon />
            Print
          </Button>
        </div>
      </div>
    </>
  )
}

export default ActionSection
