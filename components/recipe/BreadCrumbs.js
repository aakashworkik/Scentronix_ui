import * as React from 'react'
import Link from 'components/common/Link'
import PropTypes from 'prop-types'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { css } from '@emotion/react'


const breadcrumbCss = {
    recipeItemWrapper: {
        display: "inline-flex",
        alignItems: "center",
        "& a": {
            color: "#333",
            textDecoration: "none",
            textTransform: "uppercase",
            fontSize: "14px",
            fontWeight: 700
        },
        "& svg": {
            fontSize: "19px",
            color: "red"
        }
    }
}


function RecipeBreadcrumbs(props) {
  const { pathArray } = props
  return (
    <div>
      {pathArray.map((path) => {
        return (
          <span css={breadcrumbCss.recipeItemWrapper} >
            <Link href={path.slug}>{path.label} </Link>
            <NavigateNextIcon />
          </span>
        )
      })}
    </div>
  )
}

RecipeBreadcrumbs.propTypes = {
  pathArray: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
}
export default RecipeBreadcrumbs
