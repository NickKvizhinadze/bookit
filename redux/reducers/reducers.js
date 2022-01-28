import { combineReducers } from "redux";
import { allRoomsReducer, roomDetailsReducer } from './roomReducers';
import { authReducer, forgoPasswordReducer, userReducer } from "./userReducer";

const reducers = combineReducers({
    allRooms: allRoomsReducer,
    roomDetails: roomDetailsReducer,
    auth: authReducer,
    user: userReducer,
    forgotPassword: forgoPasswordReducer,
});

export default reducers;
