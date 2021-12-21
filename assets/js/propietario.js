export class Propietario {
  constructor(nombrePropietario, direccion, telefono) {
    this._nombrePropietario = nombrePropietario;
    this._direccion = direccion;
    this._telefono = telefono;
  }

  get datosPropietario() {
    return `
      El nombre del dueño es: ${this._nombrePropietario}. El domicilio es:${this._direccion}, y el número telefónico de contacto: ${this._telefono}
      `;
  }
}
