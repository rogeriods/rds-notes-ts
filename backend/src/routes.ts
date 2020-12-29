import { Router } from 'express';
import notesController from './controllers/notes.controller';

const routes = Router();

// Routes for notes
routes.route('/api/notes').post(notesController.create).get(notesController.index);
routes
  .route('/api/notes/:id')
  .get(notesController.show)
  .put(notesController.edit)
  .delete(notesController.delete);

export default routes;
