import {
    GET_LEADERBOARD
} from "../constants/leaderboardActionsTypes";

const initialState = {
    accounts: [],
    currentUserPosition: null
}

const leaderboard = (state = initialState, action) => {
    switch(action.type) {
        case GET_LEADERBOARD: {
            const { accounts, currentUserPosition } = action.payload;
            return {
                accounts,
                currentUserPosition
            }
        }
        default: {
            return state;
        }
    }
}

export default leaderboard;