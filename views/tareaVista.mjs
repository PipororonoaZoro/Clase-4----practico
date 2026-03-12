// Función para renderizar una lista de tareas en formato JSON
export function renderizarListaTareas(tareas)
{
    // Formatear el array de tareas en formato JSON con indentacion
    return JSON.stringify(tareas, null, 2);
}

// Función para renderizar un mensaje genérico en formato JSON
export function renderizarMensaje(mensaje)
{
    // Envuelve un mensaje en formato JSON
    return JSON.stringify({ mensaje }, null, 2);
}

// Función para renderizar una tarea especifica en formato JSON
export function renderizarTarea(tarea)
{
    // Formatea una tarea individual en formato JSON con indentacion
    return JSON.stringify(tarea, null, 2);
}