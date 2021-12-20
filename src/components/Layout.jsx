import React from "react"
import Box from "@mui/material/Box"
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from "@mui/material/Drawer";
import {Outlet} from "react-router-dom"
import {List, ListItem, ListItemText} from "@mui/material";
import {Link} from "react-router-dom"
const drawerWidth = 240

const Layout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Drawer variant="permanent" open={true} sx={{width: drawerWidth}}>
                <List sx={{width: drawerWidth}}>
                    <ListItem button component={Link} to="/">
                        <ListItemText primary={"Home"}/>
                    </ListItem>
                    <ListItem button component={Link} to="/create">
                        <ListItemText primary={"Create"} />
                    </ListItem>
                </List>
            </Drawer>

            <Box sx={{
                background: "#f7f7f7",
                width: "100%",
                height: "100vh",
                padding: 3,
                flexGrow: 1

            }}>
                <Outlet/>
            </Box>
        </Box>
    )
}

export default Layout
