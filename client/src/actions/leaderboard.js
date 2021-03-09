// Constants
import * as types from "../constants/leaderboardActionsTypes";

// Leaderboard service
import LeaderboardService from "../services/leaderboard";
const leaderboardService = new LeaderboardService();

export const getLeaderboard = () => {
    return async dispatch => {
        dispatch({ type: types.GET_LEADERBOARD_REQUEST });
        const response = await leaderboardService.getLeaderboard();
        if(!response.isError) {
            dispatch({ 
                type: types.GET_LEADERBOARD_SUCCESS,
                payload: {
                    accounts: response.body.accounts,
                    currentUserPosition: response.body.currentUserPosition
                }
            })
        } else {
            dispatch({
                type: types.GET_LEADERBOARD_FAILURE,
                payload: {
                    message: response.message
                }
            })
        }
    }
}