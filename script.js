$(document).ready(function() {
    // Inicializar DataTable
    $('#taskTable').DataTable();

    // Función para agregar una nueva tarea
    window.addTask = function() {
        var newTask = $('#newTask').val();
        if (newTask !== '') {
            // Agregar la tarea a la tabla y limpiar el campo de entrada
            $('#taskTable').DataTable().row.add([newTask, 'Pendiente', '<button class="edit" onclick="editTask(this)">Editar</button><button class="delete" onclick="deleteTask(this)">Eliminar</button>']).draw(false);
            $('#newTask').val('');
        }
    };

    // Función para editar una tarea
    window.editTask = function(button) {
        var row = $(button).closest('tr');
        var data = $('#taskTable').DataTable().row(row).data();
        var editedTask = prompt('Editar tarea:', data[0]);
        if (editedTask !== null) {
            data[0] = editedTask;
            $('#taskTable').DataTable().row(row).data(data).draw(false);
        }
    };

    // Función para eliminar una tarea
    window.deleteTask = function(button) {
        var row = $(button).closest('tr');
        $('#taskTable').DataTable().row(row).remove().draw(false);
    };
});
