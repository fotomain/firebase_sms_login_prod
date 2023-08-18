

import * as React from "react";
import {useState} from "react";
import styled from 'styled-components';

import '../App.css';

import {signInWithPhoneNumber, RecaptchaVerifier} from 'firebase/auth'

import autentication from "./firebase_autentication";

declare global {
    interface Window {
        recaptchaVerifier:any;
        confirmationResult:any;
    }
}


const Div_w=styled.div`
  width: 300px;
  display:flex;
  flex-direction:column;
  justify-content: center;

  text-align: center;

  background-color: transparent;
  /*opacity: 0.3;*/

  gap: 20px;
 
`



const Div_captcha=styled.div`
  width: 100px;
  display:flex;
  flex-direction:column;
  justify-content: center;
`

const LoginByPhoneSms = (props:any) => {

    enum here_steps {
        step_phone,
        step_captcha,

        step_input_code,
        step_contunue,
        step_end,
    }

    const init_state = {
        here_step:here_steps.step_phone,
        // mobile:'+37128815587',
        // '+37126798173',
        mobile: props.start_phone_number,
        otp:'',
        user_guid:'',
        user_phone:'',
        user_password:'',
        hide_captcha:false,
    };


    const [state, setState] = useState(init_state);
    // const [here_step, set_here_step] = useState(here_steps.step_phone);

    const onChangeHandler = (event:any) => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
         });
    };

    const setUpRecaptcha = () => {

        setState({
            ...state,
            ...{
                ['here_step'] :here_steps.step_captcha,
            }
        });

        window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
                // size: "invisible",
                size: "normal",
                callback: function (response:any) {
                    console.log("Captcha Resolved");
                    // onSignInSubmit();
                    setState({
                        ...state,
                        ...{
                            ['hide_captcha'] :true,
                            ['here_step'] :here_steps.step_input_code,
                        }
                    });
                },
                defaultCountry: "US",
            }
            ,autentication);


    };


    const on_click_registration = (e:any) => {
        e.preventDefault();

        setUpRecaptcha();
        let phoneNumber = state.mobile;
        // let phoneNumber = "+91" + this.state.mobile;
        console.log(phoneNumber);
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(autentication, phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // console.log(confirmationResult);
                console.log("=== OTP is sent");
                console.log("=== window.confirmationResult ",window.confirmationResult);
                // setState({
                //     ...state,
                //     ...{
                //         ['here_step'] :here_steps.step_input_code,
                //     }
                // });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const onSubmitOtp = (e:any) => {
        e.preventDefault();
        let otpInput = state.otp;
        console.log("=== otpInput ",otpInput)
        let optConfirm = window.confirmationResult;

        optConfirm
            .confirm(otpInput)
            .then(function (result:any) {
                // User signed in successfully.
                console.log("Result" + (JSON.stringify(result)));
                Object.entries(result).map((p)=>{
                    console.log(p)
                })
                console.log("=== result.user.uid " + result.user.uid);
                console.log("=== result.user.phoneNumber " + result.user.phoneNumber)
                //uid": vwTX2RV8ttVZcuTWISxHcocSVZP2

                let user = result.user;

                setState({
                    ...state,
                ...{
                    ['user_guid'] :result.user.uid,
                    ['user_phone'] :result.user.phoneNumber,
                    ['here_step'] :here_steps.step_contunue,
                    }
                });



            })
            .catch(function (error:any) {
                console.log(error);
                alert("Incorrect OTP");
            });

    }

        const [input1_focused,set_input1_focused]=useState(false)

        return(
        // <div style={{ width:'300px', flex:1}}>
        <div className={props.style_name_main_container}>
            <div className={'all_h'}>


                {state.here_step==here_steps.step_phone?
                    <div id={'step_phone'}>

                        <div className={'phone_input'}>
                          <input
                                type="text"
                                value={state.mobile}
                                name="mobile"
                                className={props.style_name_input_phone}
                                // placeholder="Mobile Number"
                                onChange={(e)=>onChangeHandler(e)}
                                required

                                placeholder={input1_focused?'':
                                    (props.input_phone_placeholder)?props.input_phone_placeholder:'phone numger'
                                }
                                onFocus={()=>{
                                    set_input1_focused(true)
                                }}
                                onBlur={()=>{
                                    set_input1_focused(false)
                                }}


                          />
                        </div>
                        <div>
                        <button
                            className={props.style_name_button_register}
                            onClick={(e)=>{
                                on_click_registration(e)
                            }
                            }
                        >
                            {(props.button_text_registration)?props.button_text_registration:'Registration'}
                        </button>
                        </div>

                    </div>

                    :''
                } {/*id={'step_phone'}*/}

                {/*{state.here_step == here_steps.step_captcha ?*/}
                {(state.hide_captcha)?'':
                <div style={{width: '320px'}} id={'step_captcha'}>
                    {(state.here_step!=here_steps.step_captcha)?'':
                        <div>
                            <a className={'input1'}>{(props.text_over_captcha_message)?props.text_over_captcha_message:'check - you are not robot'}</a>
                        <br/>
                        <br/>
                        </div>
                    }
                    <Div_captcha id="recaptcha-container"></Div_captcha>
                </div>
                }
                    {/*:''*/}
                {/*}*/}

                    {state.here_step==here_steps.step_input_code?
                    <div id={'step_code'}>
                    <div>
                        <input
                            id="otp"
                            type="number"
                            name="otp"
                            className={props.style_name_input_code}
                            placeholder={(props.input_code_placeholder)?props.input_code_placeholder:"OTP"}
                            onChange={onChangeHandler}
                        />
                    </div>
                        <div>
                            <input
                                id="user_password_id"
                                type="text"
                                name="user_password"
                                className={props.style_name_input_code}
                                placeholder={(props.input_password_placeholder)?props.input_password_placeholder:"create password"}
                                onChange={onChangeHandler}
                            />
                        </div>
                    <div>
                        <button disabled={( state.otp.length!=0 && state.user_password.length!=0 )?false:true}
                                style={{opacity:( state.otp.length!=0 && state.user_password.length!=0 )?1:'0.5'}}
                            className={props.style_name_button_register}
                            onClick={(e)=>{
                                onSubmitOtp(e)
                                // set_here_step(here_steps.step_contunue)
                            }
                            }
                        >
                            {(props.button_text_code)?props.button_text_code:'Code from SMS'}
                        </button>
                    </div>
                    </div>
                    :''
                }

                {state.here_step==here_steps.step_contunue?
                    <div>

                        <a className={'input1'}>{(props.text_success_message)?props.text_success_message:'Success!'}</a>
                        <br/>
                        <br/>
                        <button
                            className={props.style_name_input_contunue}
                            onClick={()=>{
                                setState({
                                    ...state,
                                    ...{
                                        ['here_step'] :here_steps.step_end,
                                    }
                                });


                                if (props.exec_on_contunue){
                                    props.exec_on_contunue({user_guid: state.user_guid})
                                }

                            }
                            }
                        >
                            {(props.button_text_contunue)?props.button_text_contunue:'Finish -`&gt;` go to Dashboard '}

                        </button>
                    </div>
                    :''
                }

                {state.here_step==here_steps.step_end?
                    <div className={'flex_col'}>

                        <div style={{color:'red'}}>You are in Dashboard !!!</div>
                        <textarea style={{height:'100px'}} defaultValue={JSON.stringify(state)}></textarea>
                        <textarea style={{height:'50px'}} defaultValue={'user_guid = ' + JSON.stringify(window.btoa(state.user_guid))}></textarea>
                        <textarea style={{height:'50px'}} defaultValue={'user_guid = ' + JSON.stringify(window.btoa(state.user_password))}></textarea>

                    </div>

                    :''
                }

            </div>

        </div>
        // {/*</div>*/}
    )

}

export default LoginByPhoneSms;


