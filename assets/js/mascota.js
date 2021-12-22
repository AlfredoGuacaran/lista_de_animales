import { Animal } from './animal.js';
export class Mascota extends Animal {
  constructor(
    nombrePropietario,
    direccion,
    telefono,
    tipo,
    nombreMascota,
    enfermedad
  ) {
    super(
      nombrePropietario,
      direccion,
      telefono,
      tipo,
      nombreMascota,
      enfermedad
    );
    this._nombreMascota = nombreMascota;
    7;
    this._enfermedad = enfermedad;
  }

  get nombreMascota() {
    return this._nombreMascota;
  }
  set nombreMascota(nombre) {
    this._nombreMascota = nombreMascota;
  }

  get enfermedad() {
    return this._enfermedad;
  }

  set enfermedad(enfermedad) {
    this._enfermedad = enfermedad;
  }
}
