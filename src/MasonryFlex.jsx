import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

//ClassName을 쉽게 설정하기 위한 코드입니다. 
//Material-ui의 makeStyles 메서드에 대해 모르더라도 
//styleSheet를 import하는 방식으로 작성할 수 있습니다.
const useStyles=makeStyles(theme=>({
    container:{
        display:'flex',
        flexFlow:'column wrap',
        justifyContent:'baseline',
        maxHeight:'800px',
        marginLeft:'-8px',
        width:'100%'
    },
    items:{
        margin:'0 8px 8px 0',
        boxSizing:'border-box',
        borderRadius:'20px',
        border:'1px solid black',
        width:'25%'
    }
}))

const MasonryFlex = () => {
    const classes=useStyles();
    return (
        <div className={classes.container}>
            <div 
                className={classes.items}
                style={{height:'120px'}}
            >
                <p>Item 1</p>
            </div>
            <div 
                className={classes.items}
                style={{height:'200px'}}
            >
                <p>Item 2</p>
            </div>
            <div 
                className={classes.items}
                style={{height:'380px'}}
            >
                <p>Item 3</p>
            </div>
            <div 
                className={classes.items}
                style={{height:'570px'}}
            >
                <p>Item 4</p>
            </div>
            <div 
                className={classes.items}
                style={{height:'120px'}}
            >
                <p>Item 5</p>
            </div>
            <div 
                className={classes.items}
                style={{height:'120px'}}
            >
                <p>Item 6</p>
            </div>
            <div 
                className={classes.items}
                style={{height:'200px'}}
            >
                <p>Item 7</p>
            </div>
            <div 
                className={classes.items}
                style={{height:'380px'}}
            >
                <p>Item 8</p>
            </div>
            <div 
                className={classes.items}
                style={{height:'570px'}}
            >
                <p>Item 9</p>
            </div>
            <div 
                className={classes.items}
                style={{height:'120px'}}
            >
                <p>Item 10</p>
            </div>
        </div>
    );
};

export default MasonryFlex;