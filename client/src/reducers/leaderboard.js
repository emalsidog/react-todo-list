// Constants
import * as types from "../constants/leaderboardActionsTypes";

const initialState = {
    accounts: [],
    currentUserPosition: null,
    isLoading: false,
    error: {
        isError: false,
        message: ""
    }
}

const leaderboard = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_LEADERBOARD_REQUEST: {
            return {
                ...state,
                isLoading: true
            }
        }
        case types.GET_LEADERBOARD_SUCCESS: {
            const { accounts, currentUserPosition } = action.payload;
            return {
                ...state,
                isLoading: false,
                accounts,
                currentUserPosition
            }
        }
        case types.GET_LEADERBOARD_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: {
                    isError: true,
                    message: action.payload
                }
            }
        }
        default: {
            return state;
        }
    }
}

export default leaderboard;