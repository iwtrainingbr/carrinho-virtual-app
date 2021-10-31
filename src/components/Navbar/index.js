import {useState} from "react";
import {useHistory} from "react-router-dom";
import {
  List, ListItem, ListItemText, ListItemIcon, AppBar, Box, Drawer, Toolbar, Divider, IconButton, Typography, MenuItem, Menu
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingIcon from "@mui/icons-material/Settings";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LogoutIcon from "@mui/icons-material/Logout";
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import "./styles.css";

export default function Navbar() {
  const history = useHistory();
  const [userMenu, setUserMenu] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleUserMenu = () => {
    setUserMenu(!userMenu);
  };

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  const redirect = (url) => {
    history.push(url);
    handleSidebar();
  };

  const Sidebar = () => {
    return (
      <Box sx={{width: 250}} >
        <List>
          <ListItem button onClick={() => redirect('/')}>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItem>

          <ListItem button onClick={() => redirect('/cadastro')}>
            <ListItemIcon><PersonAddIcon/></ListItemIcon>
            <ListItemText>Cadastro</ListItemText>
          </ListItem>

          <ListItem button onClick={() => redirect('/dashboard')}>
            <ListItemIcon><DashboardIcon/></ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItem>

          <ListItem button onClick={() => redirect('/config')}>
            <ListItemIcon><SettingIcon/></ListItemIcon>
            <ListItemText>Configurações</ListItemText>
          </ListItem>

          <ListItem button onClick={() => redirect('/relatorio')}>
            <ListItemIcon><AnalyticsIcon/></ListItemIcon>
            <ListItemText>Relatórios</ListItemText>
          </ListItem>

          <ListItem button onClick={() => redirect('/categorias')}>
            <ListItemIcon><StorefrontIcon/></ListItemIcon>
            <ListItemText>Categorias</ListItemText>
          </ListItem>


          <ListItem button onClick={() => redirect('/veiculos')}>
            <ListItemIcon><DriveEtaIcon/></ListItemIcon>
            <ListItemText>Veiculos</ListItemText>
          </ListItem>

          <ListItem button onClick={() => redirect('/produtos')}>
            <ListItemIcon><StorefrontIcon/></ListItemIcon>
            <ListItemText>Produtos</ListItemText>
          </ListItem>

          <Divider/>

          <ListItem className="menu-logout" button onClick={() => redirect('/login')}>
            <ListItemIcon><LogoutIcon/></ListItemIcon>
            <ListItemText>Sair</ListItemText>
          </ListItem>

        </List>
      </Box>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer open={sidebar} onClose={handleSidebar}>
        <Sidebar/>
      </Drawer>

      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={handleSidebar}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleUserMenu}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={userMenu}
              onClose={handleUserMenu}
            >
              <MenuItem>Minha Conta</MenuItem>
              <MenuItem>Configurações</MenuItem>
              <Divider/>
              <MenuItem className="menu-logout">Sair</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
