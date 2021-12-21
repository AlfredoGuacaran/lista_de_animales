import { Propietario } from './propietario.js';
export class Animal extends Propietario {
  constructor(nombrePropietario, direccion, telefono, tipo) {
    super(nombrePropietario, direccion, telefono, tipo);
    this._tipo = tipo;
  }

  get tipo() {
    return this._tipo;
  }
}
