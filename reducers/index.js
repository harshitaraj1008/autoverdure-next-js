import { combineReducers } from "redux";
import productsReducer from "@/features/productsSlice/productSlice";
import userReducer from "@/features/userSlice/userSlice";

const rootReducer = combineReducers({
    products: productsReducer,
    user: userReducer,
});
  
export default rootReducer;