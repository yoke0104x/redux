const defaultState = {
    dataIndex:[],
    dataLook:[],
    soleData:{},
    search:[]
}
const data=(state=defaultState,action)=>{
    let newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'GETDATA_INDEX':
        newState.dataIndex=action.data
        return newState

        case 'GETDATA_LOOK':
        newState.dataLook=action.data
        return newState

        case 'GETSOLE_DATA':
        let ind = newState.dataLook.find(item =>item.id===action.id*1)
        newState.soleData = ind
        return newState

        case 'PUSHSEARCH_DATA':
        newState.search.push(action.text)
        return newState

        default :
            return state
    }
}
export default data