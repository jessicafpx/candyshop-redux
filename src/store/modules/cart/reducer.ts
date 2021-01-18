import { Reducer } from 'redux';
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
    items: []
};

const cart: Reducer<ICartState> = (state, action) => {
    return INITIAL_STATE;
}

export default cart;