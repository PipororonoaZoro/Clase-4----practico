import TareasDataSource from './tareasDataSource.mjs';
import Tarea from '../models/tarea.mjs';

export default class TareasMemoriaDataSource extends TareasDataSource {
  constructor() {
    super();
    this.tareas = [
      new Tarea(1, "Tarea 1", "Descripción de tarea 1", false),
      new Tarea(2, "Tarea 2", "Descripción de tarea 2", false),
      new Tarea(3, "Tarea 3", "Descripción de tarea 3", false)
    ];
  }

  obtenerTodas() {
    return this.tareas;
  }

  guardar(tareas) {
    this.tareas = tareas;
  }

  eliminar(id) {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
}