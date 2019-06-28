import axios from 'axios'
export const dataIndex=(url)=>{
    return dispatch=>{
        axios.get(url).then(res =>{
            dispatch({
                type:"GETDATA_INDEX",
                data:res.data.data
            })
        })
    }
}

export const dataLook=(url)=>{
    return dispatch=>{
        axios.get(url).then(res =>{
            dispatch({
                type:"GETDATA_LOOK",
                data:res.data.data
            })
        })
    }
}

export const getSoleData=(id)=>{
    return{
        type:'GETSOLE_DATA',
        id
    }
}

export const pushSearch=(text)=>{
    return{
        type:'PUSHSEARCH_DATA',
        text
    }
}