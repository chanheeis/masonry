import React,{useState,useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    
}))
const MasonryReact = (props) => {
    //will have colums,gap,children
    //children : array of elements
    //columns : number of columns in the layout

    const classes=useStyles();

    const _createColumn=()=>{
        //wrapper : dynamic sizable container for items
        const wrapper={};

        //result : array containing jsx elements
        const result=[];

        for(let i=0;i<props.columns;i++){
            wrapper[`column${i}`]=[];
        }

        for(let i=0;i<props.children.length;i++){
            //horizontally lay items  
            const columnIndex=i%props.columns;

            wrapper[`column${columnIndex}`].push(
                <div style={{marginBottom:`${props.gap}px`}}>
                    {props.children[i]}
                </div>
            )
        }

        for(let i=0;i<props.columns;i++){
            result.push(
                <div
                    style={{
                        marginLeft:`${i>0?props.gap:0}px`,
                        flex:1
                    }}
                >
                    {wrapper[`column${i}`]}
                </div>
            )
        }
        console.log(wrapper);
        console.log(result);
        return result;
    }

    return (
        <div style={{display:'flex'}}>
            {_createColumn()}
        </div>
    );
};

export default MasonryReact;