(() => {

    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, markedForDeletion: false },
        { id: 2, markedForDeletion: false },
        { id: 3, markedForDeletion: true },
        { id: 4, markedForDeletion: false },
        { id: 5, markedForDeletion: false },
        { id: 7, markedForDeletion: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.markedForDeletion );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const currentDate = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const filesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;


})();