

//rsi

import React, { useEffect, useRef } from 'react';
// import { GlobalsContext } from '../context_globals/globals_context';



import {sign_in_with_google, sign_out_with_google} from './global_google_in_out';
import {StackRow} from "../code_global/GlobalAtoms";


const EntranceWithGoogle = (props:any) => {

    // const { global_props } = React.useContext(GlobalsContext);


    const btnRef = useRef<HTMLButtonElement>(null)
    // const btnRef = LegacyRef<HTMLButtonElement>(null)

    useEffect(() => {

        if(props.call_back) {
            console.log("=== call_back ")
            props.call_back()
        }

        if(btnRef.current) {
            btnRef?.current?.click()
        }
        return () => {

        };
    }, []); /*???*/


    return(
    <>

        <StackRow alignContent={'left'} onClick={(e:any)=>{
            console.log(Date.now())
            sign_in_with_google()
        }}>
            <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="24" width="24"><path fill="#4285f4" d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"></path><path fill="#34a853" d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"></path><path fill="#fbbc02" d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"></path><path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"></path></svg>
                <div>Continue with Google</div>
            </>
        </StackRow>

        {/*<textarea*/}
        {/*    value={JSON.stringify(global_props.current_user)}*/}
        {/*    cols={30} rows={10} wrap='false'*/}
        {/*    onChange={()=>{}}*/}
        {/*></textarea>*/}

        {/*{!global_props.current_user.step_logged_in?''*/}
        {/*    :*/}
        <button onClick={()=> {
            sign_out_with_google()
        }}> Sign Out </button>
        {/*}*/}


    </>

)
};


export default EntranceWithGoogle;
