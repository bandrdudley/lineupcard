import * as React from "react";
import {PlayerTableComponent} from "./playerTable";
import {PlayerEntity} from "../model/player";

interface Props {
    players:  PlayerEntity[];
    loadPlayers: () => void;
}

export class PlayerListComponent extends React.Component<Props, {}> {

    componentDidMount() {
        console.log("componentDidMount")
        this.props.loadPlayers();
        console.log(this.props.loadPlayers);
    }

    render() {
        return (
            <div>
                <h2>I'm the Player page</h2>
                <br/>
                <PlayerTableComponent players={this.props.players}/>
            </div>
        );
    }
}