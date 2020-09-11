import {PlayerEntity} from "../model/player";
import {actionEnums} from "../common/actionEnums";


export const playerListRequestCompletedAction = (playerList: PlayerEntity[]) => {
    return {
        type: actionEnums.PLAYERS_GET_LIST_REQUEST_COMPLETED,
        payload: playerList
    };
};