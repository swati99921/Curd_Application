
import {AppBar, Toolbar, Typography,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header:{
        background: '#111111'
    }, 

    tabs:{
        color:'#ffffff',
        textDecoration:'null',
        marginRight:20,
        fontSize:20

    },

});

const Navbar = () =>{
    const classes = useStyle();
    return(
        <>
            <AppBar className={classes.header} position="static">

                <Toolbar>
                    <NavLink className={classes.tabs} to="/" exact>codefor</NavLink>
                    <NavLink className={classes.tabs} to="all"  exact>Alluser</NavLink>
                    <NavLink className={classes.tabs}  to="add" exact>Adduser</NavLink>
                </Toolbar>
            </AppBar>
        </>

        
    );

}

export default Navbar;