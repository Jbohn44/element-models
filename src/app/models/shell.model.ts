export class Shell{
    public ShellName: string;
    public NumberOfElectrons: number;

    constructor(_shellName: string, _numberOfElectrons: number) {
        this.ShellName = _shellName;
        this.NumberOfElectrons = _numberOfElectrons;
    }
}