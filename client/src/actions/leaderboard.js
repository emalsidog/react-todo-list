import {
    GET_LEADERBOARD
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