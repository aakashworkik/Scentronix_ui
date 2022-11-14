import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { css } from '@emotion/react'
import Fade from '@mui/material/Fade'
import { useRouter } from 'next/router'
import { subNav } from '../common/navConfig';



const bottomHeaderCss = {
  bottomMenu: css({
    paddingLeft: '170px',
  }),
  bottomAppBar: css({
    minHeight: '45px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f5f0',
    top: '75px',
    '& button': {
      color: '#000',
      fontWeight: 600,
    },
  }),
  bottomSubMenu: css({
    display: 'inline-flex',
  }),
  menuWrapper: css({
    border: "1px solid #ccc"
  }),
}

function SecondaryHeader(props) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const router = useRouter()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChangePage = (slug) => {
    router.push(slug);
  }
  return (
    <>
      <AppBar
        component="nav"
        css={bottomHeaderCss.bottomAppBar}
        sx={{ display: { xs: 'none', sm: 'flex' } }}
      >
        <Container maxWidth="lg">
          <Box
            css={bottomHeaderCss.bottomMenu}
            sx={{ color: '#000', fontWeight: 600 }}
          >
            {subNav.map((item) =>
              item.subItems?.length ? (
                <div css={bottomHeaderCss.bottomSubMenu} key={item.name}>
                  <Button
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    {item.name}
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    {item.subItems.map((subItem) => {
                      return (
                        <MenuItem
                          onClick={() => handleChangePage(subItem.slug)}
                          key={subItem.slug}
                        >
                          {subItem.name}
                        </MenuItem>
                      )
                    })}
                  </Menu>
                </div>
              ) : (
                <Button key={item.name}>{item.name}</Button>
              ),
            )}
          </Box>
        </Container>
      </AppBar>
    </>
  )
}

SecondaryHeader.propTypes = {}

export default SecondaryHeader
