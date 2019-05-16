import React from "react";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
    paperStyle: {
        width: '80vw',
        height :'80vh'
    },
    colorStyle: {
        color: "grey"
        
    }
})

class Resume extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <Paper className={classes.paperStyle}>
        <h1 className={classes.colorStyle} >
        Hello
        </h1>
             </Paper>
        )
    }
}

export default withStyles(styles)(Resume);