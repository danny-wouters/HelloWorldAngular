export class Bestelling {
    public bestellingId: number;
    public artikel: string;
    public prijs: number;
    public klantId: number;

    constructor( bestellingId?: number, artikel?: string, prijs?: number, klantId?: number ) {
        this.bestellingId = bestellingId;
        this.artikel = artikel;
        this.prijs = prijs;
        this.klantId = klantId;
    }
}
