import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FaLocationArrow } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import Images1 from '../../Images/heroImages.jpg';
import Images4 from '../../Images/images2.jpg';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        marginTop: '15px',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',

    },
    btn: {
        margin: theme.spacing(0),
        display: 'flex',
        justifyContent: 'space-between'

    },
    avatar: {
        backgroundColor: red[500],
    },

}));

export default function RecipeReviewCard({ title, date, image, link1, link2}) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar alt="Remy Sharp" src={Images4} />
                    
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={title}
                subheader={date}
            />
            <CardMedia
                className={classes.media}
                image={image}
                title="Paella dish"
            />

            <CardActions className={classes.btn} >
                <Button 
                    variant="outlined" 
                    color="primary" 
                    href={link1} 
                    endIcon={<FaLocationArrow 
                />}>
                    Preview
                </Button>
                <Button 
                    variant="outlined" 
                    href={link2} 
                    endIcon={<AiFillGithub 
                    />}>
                    Github
                </Button>
            </CardActions>

        </Card>
    );
}
