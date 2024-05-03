import Cliente from "./cliente.mjs";
import Impuesto from "./impuesto.mjs";

let montoBrutoAnual1 = 8400000;
let deducciones1 = 0.1 * montoBrutoAnual1;
let impuesto = new Impuesto(montoBrutoAnual1, deducciones1);

let cliente1 = new Cliente("Pedrito", impuesto);
console.log(cliente1.calcularImpuesto()); 
