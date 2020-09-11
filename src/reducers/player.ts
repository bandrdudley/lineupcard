import {PlayerEntity} from "../model/player";
import {actionEnums} from "../common/actionEnums";


class PlayerState {
    playersList: PlayerEntity[];

    public constructor() {
        this.playersList = [];
    }
}

export const playerReducer = (state: PlayerState = new PlayerState(), action: any) => {
    switch (action.type) {
        case actionEnums.PLAYERS_GET_LIST_REQUEST_COMPLETED:
            return handleGetPlayerList(state, action.payload);
    }

    return state;
};

const handleGetPlayerList = (state: PlayerState, payload: PlayerEntity[]) => {
    return {
        ...state,
        playerList: payload
    }
};