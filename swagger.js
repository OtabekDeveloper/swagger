/**
 * @swagger
 * /contact:
 *   get:
 *     description: All catchphrases
 *     responses:
 *       200:
 *         description: Returns all the catachphrases
 */

/**
 * @swagger
 * /contact:
 *   post:
 *     parameters:
 *      - in: body
 *        name: catchphrase
 *        description: New catchphrase
 *        schema:
 *          type: object
 *          properties:
 *            name:
 *              type: string
 *            surename:
 *              type: string
 *            tel:
 *              type: string
 *            title:
 *               type: string
 *     responses:
 *       201:
 *         description: Created
 */


/**
 * @swagger
 * /contact/{id}:
 *   delete:
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: string
 *        description: The catchphrase ID.
 *     description: Delete a catchphrase by id
 *     responses:
 *       200:
 *         description: Returns the requested catachphrase
 */