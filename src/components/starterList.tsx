import * as React from "react";
import {PlayerEntity} from "../model/player";
import {PlayerTableComponent} from "./playerTable";


interface Props {
    starters: PlayerEntity[];
    loadStarters: () => void;
    movePlayerDown: (player: PlayerEntity) => void;
}

export class StarterListComponent extends React.Component<Props, {}> {

    componentDidMount() {
        console.log("StarterListComponent.componentDidMount")
        this.props.loadStarters()
        console.log(this.props.loadStarters())
    }

    render() {
        return (
            <div>
                <h3>Starters</h3>
                <PlayerTableComponent players={this.props.starters}/>
                <button onClick={(e: any) =>
                    this.props.movePlayerDown(this.props.starters[0])}>
                    Move Down
                 </button>
            </div>
        );
    }
}