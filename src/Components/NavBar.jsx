import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TAB1 from "../Containers/TAB1";
import TAB2 from "../Containers/TAB2";
import TAB3 from "../Containers/TAB3";
import Home from  "../Containers/Home";
import SearchIcon from '@material-ui/icons/Search';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      backgroundColor: "#f50057"
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  paragraphStyle: {
    color: "white"
  },
  headerColor: {
    backgroundColor: "#f50057",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  headerName: {
    fontFamily: "monospace",
    fontSize: "xx-large"
  },
  textAlign: {
      textAlign: "center"
  },
  iconStyle: {      
      marginRight: "1rem",
      marginTop: "1.2rem"
  },
  searchStyle: {
    height: "7vh",
    width: "30vw",
    border: "1px solid gray",
    borderRadius: ".5rem",
    textAlign: "left"
  },
  iconSearch : {
    marginTop: ".7rem",
    marginLeft: ".5rem"
  }
});

class NavBar extends React.Component {
  state = {
    open: false,
    toggleOpen : false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleToggle = () => {
      console.log("**toggle**", this.state.toggleOpen)
      this.setState({
          toggleOpen: !this.state.toggleOpen
      })
  }

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <Router className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.headerName} variant="h6" color="inherit" noWrap>
              Snipper
            </Typography>
          </Toolbar>
          <div className={classes.iconStyle}> 

          <SearchIcon onClick={this.handleToggle}/>
          </div>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ClearIcon /> : <ClearIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/TAB1">
              <ListItem className={classes.textAlign}>
                <ListItemText primary="TAB1" />
              </ListItem>
            </Link>
            <Link to="/TAB2">
              <ListItem className={classes.textAlign}>
                <ListItemText primary="TAB2" />
              </ListItem>
            </Link>
            <Link to="/TAB3">
              <ListItem className={classes.textAlign}>
                {/* <ListItemIcon><InboxIcon /> </ListItemIcon> */}
                <ListItemText primary="TAB3" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          {this.state.toggleOpen ? (
          <div className={classes.searchStyle}>  
          <SearchIcon className={classes.iconSearch}/>
          </div>
          ): null}
          <Home />
        <Route exact path="/TAB1" component={TAB1} />
        <Route path="/TAB2" component={TAB2} />
        <Route path="/TAB3" component={TAB3} />
        </main>
      </Router>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(NavBar);