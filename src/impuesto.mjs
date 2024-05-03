class Impuesto {
   constructor(mba, ded) {
     this._montoBrutoAnual = mba;
     this._deducciones = ded;
   }; 

   get montoBrutoAnual() {
     return this._montoBrutoAnual;
   };

   set montoBrutoAnual(nuevoMba) {
     this._montoBrutoAnual = nuevoMba;   
   };

   get deducciones () {
     return this._deducciones;
   };

   set deducciones (nuevoDed) {
     this._deducciones = ded;
   };
};

export default Impuesto;