import {playerApi} from "../rest-api/player-api";
import {playerRequestCompleted} from "./playerRequestCompleted";

export const playerListRequestStartedAction = () => {
    console.log("playerListRequestStartedAction")
    return function (dispatcher) {
        const promise = playerApi.loadPlayerList();

        promise.then(
            data => {
                console.log("playerListRequestStartedAction.data")
                dispatcher(playerRequestCompleted(data));
            }
        );

        return promise;
    };
};