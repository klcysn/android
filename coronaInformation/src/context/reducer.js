export const reducer=(state, action)=>{
    switch(action.type){
        case  "SETCOUNTRY" : 
            state.country = action.payload.country
            return {...state}
        case "SETDATE" :
            state.date = action.payload.date
            return {...state}
        case "CHANGEMODAL":
            state.show = action.payload.show
            return {...state}
        default:
            return state
    }
}