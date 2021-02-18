// Dependencies
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

// Actions
import { getLeaderboard } from "../../actions/leaderboard";

// Styles
import "./leaderboard.scss";

// Components
import LeaderboardItem from "../leaderboard-item";

const Leaderboard = ({ accounts, getLeaderboard, currentUserPosition }) => {

    useEffect(() => {
        getLeaderboard()
    }, [getLeaderboard])
    
    return (
        <>
            <Helmet>
                <title>Todoist | Leaderboard</title>
            </Helmet>
            
            <div className="container">
                <div className="row top-panel">
                    <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg">
                        <h4>Leaderboard</h4>
                    </div>
                    <div className="col-auto me-auto buttons-container"> 
                        <div className="info-text">Your position is: {currentUserPosition}</div>
                    </div>
                </div>
                <div>
                    <table className="table-container">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Points</th>
                                <th scope="col">Todos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                accounts.map((account, idx) => {
                                    const { givenName, familyName, points, totalCompletedTodos, _id } = account;
                                    return <LeaderboardItem 
                                                key={_id}
                                                position={idx + 1}
                                                givenName={givenName}
                                                familyName={familyName}
                                                points={points}
                                                totalCompletedTodos={totalCompletedTodos} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    const { accounts, currentUserPosition } = state.leaderboard;
    return { accounts, currentUserPosition }
}

const mapDispatchToProps = dispatch => {
    return {
        getLeaderboard: () => dispatch(getLeaderboard())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);