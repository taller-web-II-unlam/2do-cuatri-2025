import {Router} from "express";
import { EmpleadoController } from "../../controllers/empleado.controller.js";

const empleadoRouter = Router();
const empleadoController = new EmpleadoController();

empleadoRouter.get('/',empleadoController.getEmpleados.bind(empleadoController));
empleadoRouter.get('/:id',empleadoController.getEmpleado.bind(empleadoController));
empleadoRouter.post('/',empleadoController.crearEmpleado.bind(empleadoController));
empleadoRouter.put('/:id',empleadoController.actualizarEmpleado.bind(empleadoController));
empleadoRouter.delete('/:id',empleadoController.eliminarEmpleado.bind(empleadoController));


export default empleadoRouter;