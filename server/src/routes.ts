import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import BookController from './controllers/BookController';
import UserController from './controllers/UserController';

const routes = Router();
const upload = multer(uploadConfig);

routes.post('/user', UserController.create);
routes.post('/user/login', UserController.signin);
routes.get('/user', UserController.index);
routes.get('/user/books/:id', UserController.showBooks);

routes.post('/book', upload.single('image') ,BookController.create);
routes.get('/book', BookController.index);
routes.get('/book/:id', BookController.show);

export default routes;