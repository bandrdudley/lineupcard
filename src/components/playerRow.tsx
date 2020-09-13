import * as React from "react";
import {PlayerEntity} from "../model/player";

interface Props {
    player: PlayerEntity;
}
export const PlayerRowComponent = (props: Props) => {
    return (
        <tr>
            <td>
                {props.player.name}
            </td>
            <td>
                {props.player.position}
            </td>
            <td>
                {props.player.average}
            </td>
        </tr>
    );
};