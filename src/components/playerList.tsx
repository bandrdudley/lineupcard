import * as React from "react";
import {PlayerTableComponent} from "./playerTable";
import {PlayerEntity} from "../model/player";
//import {playersMockData} from "../rest-api/mock-data";


interface Props {
    players:  PlayerEntity[];
    loadPlayers: () => void;
    movePlayerUp: (player: PlayerEntity) => void;
}

export class PlayerListComponent extends React.Component<Props, {}> {

    componentDidMount() {
        console.log("PlayerListComponent.componentDidMount")
        this.props.loadPlayers();
        console.log(this.props.loadPlayers());
    }

    render() {
        return (
            <div>
                <button onClick={(e: any) =>
                    this.props.movePlayerUp(this.props.players[0])}>
                    Move Up
                </button>
                <h3>Available Players</h3>
                <PlayerTableComponent players={this.props.players}/>
            </div>
        );
    }
}