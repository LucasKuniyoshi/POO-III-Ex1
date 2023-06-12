export default class Produto{
    private _codigo: number;
    private _descricao: string;
    private _valor: number;
    static valor: any;

    constructor(codigo:number, descricao: string, valor: number){
        this._codigo = codigo;
        this._descricao = descricao;
        this._valor = valor;
    }

    get codigo(): number{
        return this._codigo;
    }
    get descricao(): string{
        return this._descricao;
    }
    get valor(): number{
        return this._valor;
    }

}