import { fileUpload } from "../../src/helpers/fileUpload";

describe('Pruebas en fileUpload', () => {

  test('debe subir el archivo correctamente a claudinary', async() => {

    const imageUrl = 'https://www.adslzone.net/app/uploads-adslzone.net/2019/04/borrar-fondo-imagen-1200x675.jpg';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob;
    const file = new File([blob], 'foto.jpg');

    const url = await fileUpload(file);

    expect(typeof url).toBe('string');

  });

  test('debe de retornar null', async() => {
    const file = new File([], 'foto.jpg');
    const url = await fileUpload(file);

    expect(url).toBe(null);
  })

});