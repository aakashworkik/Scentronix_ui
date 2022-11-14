import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Image from 'next/image'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Collapse from '@mui/material/Collapse'
import { navItems, mobileNavItems } from '../common/navConfig'



const drawerWidth = 240

const topHeaderCss = {
  logo: css({
    marginBottom: '-55px',
  }),
  topMenu: css({
    marginLeft: '30px',
  }),
  topAppBar: css({
    minHeight: '75px',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  menuText: css({
    borderBottom: '1px solid red',
    borderRadius: 0,
  }),
}

// TODO: Move the mobile nav to a seperate file

function TopHeader(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const [mobileColapseOpenMenus, setToggleCollapseMenu] = React.useState({})
  const [ignored, reRender] = React.useReducer((x) => x + 1, 0)
  const router = useRouter()
  const slug = router.asPath

  const handleMenuClick = (index) => {
    const selectedMenuItem = mobileNavItems[index]
    if (mobileNavItems[index]?.subItems?.length) {
      let tempOpenMenus = mobileColapseOpenMenus
      tempOpenMenus[selectedMenuItem.name] = !tempOpenMenus[
        selectedMenuItem.name
      ]
      setToggleCollapseMenu(tempOpenMenus)
      reRender()
    } else {
      // Handle click for plain link
    }
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleSubNavigation = page => {
    router.push(page);
  }

  const container =
    window !== undefined ? () => window().document.body : undefined


  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        css={topHeaderCss.topAppBar}
        sx={{ backgroundColor: '#FFF', color: '#000', zIndex: 1101 }}
        component="nav"
      >
        <Container maxWidth="lg">
          <Toolbar css={topHeaderCss.toolbar} sx={{ minHeight: '70px' }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
                maxWidth: '110px',
              }}
            >
              <Image
                width={100}
                height={100}
                css={topHeaderCss.logo}
                src="/chimp.png"
                alt="chimp"
              />
            </Box>
            <Box
              sx={{ display: { xs: 'none', sm: 'block' } }}
              css={topHeaderCss.topMenu}
            >
              {navItems.map((item) => (
                <Button key={item.name} sx={{ color: '#000', fontWeight: 600 }}>
                  <span
                    css={[
                      slug.includes(item.matchPath) && topHeaderCss.menuText,
                    ]}
                  >
                    {item.name}
                  </span>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Box sx={{ textAlign: 'center' }}>
            <Box
              sx={{
                mt: 1,
                mb: 1,
                display: 'flex',
                justifyContent: 'center',
              }}
              onClick={handleDrawerToggle}
            >
              <Image width={50} height={50} src="/chimp.png" alt="chimp" />
            </Box>
            <Divider />
            <List component="nav" aria-labelledby="nested-list-subheader">
              {mobileNavItems.map((item, index) => (
                <ListItem
                  key={item.name}
                  disablePadding
                  onClick={() => handleMenuClick(index)}
                  sx={{ flexDirection: 'column' }}
                >
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item.name} />
                    {item.subItems?.length &&
                      (mobileColapseOpenMenus &&
                      mobileColapseOpenMenus[item.name] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      ))}
                  </ListItemButton>

                  {item.subItems?.length && (
                    <Collapse
                      in={
                        mobileColapseOpenMenus &&
                        mobileColapseOpenMenus[item.name]
                      }
                      timeout="auto"
                      unmountOnExit
                    >
                      {/* TODO - Add better Styles */}
                      <List component="div" disablePadding>
                        {item.subItems.map((subItem) => {
                          return (
                            <ListItemButton onClick={() => handleSubNavigation(subItem.slug)} sx={{ pl: 3 }}>
                              <ListItemText primary={subItem.name} />
                            </ListItemButton>
                          )
                        })}
                      </List>
                    </Collapse>
                  )}
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </Box>
  )
}

TopHeader.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default TopHeader
