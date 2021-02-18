// Dependencies
import React from "react";

// Styles
import "./leaderboard-item.scss";

const LeaderboardItem = (props) => {
    const { position, givenName, familyName, points, totalCompletedTodos } = props;
    let th;

    switch(position) {
        case 1: 
            th = <th scope="row" style={{ color: "#ffd700" }}><i className="fas fa-trophy"></i></th>
            break;
        case 2:
            th = <th scope="row" style={{ color: "#c5c9c7" }}><i className="fas fa-trophy"></i></th>
            break;
        case 3:
            th = <th scope="row" style={{ color: "#cd7f32" }}><i className="fas fa-trophy"></i></th>
            break;
        default:
            th = <th scope="row">{ position }</th>
            break;
    }

    return (
        <tr>
            { th }
            <td>{`${givenName} ${familyName}`}</td>
            <td>{ points }</td>
            <td>{ totalCompletedTodos }</td>
        </tr>
    )
}

export default LeaderboardItem;