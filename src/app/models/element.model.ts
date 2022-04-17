import { Shell } from "./shell.model";

export class Element {

    public Name: string;
    public Abbreviation: string;
    public TotalElectrons: number;
    public TotalNeutrons: number;
    public TotalProtons: number;
    public NumberOfShells: number;
    public Shells: Shell[];
    
    constructor(Fields?: Partial<Element>) {
        this.Name = Fields?.Name ?? "";
        this.Abbreviation = Fields?.Abbreviation ?? "";
        this.TotalElectrons = Fields?.TotalElectrons ?? 0;
        this.TotalNeutrons = Fields?.TotalNeutrons ?? 0;
        this.TotalProtons = Fields?.TotalProtons ?? 0;
        this.NumberOfShells = Fields?.NumberOfShells ?? 0;
        this.Shells = Fields?.Shells ?? [];

    }
}