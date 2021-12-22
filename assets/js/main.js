import { Mascota } from './mascota.js';

$('#formulario').on('submit', function (event) {
  event.preventDefault();

  const inputPropietario = $('#propietario').val();
  const inputTelefono = $('#telefono').val();
  const inputDireccion = $('#direccion').val();
  const inputNombreMascota = $('#nombreMascota').val();
  const inputTipoMascota = $('#tipo').val();
  const inputEnfermedad = $('#enfermedad').val();

  const newMascota = new Mascota(
    inputPropietario,
    inputDireccion,
    inputTelefono,
    inputTipoMascota,
    inputNombreMascota,
    inputEnfermedad
  );
  $('#resultado ul').append(`
    <li>${newMascota.datosPropietario}</li>
    <li>${newMascota.tipo}, mientras que el nombre de la mascota es: ${newMascota.nombreMascota} y la enfermedad es: ${newMascota.enfermedad}</li>
    `);
});
