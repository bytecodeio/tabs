import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home
} from "@material-ui/icons";



const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#7c5fe3",
    height: "100%"
  },

  listItem: {
    color: "white"
  }
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts"
  }
];

function MaterialUIVertical() {



  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  const sideList = () => (
  <Box className={classes.menuSliderContainer} component="div">

    <Divider />
    <List>
      {listItems.map((listItem, index) => (
        <ListItem className={classes.listItem} button key={index}>
          <ListItemIcon className={classes.listItem}>
            {listItem.listIcon}
          </ListItemIcon>
          <ListItemText primary={listItem.listText} />
        </ListItem>
      ))}
    </List>
  </Box>
);

  return (
    <>
    <CssBaseline />

    <Box component="nav">
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleSlider}>
            <Menu />
          </IconButton>
          <Typography>Portfolio</Typography>
          <Drawer open={open} anchor="right" onClose={toggleSlider}>
            {sideList()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  </>
  );
}

export default MaterialUIVertical;
