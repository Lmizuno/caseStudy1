
const userIOyReducer = (state, action) =>{
    switch(action.type){
        case "HANDLE_INPUT_CHANGE":
            return{
                ...state,
                [action.field]: action.payload,
            };
            case "HANDLE_TOGGLE":
            return{
                ...state,
                [action.field]: !action.field,
            };
            default:
                return state;
    }
  };

export default userIOyReducer;