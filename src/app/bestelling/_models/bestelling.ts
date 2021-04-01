export class Bestelling {
    public bestellingId: number;
    public artikel: string;
    public prijs: number;

    constructor( bestellingId: number, artikel: string, prijs: number ) {
        this.bestellingId = bestellingId;
        this.artikel = artikel;
        this.prijs = prijs;
    }
}
