import {PlayerListComponent} from "../components/playerList";
import { connect } from "react-redux";
import {playerListRequestStartedAction} from "../actions/playerListRequestStarted";


const mapStateToProps = (state) => {
    return {
        players: state.playerReducer.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPlayers: () => dispatch(playerListRequestStartedAction())
    }
}

export const PlayerListContainer = connect(
                                mapStateToProps,
                                mapDispatchToProps
                                )(PlayerListComponent);