import {playerApi} from "../rest-api/player-api";
import {actionEnums} from "../common/actionEnums";
import {PlayerEntity} from "../model/player";
import {playerListRequestCompletedAction} from "./playerListRequestCompleted";

export const playerListRequestStartedAction = () => {
    return function (dispatcher: (arg0: any) => void) {
        const promise = playerApi.loadPlayerList();

        promise.then(
            data => {
                dispatcher(playerListRequestCompletedAction(data));
            }
        );

        return promise;
    };
};