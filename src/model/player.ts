export class PlayerEntity {
    id: number;
    name: string;
    position: string;
    average: number;

    public constructor() {
        this.id = -1;
        this.name = "";
        this.position = "";
        this.average = 0;
    }
}