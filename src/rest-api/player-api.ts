import {PlayerEntity} from "../model/player";
import {playersMockData} from "./mock-data";

class PlayerApi {
    playersData: PlayerEntity[];

    constructor() {
        // Let's the mockdata whenever the singleton is instantiated
        // and the play with the inmemory array
        this.playersData = playersMockData;
    }

    loadPlayerList(): Promise<PlayerEntity[]> {
        return Promise.resolve(this.playersData);
    }
}

export const playerApi = new PlayerApi();