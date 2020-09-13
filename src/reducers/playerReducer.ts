import {PlayerEntity} from "../model/player";
import {actionEnums} from "../common/actionEnums";

class PlayerState {
    players: PlayerEntity[];

    public constructor() {
        this.players = [];
    }
}


export const playerReducer = (state: PlayerState = new PlayerState(), action) => {
    switch (action.type) {
        case actionEnums.PLAYERS_REQUEST_COMPLETED:
            return handleGetPlayerList(state, action.payload);
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