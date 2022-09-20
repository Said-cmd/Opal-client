import React, { useState } from 'react';
import { Collapse, makeStyles, alpha, IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlineOutlined, ExpandLess, ExpandMore } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import ListIcon from '@material-ui/icons/List';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CommuteIcon from '@material-ui/icons/Commute';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Avatar from '@material-ui/core/Avatar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Icon from '@material-ui/core/Icon';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
    page: {
        background: "#f9f9f9",
        width: "100%",
        padding: theme.spacing(3)
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex',
    },
    palette: {
        textColor: "#000000"
    },
    active: {
        background: "#f8bbd0"
    },
    title: {
        padding: theme.spacing(2)
    },
    toolbar: theme.mixins.toolbar,
    nested: {
        paddingLeft: theme.spacing(4),
      },
      brand : {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      },
      appbar: {
        width: `calc(100% - ${drawerWidth}px)`,
        background: "#ffffff",
        color: "#000000"
      },
      search: {
        position: 'relative',
        flexGrow: 1,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000000'
      },
      inputRoot: {
        color: 'inherit',
        background: '#f9f9f9'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '30ch',
        },
        avatar: {
            marginLeft: theme.spacing(3),
            backgroundColor: "#ff1744"
        }
    }
  }
}) 

function Layout({ children, setSearch }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const [open, setOpen] = useState(true);
    const [userIconOpen, setUserIconOpen] = useState(false)

    function handleSearch(e) {
        setSearch(e.target.value)
    }
    
    const handleClickCategories = () => {
        setOpen(!open);
    }

    const handleClickProfile = () => {
        setUserIconOpen(!userIconOpen);
    }

    const sideBarItems = [
        {
            text: "My Transactions",
            icon: <AccountBalanceIcon color="secondary" />,
            path: "/account"
        },
        {
            text: "Add Transaction",
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: "/addtransaction"
        },
        {
            text: "Transaction Wheel",
            icon: <DonutLargeIcon color="secondary" />,
            path: "/transaction-wheel"
        } 
    ]

    const transactionCategories = [
        {
            text: "General",
            icon: <AccountTreeIcon color="secondary" style={{ fontSize: 20 }}/>,
            path: "/general"
        },
        {
            text: "Income",
            icon: <MonetizationOnIcon color="secondary" style={{ fontSize: 20 }}/>,
            path: "/income" 
        },
        {
            text: "Food",
            icon: <FastfoodIcon color="secondary" style={{ fontSize: 20 }}/>,
            path: "/food"
        },
        {
            text: "Entertainment and Leisure",
            icon: <SportsEsportsIcon color="secondary" style={{ fontSize: 20 }}/>,
            path: "/entertainment-leisure"
        },
        {
            text: "Savings",
            icon: <LocalFloristIcon color="secondary" style={{ fontSize: 20 }}/>,
            path: "/savings"
        },
        {
            text:  "Shopping",
            icon: <ShoppingCartIcon color="secondary" style={{ fontSize: 20 }}/>,
            path: "/shopping" 
        },
        {
            text: "Transport",
            icon: <CommuteIcon color="secondary" style={{ fontSize: 20 }}/>,
            path: "/transport"
        },
        {
            text: "Bills",
            icon: <EmojiObjectsIcon color="secondary" style={{ fontSize: 20 }}/>,
            path: "/bills"
        }
    ]

  return (
    <div className={classes.root}>
        <AppBar className={classes.appbar}
        elevation={0}
        >
            <Toolbar>
                <Icon>
                    <SearchIcon />
                </Icon>
                <div className={classes.search}>
                    <InputBase
                    placeholder="Search"
                    onChange={handleSearch}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
               <List>
               <ListItem button onClick={handleClickProfile}>
                <ListItemIcon>
                <AccountCircleIcon color="secondary"/>
                </ListItemIcon>
                <ListItemText primary="User" />
            </ListItem>
            <Collapse in={userIconOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button className={classes.nested} 
                onClick={() => {
                    history.push("/")
                    setUserIconOpen(!userIconOpen)
                    }}>
                    <ListItemIcon>
                    <ExitToAppIcon color="secondary"/>
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
                </List>
            </Collapse>
               </List>
               </Toolbar>
        </AppBar>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
        >
            <div>
                <List className={classes.brand}>
                <Typography
                variant="h5"
                className={classes.title}
                >
                <Avatar src="/logo.png"/>
                </Typography>
                <Typography
                variant="h4"
                className={classes.title}
                >
                Opal
                </Typography>
                </List>
            </div>
            <List>
                {sideBarItems.map(item => (
                    <ListItem
                    key={item.text}
                    button
                    onClick={() => history.push(item.path)}
                    className={location.pathname == item.path ? classes.active : null}
                    >
                    <ListItemIcon>{ item.icon }</ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            <ListItem button onClick={handleClickCategories}>
                <ListItemIcon>
                    <ListIcon color="secondary" />
                </ListItemIcon>
            <ListItemText primary="Transaction Categories">
            </ListItemText>
            <ListItemIcon>{open ? <Icon color='secondary' style={{ fontSize: 25, paddingLeft: 30}}><ExpandLess /></Icon> : <Icon color='secondary' style={{ fontSize: 25, paddingLeft: 30 }}><ExpandMore /></Icon>}</ListItemIcon>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {transactionCategories.map(item => (
                    <ListItem
                    key={item.text}
                    button
                    onClick={() => history.push(item.path)}
                    className={location.pathname == item.path ? classes.active : null}
                    >
                    <ListItemIcon>{ item.icon }</ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItem>
                ))} 
                </List>
            </Collapse>
            </List>
        </Drawer>
        <div className={classes.page}>
            <div className={classes.toolbar}></div>
            { children }
        </div>
    </div>
  )
}

export default Layout;