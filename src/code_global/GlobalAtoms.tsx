

import {Stack} from "@mui/material";
import React from "react";

export  const StackColumn = (props:any) =>{
    return(

        <Stack direction='column' alignContent={'center'} alignItems={'center'} {...props}>
            {props.children}
        </Stack>
    )
}

export  const StackRow = (props:any) =>{
    return(

        <Stack direction='row' alignContent={'center'} alignItems={'center'} {...props} >
            {props.children}
        </Stack>
    )
}
