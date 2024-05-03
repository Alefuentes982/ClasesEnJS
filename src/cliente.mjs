export default class Cliente {
    constructor(name, tax) {
        this._nombre = name;
        this._impuesto = tax;
    };

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre1) {
        this._nombre = nombre1;
    }

    get impuesto() {
        return this._impuesto;
    }

    calcularImpuesto() {
        let impuesto = this.impuesto;
        let montoBrutoAnual = impuesto.montoBrutoAnual;
        let deducciones = impuesto.deducciones;
        let monto = (montoBrutoAnual - deducciones) * 0.21;
        return (`El cliente ${this._nombre} debe pagar un impuesto de ${monto}`)
    };

}