export default class LeaderboardService {
  getLeaderboard = async () => {
    const response = await fetch("http://localhost:3001/leaderboard", {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      }
    });
    const json = await response.json();
    return json;
  }
}