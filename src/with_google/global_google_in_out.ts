
import {GoogleAuthProvider, signInWithRedirect, signInWithPopup, signOut} from "firebase/auth";
import {auth} from "./firebase-config";

export const sign_in_with_google = async () => {
    const googleProvider = new GoogleAuthProvider();
    try {
        //=== new key const newPostKey = push(child(ref(db), 'posts')).key;

        //=== DOC WEB
        const result = await signInWithPopup(auth, googleProvider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            // The signed-in user info.
            var user = result.user;

            if (window.confirm('=== user confirm '+JSON.stringify(user)))
            {
                console.log('=== window.close')

                window.open('https://www.1188.lv/?user_guid=' + 'params.user_guid', "_self",)
                // window.close()
            }
            else
            {
                // They clicked no do something else.
            }

        }).catch(function(error) {
            // Handle Errors here.
            alert('=== error '+JSON.stringify(error))
            alert('=== error.code '+JSON.stringify(error.code))

            // var errorCode = error.code;
            // var errorMessage = error.message;
            // // The email of the user's account used.
            // var email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
        });

        //=== DOC MOBILE
        // const result = await signInWithRedirect(auth, googleProvider);

        // cool help code
        // https://forum.ionicframework.com/t/firebase-firebase-auth-signinwithpopup/91476/16

            // const result = await signInWithRedirect(auth, googleProvider);
        // firebase.auth().signInWithPopup(provider).then(function(result) {
        //     // This gives you a Google Access Token. You can use it to access the Google API.
        //     var token = result.credential.accessToken;
        //     // The signed-in user info.
        //     var user = result.user;
        //     // ...
        // }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // The email of the user's account used.
        //     var email = error.email;
        //     // The firebase.auth.AuthCredential type that was used.
        //     var credential = error.credential;
        //     // ...
        // });

        //=== NOT NEED BECAUSE see console.log("=== tu.step_l auth ",auth)
        // const user_result = global_props.current_user
        // const tu = global_props.current_user
        // //CHANGE STEPS 1 signIn sign_in_with_google
        // tu.logged_in_auth_info = result
        // tu.step_logged_in = false
        // console.log("=== tu.step_ logged_in_auth_info = result",Date.now())
        //
        // global_dispatch({type: "SETTER_USER", global_new_data: {user: tu}})

        // const user_result = result.user;
        // logged_in_auth_info
        // tu.logged_in_auth_info=user_result

        // console.log("=== sign_in_with_google user_result "+Date.now(), user_result)
        // console.log("=== sign_in_with_google metadata.createdAt "+Date.now(), user_result.metadata)
        // console.log("=== sign_in_with_google metadata.lastLoginAt "+Date.now(), user_result.metadata)

        // console.log("=== sign_in_with_google user_result.uid "+Date.now(), user_result.uid)


    } catch (err:any) {
        console.error(err);
        alert(err?.message);
    }
};



export const sign_out_with_google = async () => {
    await signOut(auth).then(res=>{
        console.log("=== onAuthStateChanged user_result 111 ")
    })
};
