import { Shell } from "./shell.model";
import { TableInfo } from "./table-info.model";

export class ChemElement {
    public AtomicNumber: number;
    public Name: string;
    public Symbol: string;
    public AtomicWeight: number;
    public TotalElectrons: number;
    public TotalNeutrons: number;
    public TotalProtons: number;
    public NumberOfShells: number;
    public Shells: Shell[];
    public TableInfo: TableInfo | undefined;

    
    constructor(Fields?: Partial<ChemElement>) {
        this.AtomicNumber = Fields?.AtomicNumber ?? 0; 
        this.Name = Fields?.Name ?? "";
        this.Symbol = Fields?.Symbol ?? "";
        this.AtomicWeight = Fields?.AtomicWeight ?? 0;
        this.TotalElectrons = Fields?.TotalElectrons ?? 0;
        this.TotalNeutrons = Fields?.TotalNeutrons ?? 0;
        this.TotalProtons = Fields?.TotalProtons ?? 0;
        this.NumberOfShells = Fields?.NumberOfShells ?? 0;
        this.Shells = Fields?.Shells ?? [];
        this.TableInfo = Fields?.TableInfo;

    }
}