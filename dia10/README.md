# JAVA SCRIPT

los comentarios en JS se escriben con esas barras: //

// Soy un comentario de 1 línea

/* Soy un comentario multilínea 
   HOLA!!
*/


En JavaScript, `const` se usa para **crear una variable que no puedes cambiar** después de asignarle un valor.

Lo importante de `const`:
- **Una vez que le das un valor a una variable con `const`, no puedes cambiar ese valor más adelante.**
  
### Ejemplo:

```javascript
const edad = 25;
edad = 30;  // Esto da error porque no puedes cambiar 'edad' después de asignarle un valor.
```

### Pero con objetos o arreglos, funciona diferente:
Si usas `const` con un objeto o arreglo, no puedes cambiar el **objeto o arreglo completo**, pero puedes cambiar lo que está dentro de él.

```javascript
const persona = { nombre: "Juan", edad: 25 };
persona.edad = 26;  // Esto está bien, puedes cambiar las propiedades dentro del objeto.
persona = { nombre: "Carlos", edad: 30 };  // Esto da error, no puedes reasignar el objeto completo.
```

En resumen:
- **`const` asegura que no puedas cambiar el valor de la variable después de asignarlo**.
- Si la variable es un objeto o arreglo, puedes cambiar lo que hay dentro de él, pero no la variable en sí. -->




* {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .body {
            display: flex;
            flex-direction: column;
            /* height: 100vh;
            gap: 20px; */
        }

        .container {
            display: flex;
            width: 100%;
            flex-grow: 1;
            gap: 20px;
        }

        .item {
            background-color: #1EAAFC;
            background-image: linear-gradient(130deg, #6C52D9 0%, #1EAAFC 85%, #3EDFD7 100%);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
            color: #ffffff;
            border-radius: 4px;
            border: 6px solid #171717;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            font-weight: bold;
        }

        .header {
            height: 100px;
            background-color: #1EAAFC;
            background-image: linear-gradient(160deg, #6C52D9 0%, #9B8AE6 127%);

            /* position sticky */
            position: sticky;
            top: 0;
        }

        .sidebar {
            background-image: linear-gradient(203deg, #3EDFD7 0%, #29A49D 90%);
            width: 200px;
        }

        .main {
            background-color: #171717;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            gap: 20px;
        }

        .content-row {
            display: flex;
            flex-grow: 1;
            gap: 20px;

        }

        .content-1,
        .content-2,
        .content-3 {
            flex-grow: 1;
            background-image: linear-gradient(130deg, #6C52D9 0%, #1EAAFC 85%, #3EDFD7 100%);
        }

        .footer {
            height: 100px;
            background-color: #1EAAFC;
            background-image: linear-gradient(160deg, #6C52D9 0%, #9B8AE6 127%);

        }

        .main .item {
            height: 200px;
        }

        /* botón de whatsapp */

        .whatsapp {
            position: fixed;
            bottom: 20px;
            right: 20px;

            background-color: white;
            border-radius: 50%;
            width: 39px;
            height: 39px;

        }

        .whatsapp i {
            font-size: 48px;
            color: greenyellow;
            margin-top: -3px;
            margin-left: -1px;
        }