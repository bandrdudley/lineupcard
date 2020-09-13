import * as React from "react";
import {PlayerHeaderComponent} from "./playerHeader";
import {PlayerRowComponent} from "./playerRow";
import {PlayerEntity} from "../model/player";
import {playersMockData} from "../rest-api/mock-data";

interface Props {
    players: PlayerEntity[];
}

export const PlayerTableComponent = (props: Props) => {
    let returnedArray: PlayerEntity[];
    returnedArray = props.players
    return (
        <table className="table">
            <PlayerHeaderComponent/>
            <tbody>
            {
                returnedArray.map((player: PlayerEntity) =>
                    <PlayerRowComponent key={player.id} player={player}/>
                )
            }
            </tbody>
        </table>
    );
};