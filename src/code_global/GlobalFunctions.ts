

export function _key(){
    return '_'+(Math.round(Math.random()*1000000)).toString()
}

export function _px2int(param:string){
    console.log('=== param1  ',param)
    if(!param) return parseInt(param)
    const ret = param.toString()
    return parseInt(ret.replace('px',''))
}

const gl_duplicate_quotes = (p_str:string) => {

    var tArr:string[] = p_str.split('')
    tArr = tArr.map((el:any)=>{
        if(el!=="'") { return el }
        else        { return  "''" }
    })
    return tArr.join('')

}


const asyncLocal_Storage = {
    setItem: function (key:string, value:string) {
        return Promise.resolve().then(function () {
            localStorage.setItem(key, value);
        });
    },
    getItem: function (key:string) {
        return Promise.resolve().then(function () {
            return localStorage.getItem(key);
        });
    }
};


export const is_empty = (p:any) => {
    return (p)?true:false
}


