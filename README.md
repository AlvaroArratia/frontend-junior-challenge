# React TODO app con Redux

Antes que de ponerte manos a la obra ¡procura leer atentamente todo el documento!

## Instrucciones

La finalidad de esta aplicación es registrar tus pendientes (TODO's desde ahora) pudiendo agregarlos a la lista, eliminarlos y/o marcarlos como terminados (editarlos). Esta aplicación se conecta con una REST API (json server de solo lectura) para mantener los datos guardados fuera de la aplicación, API que tambien permite realizar las mismas acciones mencionadas anteriormente.

Lamentablemente esta app esta rota, asi que deberás crear, reparar e implementar los siguientes puntos para que funcione correctamente:

- Crear store de Redux para los TODO's. El store debe poder realizar lo siguiente:
  - Cargar una lista de TODO's
  - Agregar un nuevo TODO.
  - Marcar/desmarcar un TODO.
  - Eliminar un TODO.
  - Las llamadas a la API tambien deben hacerse mediante Redux (Thunks). El store debe ser capaz de obtener (GET), añadir (POST), editar (PATCH) y eliminar (DELETE) TODO's. Esta es la API: `https://my-json-server.typicode.com/AlvaroArratia/static-todos-api`.
- Reparar la lista de TODO's, deben mostrarse los TODO's listados en columna y mostrar el mensaje `Looks like you&apos;re absolutely free today!` cuando no hay TODO's. El componente de los items de la lista esta desarrollado y puedes encontrarlo en la ruta `src/components/TodoListItem`.
- Reparar el contador de TODO's terminadas.
- Crear el componente TodoForm, basandote en los diseños entregados, para agregar nuevas TODO a la lista.
- Crear una notificación para el usuario cuando fallen las llamadas a la API. Para eso debes implementar algún toast o snackbar para mostrar el error. Puedes usar alguna libreria como https://fkhadra.github.io/react-toastify/introduction/ u otra que prefieras, o crear el componente desde cero asi como tambien el diseño de este (diseño a tu criterio).

Tambien debes considerar el siguiente funcionamiento:

- Al iniciar la app deben cargarse todos los TODO's desde la API haciendo un GET y guardandolos en el store de Redux para luego mostrarlos en la lista.
- Al clickear o presionar la tecla Enter en el botón del TodoForm debe hacer un POST a la API y agregar el nuevo TODO al store, solo si el input de texto fue llenado, sino el botón no debería funcionar.
- Al marcar/desmarcar un TODO debe hacer un PATCH a la API y editar el TODO en el store.
- Al hacer click en el botón para eliminar, debe hacer un DELETE a la API y eliminar el TODO del store.
- La cantidad de TODO's checkeados debe ser igual al número de TODO's terminados del contador bajo la lista.
- Debes tener en cuenta que para editar el store, las llamadas a la API tienen que ser exitosas. El estado de la app tiene que ser coherente con el de los datos en la API.

### Diseños de referencia

#### App completa

- Lista con TODO's
  ![TodoList-full](https://github.com/AlvaroArratia/frontend-junior-challenge/blob/main/assets/TodoList-full.png)

- Lista con TODO's marcados
  ![TodoListItem-checked](https://github.com/AlvaroArratia/frontend-junior-challenge/blob/main/assets/TodoListItem-checked.png)

- Lista vacia
  ![TodoList-empty](https://github.com/AlvaroArratia/frontend-junior-challenge/blob/main/assets/TodoList-empty.png)

#### Componente TodoForm

![TodoForm](https://github.com/AlvaroArratia/frontend-junior-challenge/blob/main/assets/TodoForm.png)

- Input de texto al hacer focus
  ![TodoForm-input-hover](https://github.com/AlvaroArratia/frontend-junior-challenge/blob/main/assets/TodoForm-input-hover.png)

- Botón al hacer hover
  ![TodoForm-button-hover](https://github.com/AlvaroArratia/frontend-junior-challenge/blob/main/assets/TodoForm-button-hover.png)

## Consideraciones

### Sobre la API

- La API es de solo lectura por lo que las peticiones POST, PATCH y DELETE puede que `fallen` realizar acciones sobre `nuevos datos` asi que no te asustes.
- Para los datos ya creados funcionan todas las peticiones, asi que trabaja las llamadas de forma normal dejando de lado limitación del punto anterior.

### Stack tecnológico

- Es obligatorio el uso de React y Redux, ambas usando hooks. Respecto al resto (estilos, clientes HTTP u otras herramientas que puedas necesitar) ¡sientete libre de utilizar lo que prefieras!
- Para la implementación de `Redux` puedes usar `Redux Core` o `Redux Toolkit` (recomiendo esta por sobre Core), usa lo que mas te acomode. Tambien hay dos metodos en la carpeta `utils` que quizas te sirvan a la hora de manejar datos `serializados` en el store de Redux (si es que lo implementas con datos serializados).
- El proyecto soporta `Typescript`, sientete libre de crear nuevos archivos, en caso de necesitarlo, usando este lenguaje.

### Sobre el alcance

- Lo que se evaluará es lo que esta descrito en las instrucciones como lo mínimo esperado. Aún así, si consideras que puedes hacer mejoras en el diseño, codigo o agregar alguna funcionalidad extra que tenga sentido con el desafio, sientete libre de hacerlo. Esto último no es necesario pero hazlo si crees que puede ayudar a hacernos una mejor idea de tus talentos y habilidades.

## Para correr el proyecto

- Instalar dependencias: `npm install` o `yarn install` si usas yarn.
- Correr el proyecto: `npm start` o `yarn start`.

## Condiciones de entrega

Sube tu respuesta a un repositorio nuevo con acceso público y compártelo vía mail a aarratia@enerlink.com. El plazo de entrega es hasta este lunes 13 de marzo a las 18:00 horas.

¡Éxito y diviértete!
