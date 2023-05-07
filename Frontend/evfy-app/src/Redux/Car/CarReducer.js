import { FAILURE_CARS_BIKES, GET_SUCCESS_CARS_BIKES, REQUEST_CARS_BIKES, STORE_SEARCH_VALUE } from "./CarActionTypes";


const initState = {
    isLoading:false,
    isError:false,
    cars : [],
    pageCount:"",
    searchText:""
}

export const CarReducer = (state=initState,action) =>{
  switch(action.type){
    case REQUEST_CARS_BIKES:{
        return {
            ...state,
            isLoading:true,
            isError:false,
        } 
    }
    case GET_SUCCESS_CARS_BIKES: {
		return {
			...state,
            isLoading : false,
            isError : false,
            cars : action.payload.result,
            pageCount : action.payload.pageCount
		};
	}
    case STORE_SEARCH_VALUE: {
		return {
			...state,
            isLoading : false,
            isError : false,
            searchText:action.payload
		};
	}

    case FAILURE_CARS_BIKES:{
        return {
            ...state,
            isLoading:false,
            isError:true,
        } 
    }
    default: {
        return state;
    }
  }
}