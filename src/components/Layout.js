import React, { useState } from 'react';
import { Collapse, makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlineOutlined, ExpandLess, ExpandMore } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import ListIcon from '@material-ui/icons/List';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

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
        display: 'flex'
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
      }
  }
}) 

function Layout({ children }) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
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
    ]

    const transactionCategories = [
        {
            text: "General 🔩",
            icon: <FiberManualRecordIcon color="secondary" style={{ fontSize: 15 }}/>,
            path: "/general"
        },
        {
            text: "Income 💰",
            icon: <FiberManualRecordIcon color="secondary" style={{ fontSize: 15 }}/>,
            path: "/income" 
        },
        {
            text: "Food 🍽",
            icon: <FiberManualRecordIcon color="secondary" style={{ fontSize: 15 }}/>,
            path: "/food"
        },
        {
            text: "Entertainment and Leisure 🏖",
            icon: <FiberManualRecordIcon color="secondary" style={{ fontSize: 15 }}/>,
            path: "/entertainment/leisure"
        },
        {
            text: "Savings 🌱",
            icon: <FiberManualRecordIcon color="secondary" style={{ fontSize: 15 }}/>,
            path: "/savings"
        },
        {
            text:  "Shopping 🛍",
            icon: <FiberManualRecordIcon color="secondary" style={{ fontSize: 15 }}/>,
            path: "/shopping" 
        },
        {
            text: "Transport 🚗",
            icon: <FiberManualRecordIcon color="secondary" style={{ fontSize: 15 }}/>,
            path: "/transport"
        },
        {
            text: "Bills 💡",
            icon: <FiberManualRecordIcon color="secondary" style={{ fontSize: 15 }}/>,
            path: "/bills"
        }
    ]

  return (
    <div className={classes.root}>
        <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
        >
            <div>
                <Typography
                variant="h5"
                className={classes.title}
                >
                    Opal
                </Typography>
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
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <ListIcon />
                </ListItemIcon>
            <ListItemText primary="Transaction Categories">
                    {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemText>
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

export default Layout