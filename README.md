# Reformar para usar otro framework (2)
## SAILS
<br />

* ### Elegir uno de los dos frameworks vistos en la clase (Sails ó Koa) y trasladar el último proyecto entregable (sin framework) a esta nueva plataforma.

* ### Verificar el correcto funcionamiento del servidor a nivel de sus rutas, vistas, lógica de negocio y persistencia.

<br />
<hr />
<br />

El framework elegido fue **Sails**.

Cree los controladores y models de **Productos** y **Mensajes**.

El tipo de persistencia que configure es **MongoDB**.

Comparti los metodos CRUD a ejecutar en **Postman** desde esta URL:<br />
https://www.getpostman.com/collections/287285f9c79933aa211c

Las llamadas utilizadas fueron:

### Mensajes

```
POST      http://localhost:1337/mensaje
GET       http://localhost:1337/mensaje
PUT       http://localhost:1337/mensaje/:id
DELETE    http://localhost:1337/mensaje/:id
```

<br />

### Productos

```
POST      http://localhost:1337/producto
GET       http://localhost:1337/producto
PUT       http://localhost:1337/producto/:id
DELETE    http://localhost:1337/producto/:id
```