import React from "react"
import {Link, Outlet} from "react-router-dom"
import Box from "@mui/material/Box"
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import {Menu as MenuIcon} from "@mui/icons-material";

const drawerWidth = 240

const Layout = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>

            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Notes App
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                sx={{width: drawerWidth, display: {xs: 'none', sm: 'block'}}}
            >
                <List sx={{width: drawerWidth}}>
                    <ListItem button component={Link} to="/">
                        <ListItemText primary={"Home"}/>
                    </ListItem>
                    <ListItem button component={Link} to="/create">
                        <ListItemText primary={"Create"}/>
                    </ListItem>
                </List>
            </Drawer>

            <Drawer
                variant="temporary"
                open={mobileOpen}
                sx={{width: drawerWidth, display: {xs: 'block', sm: 'none'}}}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <Typography variant="h5" p={2}>Notes</Typography>
                <List sx={{width: drawerWidth}}>
                    <ListItem button component={Link} to="/">
                        <ListItemText primary={"Home"}/>
                    </ListItem>
                    <ListItem button component={Link} to="/create">
                        <ListItemText primary={"Create"}/>
                    </ListItem>
                </List>
            </Drawer>

            <Box sx={{
                background: "#f7f7f7",
                width: "100%",
                height: "100vh",
                paddingX: 2,
                paddingTop: 5,
                flexGrow: 1
            }}>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default Layout
