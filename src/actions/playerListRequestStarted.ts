import {playerApi} from "../rest-api/player-api";
import {playerRequestCompleted} from "./playerRequestCompleted";

export const playerListRequestStartedAction = () => {
    return function (dispatcher) {
        const promise = playerApi.loadPlayerList();

        promise.then(
            data => {
                dispatcher(playerRequestCompleted(data));
            }
        );

        return promise;
    };
};