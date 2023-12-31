import Cliente from "./Cliente";
import Produto from "./Produto";

export default class Venda{
    private _codigo: number;
    private _data: number;
    private _cliente: Cliente;
    private _produtos: Produto[];

    constructor(codigo: number, data: number, cliente: Cliente, produtos: Produto[]){
        this._codigo = codigo;
        this._data = data;
        this._cliente = cliente;
        this._produtos = produtos;
    }

    get codigo(): number{
        return this._codigo;
    }
    get data(): number{
        return this._data;
    }
    get cliente():Cliente{
        return this._cliente;
    }
    get produtos(): Produto[]{
        return this._produtos;
    }

    calcularTotal(): number {
        let valorTotal = 0;
    
        for(const n of this._produtos){
            valorTotal += n.valor; 
        }
        return valorTotal;
    }
}