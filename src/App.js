// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/header';
import Login from './Login/Login';
import Signup from './SignUp/SignUp';
import Search from './Search/Search';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
};

export default App;



// import logo from './logo.svg';
// import './App.css';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
// import {Link, Routes} from 'react-router-dom'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navigation from './Common/Navigation';
// import { NavLink } from 'react-router-dom';
// import useStyles from './Style/styles';
// import Login from './Login/Login.jsx'
// import SignUp from './SignUp/SignUp.jsx'
// const App = () =>{
//   const classes = useStyles();
//   return(

//     <Router>
//     <Switch>
//       <Route path="/" exact component={App} />
//       <Route path="/new-screen" component={NewScreen} />
//     </Switch>
//   </Router>
//   //   <div>
//   //     <ShoppingCartIcon />
//   //         <span className='btn logo-cart'>Logo</span>
//   //         <span className='btn search'>Search</span>
//   //   <NavLink className={classes.link} to="/signIn">
//   //     Login
//   //   </NavLink>
//   //   <NavLink className={classes.link} to="/signUp">
//   //     Sign Up
//   //   </NavLink>

//   //   {/* Other content */}
//   // </div>
//   );
// };

// function App() {
//   return (
//     // <Router>
//     //   <Routes>
//     //   {/* // <Navigation/> */}
//     //   <div>
//     // <div className="App">
//     //   <header className="App-header">
      
//     //     <Route><div className='buttons'>
//     //     <ShoppingCartIcon />
//     //       <span className='btn logo-cart'>Logo</span>
//     //       <span className='btn search'>Search</span>
          
//     //       <Route path='/signIn' Component={Login}><button className='btn sign-in'>Login</button></Route>
//     //       <Route path='signUp' Component={SignUp}><button className='btn sign-up'>SignIn</button></Route>
          

//     //     </div>
//     //     </Route>
//     //   </header>
//     // </div>
//     // </div>
//     // </Routes>
//     // </Router>
//     <Router>
//       <Routes>
//         <div>
//         <Route path='/signIn' Component={Login}><button className='btn sign-in'>Login</button></Route>
//         <Route path='/signUp' Component={SignUp}><button className='btn sign-up'>SignIn</button></Route>
//         </div>
//       </Routes>
//     </Router>
//   );
// }

 //export default App;
// import React, { useEffect } from "react";

// import makeStyles from '@mui/styles/makeStyles';
// import Fade from '@mui/material/Fade';
// //import { AppBar, InputBase } from "@material-ui/core";
// import { AppBar , InputBase ,Toolbar,Typography} from '@mui/material';
// // import Toolbar from "@material-ui/core/Toolbar";
// // import Button from "@material-ui/core/Button";

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
// import SearchIcon from '@mui/icons-material/Search';
// import { NavLink, useHistory, useLocation } from "react-router-dom";
// //import authService from "../service/auth.service";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//     marginLeft: 10,
//   },
//   link: {
//     color: "white",
//     margin: "20px",
//   },
//   search: {
//     position: "relative",
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: fade(theme.palette.common.white, 0.15),
//     "&:hover": {
//       backgroundColor: fade(theme.palette.common.white, 0.25),
//     },
//     width: "25%",
//     marginRight: "25%",
//   },

//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: "100%",
//     position: "absolute",
//     pointerEvents: "none",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   inputRoot: {
//     color: "inherit",
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();
//   const location = useLocation();
//   const history = useHistory();
//   const [filter, setFilter] = React.useState("");

//   useEffect(() => {

//     // if(!authService.isLoggedIn()) {
//     //   return;
//     // }
    
//     let searchParams = new URLSearchParams(location.search);
//     searchParams.delete("name");
//     if (filter) {
//       searchParams.set("name", filter);
//     }
//     history.push({
//       pathname: "/products",
//       search: searchParams.toString(),
//     });
//   }, [filter]);

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <ShoppingCartIcon />
//           <Typography variant="h6" className={classes.title}>
//             upGrad E-Shop
//           </Typography>
//           {/* //authService.isLoggedIn() &&  */}
//           {<div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               value={filter}
//               onChange={(event) => setFilter(event.target.value)}
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ "aria-label": "search" }}
//             />
//           </div>}
//           {/* !authService.isLoggedIn() && */}
//           { (
//             <>
//               <NavLink className={classes.link} to="/login">
//                 Login
//               </NavLink>
//               <NavLink className={classes.link} to="/signup">
//                 Sign Up
//               </NavLink>
//             </>
//           )}
//           {/* //authService.isLoggedIn() && */}
//           { (
//             <>
//               <NavLink className={classes.link} to="/products">
//                 Home
//               </NavLink>
//             </>
//           )}
//           {/* authService.isLoggedIn() && authService.isAdmin() && */}
//           { (
//             <>
//               <NavLink className={classes.link} to="/add-product">
//                 Add Product
//               </NavLink>
//             </>
//           )}

//           {/* {authService.isLoggedIn() && (
//             <Button
//               variant="contained"
//               color="secondary"
//               onClick={authService.doLogout}
//             >
//               Logout
//             </Button>
//           )} */}
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

