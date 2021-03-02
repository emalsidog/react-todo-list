import {
    GET_LEADERBOARD,
    IS_LOADING
} from "../constants/leaderboardActionsTypes";

const initialState = {
    accounts: [],
    currentUserPosition: null,
    isLoading: false
}

const leaderboard = (state = initialState, action) => {
    switch(action.type) {
        case GET_LEADERBOARD: {
            const { accounts, currentUserPosition } = action.payload;
            return {
                isLoading: false,
                accounts,
                currentUserPosition
            }
        }
        case IS_LOADING: {
            return { ...state, isLoading: true }
        }
        default: {
            return state;
        }
    }
}

export default leaderboard;