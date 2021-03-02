import {
    GET_LEADERBOARD,
    IS_LOADING
} from "../constants/leaderboardActionsTypes";

export const getLeaderboard = () => {
    return async dispatch => {
        const response = await fetch("/leaderboard", {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem("token")
            }
        });
        const json = await response.json();
        dispatch({
            type: GET_LEADERBOARD,
            payload: json.body
        });
    }
}

export const isLoading = () => ({ type: IS_LOADING });