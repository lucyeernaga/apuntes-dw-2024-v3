todos los inputs tienen que tener un name
```html
<input type="text" name="user"/>
<input type="password" name="pass"/>
<input type="number" name="numbers" />
<input type="submit" value="Ingresar al portal"/> <!--x defecto nos va a poner send/enviar, si queremos poner otra cosa con: value -->


<!-- ponemos el atributo type para: definir el tipo de input (si es para contraseña, o para numero o enviar...) --> 
```

#  Inputs 
Un input es un campo interactivo en el que los usuarios pueden ingresar información, como texto, contraseñas, fechas, números, etc. Los inputs son comúnmente usados en formularios para recibir datos de los usuarios.

## Tipos de Inputs
El atributo type de un 'input' define qué tipo de entrada esperas del usuario. Aquí te explico los más comunes:

1. 'input type="text"': Un campo de texto donde el usuario puede escribir.

    ```html
    <label for="nombre">Nombre:</label>
    <input type="text" id="nombre" name="nombre">
    ```

2. 'input type="password"': Un campo de texto que oculta lo que el usuario escribe (usado para contraseñas).

    ```html
    <label for="contraseña">Contraseña:</label>
    <input type="password" id="contraseña" name="contraseña">
    ```

3. 'input type="email"': Un campo donde el usuario debe ingresar un correo electrónico. Los navegadores pueden validar si el formato del correo es correcto.

    ```html
    <label for="email">Correo electrónico:</label>
    <input type="email" id="email" name="email">
    ```

4. 'input type="number"': Un campo para ingresar números. El navegador generalmente mostrará un teclado numérico en dispositivos móviles.

    ```html
    <label for="edad">Edad:</label>
    <input type="number" id="edad" name="edad">
    ```

5. 'input type="date"': Un campo para ingresar una fecha. Los navegadores mostrarán un selector de fecha.

    ```html
    <label for="fecha">Fecha:</label>
    <input type="date" id="fecha" name="fecha">
    ```

6. 'input type="checkbox"': Un cuadro de selección que permite al usuario elegir entre opciones. Puede estar marcado o desmarcado.

    ```html
    <label for="suscripcion">Suscribirse al boletín:</label>
    <input type="checkbox" id="suscripcion" name="suscripcion">
    ```

7. 'input type="radio"': Botones de opción que permiten al usuario elegir solo una opción entre varias.

    ```html
    <label for="hombre">Hombre:</label>
    <input type="radio" id="hombre" name="sexo" value="hombre">

    <label for="mujer">Mujer:</label>
    <input type="radio" id="mujer" name="sexo" value="mujer">
    ```

8. 'input type="submit"': Un botón para enviar el formulario.

    ```html
    <input type="submit" value="Enviar">
    ```

9. 'input type="file"': Un campo para seleccionar un archivo desde el dispositivo.

    ```html
    <label for="archivo">Selecciona un archivo:</label>
    <input type="file" id="archivo" name="archivo">
    ```

## Atributos comunes de los inputs
- id: Un identificador único para el input. Se usa para asociarlo con una etiqueta <label>.
- name: El nombre del campo, que es lo que se enviará cuando el formulario se envíe.
- value: El valor predeterminado del input o el valor que el usuario ha ingresado (en campos como botones de envío o casillas de verificación).
- placeholder: Un texto que aparece en el campo cuando está vacío y desaparece cuando el usuario empieza a escribir.