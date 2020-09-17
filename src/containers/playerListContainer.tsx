import {PlayerListComponent} from "../components/playerList";
import { connect } from "react-redux";
import {playerListRequestStartedAction} from "../actions/playerListRequestStarted";
import {actionEnums} from "../common/actionEnums";


const mapStateToProps = (state) => {
    console.log("mapStateToProps:"+state.playerReducer.players.length)
    return {
        players: state.playerReducer.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPlayers: () =>
            dispatch(playerListRequestStartedAction()),
        movePlayerUp: (player) =>
            dispatch({type:actionEnums.PLAYERS_REMOVE_FROM_BENCH, payload: player})
    }
}

export const PlayerListContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerListComponent);