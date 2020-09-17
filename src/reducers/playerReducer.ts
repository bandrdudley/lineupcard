import {PlayerEntity} from "../model/player";
import {actionEnums} from "../common/actionEnums";

class PlayerState {
    players: PlayerEntity[];

    public constructor() {
        this.players = [];
    }
}


export const playerReducer = (state: PlayerState = new PlayerState(), action) => {
    console.log(action.type)
    switch (action.type) {
        case actionEnums.PLAYERS_REQUEST_COMPLETED:
            return handleGetPlayerList(state, action.payload);
        case actionEnums.PLAYERS_REMOVE_FROM_BENCH:
            return handleRemovePlayerFromBench(state, action.payload);
        case actionEnums.STARTERS_REMOVE_PLAYER_FROM_LINEUP:
            return handleAddPlayerToBench(state, action.payload);
    }

    return state;
};

const handleGetPlayerList = (state: PlayerState, payload: PlayerEntity[]) => {
    console.log(payload)
    return {
        ...state,
        players: payload
    }
};

const handleAddPlayerToBench = (state: PlayerState, payload: PlayerEntity) => {
    console.log(payload)
    return {
        ...state,
        players: state.players.concat(payload)
    }
};

const handleRemovePlayerFromBench = (state: PlayerState, payload: PlayerEntity) => {

    // we don't want to mutate state directly in reducers
    // state.players.shift()
    console.log("handleRemovePlayerFromBench"+state.players.length)

    return {
        ...state,
        players: state.players.filter((item, index) => index !== 0)
    }
};