import {PlayerEntity} from "../model/player";
import {actionEnums} from "../common/actionEnums";

class StarterState {
    starters: PlayerEntity[];

    public constructor() {
        this.starters = [];
    }
}

export const starterReducer = (state: StarterState = new StarterState(), action) => {
    console.log(action.type)
    console.log(action)
    switch (action.type) {
        case actionEnums.STARTERS_LOAD_PLAYERS:
            return handleStartersLoadPlayers(state)
        case actionEnums.PLAYERS_REMOVE_FROM_BENCH:
            return handleAddPlayerToLineup(state, action.payload)
        case actionEnums.STARTERS_REMOVE_PLAYER_FROM_LINEUP:
            return handleRemovePlayerFromLineup(state, action.payload)
    }

    return state;
}

const handleStartersLoadPlayers = (state: StarterState) => {

    return {
        ...state,
        starters: [{id: 44, name: "Raven", position: "MVP", average: 1}]
    }
}

const handleAddPlayerToLineup = (state: StarterState, payload: PlayerEntity) => {
    console.log("handleAddPlayerToLineup")
    console.log(payload)
    /*
    const newPlayer:PlayerEntity = {
        id: Math.random(), // not really unique but good enough here!
        name: "Ruthie",
        position: "DH",
        average: 300
    };
    function insertItem(array, action) {
        let newArray = array.slice()
        newArray.splice(action.index, 0, action.item)
        return newArray
    }*/
    return {
        ...state,
        starters: state.starters.concat(payload)
    }
}

const handleRemovePlayerFromLineup = (state: StarterState, payload: PlayerEntity[]) => {

    return {
        ...state,
        starters: state.starters.filter((item, index) => index !== 0)
    }
}