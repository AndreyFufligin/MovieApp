import {Typography, AppBar, Toolbar} from '@mui/material'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import Divider from '@mui/material/Divider'
import styles from './Header.module.css'

const Header: React.FC = () => {
  return (
    <>
      <AppBar>
        <Toolbar className={styles.toolbar}>
          <Typography variant="h6">Фильмы</Typography>
          <Typography>
            <PersonOutlineIcon sx={{color: '#f7f0f0'}} fontSize="medium" />
          </Typography>
        </Toolbar>
        <Divider className={styles.divider} orientation="horizontal" />
      </AppBar>
    </>
  )
}

export default Header
