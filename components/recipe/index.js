import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Image from 'next/image'
import RecipeBreadcrumbs from './BreadCrumbs'
import RecipePrepareSection from './PrepDetails'
import { Typography } from '@mui/material'
import YieldSection from './Yield'
import ActionSection from './ActionSection'

const recipeCss = {
  title: {
    fontSize: '35px',
  },
  imageWrapper: {
    position: 'relative',
    '& img': {
      position: 'relative !important',
    },
  },
  description: {
    marginBottom: '20px',
    color: '#454242',
  },
  overview: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginBottom: '20px',
  }
}

function RecipeDescription(props) {
  const { recipeData } = props
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box
          sx={{
            width: { xs: '100%', sm: '100%', md: '40%', lg: '40%' },
          }}
        >
          <RecipeBreadcrumbs pathArray={recipeData.path} />

          {/* Title */}
          <Typography
            sx={{
              fontSize: '35px',
              fontWeight: 700,
            }}
            component="h1"
          >
            {' '}
            {recipeData.title}
          </Typography>

          {/* TODO:  We need to render the HTML instead fo string */}
          <Typography
            sx={{
              marginTop: { xs: '20px', sm: '30px', md: '80px', lg: '120px' },
            }}
            css={recipeCss.description}
          >
            {recipeData.description}
          </Typography>

          <RecipePrepareSection recipeData={recipeData} />

          {/* Actions */}

          <div css={ recipeCss.overview }
          >
            <YieldSection recipeData={recipeData} />
            <ActionSection />
          </div>
        </Box>
        <Box
          css={recipeCss.imageWrapper}
          sx={{
            width: { xs: '100%', sm: '100%', md: '60%', lg: '60%' },
            paddingLeft: { sm: '0px', md: '100px' },
          }}
        >
          <Image
            layout="fill"
            src={`/recipe/${recipeData.image}.png`}
            alt="Recipe Image"
            objectFit="contain"
          />
        </Box>
      </Box>
    </Container>
  )
}

export default RecipeDescription
