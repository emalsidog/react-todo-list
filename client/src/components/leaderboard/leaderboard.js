// Dependencies
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next"; 

// Actions
import { getLeaderboard, isLoading } from "../../actions/leaderboard";

// Styles
import "./leaderboard.scss";

// Components
import LeaderboardItem from "../leaderboard-item";
import Spinner from "../spinner";

const Leaderboard = ({ accounts, getLeaderboard, currentUserPosition, isLoading, isLoadingAC }) => {

    const { t } = useTranslation();

    useEffect(() => {
        isLoadingAC()
        getLeaderboard()
    }, [getLeaderboard, isLoadingAC])
    
    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <Helmet>
                <title>Todoist | {t("Leaderboard")}</title>
            </Helmet>
            
            <div className="container">
                <div className="row top-panel">
                    <div className="col-12 col-md-12 col-sm-12 col-xs-12 col-lg">
                        <h4>{t("Leaderboard")}</h4>
                    </div>
                    <div className="col-auto me-auto buttons-container"> 
                        <div className="info-text">{t("Your position is") + ": " + currentUserPosition}</div>
                    </div>
                </div>
                <div>
                    <table className="table-container">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{t("Name")}</th>
                                <th scope="col">{t("Points")}</th>
                                <th scope="col">{t("Todos")}</th>
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
    const { accounts, currentUserPosition, isLoading } = state.leaderboard;
    return { accounts, currentUserPosition, isLoading }
}

const mapDispatchToProps = dispatch => {
    return {
        getLeaderboard: () => dispatch(getLeaderboard()),
        isLoadingAC: () => dispatch(isLoading())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);