import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../Card/ProductCard';
import Jenkins from '../../Images/jenkins.jpg';
import Admin from '../../Images/admindashboard.png';
import Ecommerence from '../../Images/ecommerence.jpg';
import Counter from '../../Images/counter.png';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: 'center',
        display: 'flex',
        marginLeft: '40px',
        marginRight: '30px',
        marginTop: '35px',
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        color: 'white',
        marginTop: '15px',
    }





}));

export default function AutoGrid({ title, date, image, link1, link2 }) {
    const classes = useStyles();

    return (
        <>
            <div className={classes.heading}>
            <h2>All Assignments of React js</h2>
        </div>
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <ProductCard
                            title="Building Jenkins Website"
                            date="April 13, 2021"
                            image={Jenkins}
                            link1="https://www.jenkins.io/?fbclid=IwAR3ybYFF2BhYJqkKTsjzju-XFWzfrSt0eeV7Qpwy2XQ0FMsoD7jkTLZ8hao"
                            link2="https://www.jenkins.io/?fbclid=IwAR3ybYFF2BhYJqkKTsjzju-XFWzfrSt0eeV7Qpwy2XQ0FMsoD7jkTLZ8hao"
                        />
                    </Grid>
                    <Grid item xs>
                        <ProductCard
                            title="Building Admin Dashboard"
                            date="April 18, 2021"
                            image={Admin}
                            link1="https://www.jenkins.io/?fbclid=IwAR3ybYFF2BhYJqkKTsjzju-XFWzfrSt0eeV7Qpwy2XQ0FMsoD7jkTLZ8hao"
                            link2="https://www.jenkins.io/?fbclid=IwAR3ybYFF2BhYJqkKTsjzju-XFWzfrSt0eeV7Qpwy2XQ0FMsoD7jkTLZ8hao"
                        />

                    </Grid>

                    <Grid item xs >
                        <ProductCard
                            className={classes.link}
                            title="E-Commerce Web Application"
                            date="May 5, 2021" image={Ecommerence}
                            link1="https://www.jenkins.io/?fbclid=IwAR3ybYFF2BhYJqkKTsjzju-XFWzfrSt0eeV7Qpwy2XQ0FMsoD7jkTLZ8hao"
                            link2="https://www.jenkins.io/?fbclid=IwAR3ybYFF2BhYJqkKTsjzju-XFWzfrSt0eeV7Qpwy2XQ0FMsoD7jkTLZ8hao"
                        />
                    </Grid>

                </Grid>

            </div>

            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs>
                        <ProductCard 
                            title="Counter App With Redux" 
                            date="May 25, 2021" 
                            image={Counter} 
                            link1="https://www.jenkins.io/?fbclid=IwAR3ybYFF2BhYJqkKTsjzju-XFWzfrSt0eeV7Qpwy2XQ0FMsoD7jkTLZ8hao"
                            link2="https://www.jenkins.io/?fbclid=IwAR3ybYFF2BhYJqkKTsjzju-XFWzfrSt0eeV7Qpwy2XQ0FMsoD7jkTLZ8hao"
                            />
                    </Grid>
                    {/* <Grid item xs>
                        <ProductCard title="Building Admin Dashboard" date="April 18, 2021" image={Admin} />
                    </Grid>
                    <Grid item xs>
                        <ProductCard title="E-Commerce Web Application" date="May 5, 2021" image={Ecommerence} />
                    </Grid> */}

                </Grid>

            </div>

        </>

    );
}
