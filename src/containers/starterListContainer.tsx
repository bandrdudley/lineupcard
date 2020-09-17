import {connect} from "react-redux";
import {actionEnums} from "../common/actionEnums";
import {StarterListComponent} from "../components/starterList";

const mapStateToProps = (state) => {
    return {
        starters: state.starterReducer.starters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadStarters: () =>
            dispatch({type:actionEnums.STARTERS_LOAD_PLAYERS}),
        movePlayerDown: (player) =>
            dispatch({type:actionEnums.STARTERS_REMOVE_PLAYER_FROM_LINEUP, payload: player}),
    }
}

export const StarterListContainer = connect(mapStateToProps, mapDispatchToProps)(StarterListComponent);