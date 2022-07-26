import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import logo from '../../images/fieldx.svg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { deepOrange } from '@mui/material/colors';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

import { Avatar, Button, Typography } from '@mui/material';
import Region from './Region';
import Area from './Area';
import { useContext } from 'react';
import Context from '../Context/Context';


const drawerWidth = 190;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { userData } = useContext(Context);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Link style={{ textDecoration: 'none' }} to="/">

                <Button sx={{ fontWeight: 600, m: 3 }}>Home</Button>
            </Link>
            <Divider />
            <List>
                <ListItem button>
                    <Link to={url} style={{ textDecoration: "none" }}>Region</Link>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <Link style={{ textDecoration: "none" }} to={`${url}/area`}>Area</Link>
                </ListItem>
            </List>
            <Divider />
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex', mt: 7 }}>
                <CssBaseline />
                <AppBar
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        background: "#fff"

                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} alt="" style={{ width: "130px" }} />
                        <Typography variant="h6" sx={{ color: "#1E7FB2" }}>Welcome Back,<span style={{ color: "red" }}>{userData.name}</span></Typography>
                        <Box sx={{ display: "block", marginLeft: "auto" }}>


                            <Avatar sx={{ bgcolor: deepOrange[500] }}>{userData.image}</Avatar>

                        </Box>

                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Switch>
                        <Route exact path={path}>
                            <Region />
                        </Route>
                        <Route path={`${path}/area`}>
                            <Area />
                        </Route>
                    </Switch>
                </Box>
            </Box >
        </>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;