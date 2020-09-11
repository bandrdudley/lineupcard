import {PlayerListComponent} from "../components/playerList";
import { connect } from "react-redux";
import {playerListRequestStartedAction} from "../actions/playerListRequestStarted";

const mapStateToProps = (state: any) => {
    return {
        playerList: state.playerReducer.playersList
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getPlayerList: () => dispatch(playerListRequestStartedAction())
    }
}

export const PlayerListContainer = connect(
                                mapStateToProps,
                                mapDispatchToProps
                                )(PlayerListComponent);