import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Images from '../../Images/images.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    imge: {
        marginRight: theme.spacing(1)
    }
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        SAYLANI WEB AND MOBILE APP | Batch 3
                    </Typography>
                    <Button color="inherit">
                        <Avatar alt="Remy Sharp" variant="h6" className={classes.imge} src={Images} />Assignments <br />KHURRAM AHMAD </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

