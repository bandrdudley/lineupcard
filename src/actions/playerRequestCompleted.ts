import {PlayerEntity} from "../model/player";
import {actionEnums} from "../common/actionEnums";
import {playerApi} from "../rest-api/player-api";

export const playerRequestCompleted = (players: PlayerEntity[]) => {
    console.log(players);
    return {
        type: actionEnums.PLAYERS_REQUEST_COMPLETED,
        payload: players
    }
}

export const playerRequest = () => (dispatcher) => {
    const promise = playerApi.loadPlayerList();

    promise.then(
        (data) => dispatcher(playerRequestCompleted(data))
    );

    return promise;
}
