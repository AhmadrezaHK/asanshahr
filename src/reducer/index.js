const reducer = (state={ads:[], loading:false, error:''}, action)=>{
    switch(action.type){
        case 'SUCCESS': 
            return {...state, ads:action.payload, loading:false}
        case 'LOADING':    
            return {...state, loading:true, error:''}
        case 'ERROR':
            return {...state, loading:false, error:action.error}     
        default:
            return state            
    }       
}
export default reducer