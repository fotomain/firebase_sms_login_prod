
// ======= del node
// npm i

// npm start
// npm i -D @craco/craco
// craco.config
// package.json


// npm install -g firebase-tools
// npm install --save-dev @types/react@latest @types/react-dom@latest
// npm i i18n-iso-countries; npm i -D @craco/craco; npm install firebase@9.17.1 --save;  npm i react-firebase-hooks
// npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
// npm install @mui/icons-material --legacy-peer-deps
// npm install react-phone-number-input --save

import React, {useState} from 'react';
import './App.css';
// import {TextField} from "@mui/material";
// import { ThemeProvider , createTheme , styled } from '@mui/material/styles';
import countries from "i18n-iso-countries";
import LoginByPhoneSms from "./comp_login_by_phone_sms/LoginByPhoneSms";
import EntranceWithGoogle from "./with_google/EntranceWithGoogle";


const App=()=>

const build_version = '123'

{

    const [input1_focused,set_input1_focused]=useState(false)
    const [phone_number,set_phone_number]=useState('')
    const [numberCountry, setNumberCountry] = useState("LV");

    var is_prod = -1==window.location.href.indexOf('localhost')
    is_prod = is_prod

    return (
    <div className="App" style={{backgroundColor:(is_prod)?'transparent':'darkslategray'}}>

        <div>{build_version}</div>
        <EntranceWithGoogle />

        <LoginByPhoneSms

            start_phone_number  ={(is_prod) ? '' : '+37128815587'}
            style_name_main_container   = 'container'
            style_name_button_register  = 'but but_filled el_hw'
            style_name_input_phone      = 'input1'


            input_phone_placeholder  = {'номер телефона'}
            button_text_registration = {'РЕГИСТРАЦИЯ'}

            text_over_captcha_message  = {'отметьте что вы не робот'}

            input_code_placeholder  = {'введите код из SMS'}
            input_password_placeholder  = {'создайте пароль'}

            button_text_code = {'ПОДТВЕРДИТЬ'}
            style_name_input_code      = 'input1'


            text_success_message = {'Регистрация прошла успешно!'}
            button_text_contunue = {'ПРОДОЛЖИТЬ'}
            style_name_input_contunue      = 'but but_filled el_hw'

            exec_on_contunue = {(params)=> {
                setTimeout(() => {
                    window.open('https://www.1188.lv/?user_guid=' + params.user_guid, "_blank",)
                }, 3000)
            }
            }

        />


        <div className="container">

                 {/*<div className={'all_h'}>*/}

                 {/*    <div className={'phone_input'}>*/}

                 {/*       /!* <div>*!/*/}
                 {/*       /!*     <select*!/*/}
                 {/*       /!*         // style={{flex:1}}*!/*/}
                 {/*       /!*         className="select"*!/*/}
                 {/*       /!*         value = {numberCountry}*!/*/}
                 {/*       /!*         onChange={(e) => setNumberCountry(e.target.value)}*!/*/}
                 {/*       /!*     >*!/*/}
                 {/*       /!*         {Object.keys(countries.getAlpha2Codes()).map((c) => {*!/*/}
                 {/*       /!*             return <option key={c}>{c}</option>;*!/*/}
                 {/*       /!*         })}*!/*/}
                 {/*       /!*     </select>*!/*/}
                 {/*       /!*</div>*!/*/}


                 {/*              <input*/}
                 {/*                  pattern="[0-9]*"*/}
                 {/*                  value={phone_number}*/}
                 {/*                  onChange={(e)=> {*/}
                 {/*                      set_phone_number(e.target.value)*/}
                 {/*                  }}*/}
                 {/*                  type={'tel'}*/}
                 {/*                  className={'input1'}*/}
                 {/*                  // style={{flex:3}}*/}
                 {/*                  // style={{flex:3}}*/}
                 {/*                  placeholder={input1_focused?'':'номер телефона'}*/}
                 {/*                       onFocus={()=>{*/}
                 {/*                           set_input1_focused(true)*/}
                 {/*                       }}*/}
                 {/*                       onBlur={()=>{*/}
                 {/*                           set_input1_focused(false)*/}
                 {/*                       }}*/}
                 {/*              />*/}
                 {/*       </div>*/}

                 {/*   /!*<TextField id="standard-basic" label="введите номер телефона" variant="standard" />*!/*/}


                 {/*</div>*/}



                 {/* <div className={'all_h'}>*/}
                 {/*     <button className={'but but_filled el_hw'}>РЕГИСТРАЦИЯ</button>*/}
                 {/* </div>*/}

                 {/* <div className={'all_h'}>*/}
                 {/*     <button className={'but but_outlined el_hw'}>АВТОРИЗАЦИЯ</button>*/}
                 {/* </div>*/}

            </div>

                {/*<FireApp/>*/}
                {/*<FireAppPhone/>*/}

    </div>
  );
}

export default App;

