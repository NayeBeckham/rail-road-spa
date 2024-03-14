export interface Car {
    id?: number;
    name: string;
    destination: string;
    receiver: string;
    destinationPriority: number;
    receiverPriority?: number;
}