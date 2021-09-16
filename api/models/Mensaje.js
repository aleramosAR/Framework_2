/**
 * Mensaje.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    username: { type: 'string', required: true },
    texto: { type: 'string', required: true },
    fecha: { type: 'string', required: true }
  }

};

