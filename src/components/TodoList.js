import React from 'react';

// const TodoList = () => {
//
//     const [ tareas, setTareas ] = React.useState( [] );
//     const [ completed, setCompleted ] = React.useState( [] );
//
//
//     const handleAddTask = () => {
//         const task = document.querySelector( '#task' ).value;
//         setTareas( prevState => [ ...prevState, task ] );
//         document.querySelector( '#task' ).value = '';
//     };
//
//     const handleDeleteTask = ( index ) => {
//         setTareas( ( prevState ) => {
//             return prevState.filter( ( task, i ) => i !== index );
//         } );
//     };
//
//     const handleCompleteTask = ( index ) => {
//         setCompleted( ( prevState ) => [
//             ...prevState,
//             tareas[ index ]
//         ] );
//
//         handleDeleteTask( index );
//     };
//
//
//     return (
//         <div>
//             <div>
//                 <label htmlFor='task'>Tarea </label>
//                 <input type='text' id='task' />
//
//                 <button onClick={ handleAddTask }>Agregar tarea</button>
//             </div>
//             <h1>Lista de tareas pendientes ({ tareas.length } en total)</h1>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Nombre</th>
//                     <th>Eliminar</th>
//                     <th>Completar</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {
//                     tareas.map( ( task, index ) => (
//                             <tr key={ index }>
//                                 <td>{ task }</td>
//                                 <td>
//                                     <button onClick={ () => handleDeleteTask( index ) }>Eliminar</button>
//                                 </td>
//                                 <td>
//                                     <button onClick={ () => handleCompleteTask( index ) }>Completada</button>
//                                 </td>
//                             </tr>
//                         )
//                     )
//                 }
//                 </tbody>
//             </table>
//
//             <h1>Lista de tareas completadas ({ completed.length } en total)</h1>
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Nombre</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {
//                     completed.map( ( task, index ) => (
//                             <tr key={ index }>
//                                 <td>{ task }</td>
//                             </tr>
//                         )
//                     )
//                 }
//                 </tbody>
//             </table>
//         </div>
//     );
// };
//
// export default TodoList;

const TodoList = () => {

    const [ tareas, setTareas ] = React.useState( [] );
    const [ completed, setCompleted ] = React.useState( [] );


    const handleAddTask = () => {
        const task = document.querySelector( '#task' ).value;
        setTareas( prevState => [ ...prevState, task ] );
        document.querySelector( '#task' ).value = '';
    };

    const handleDeleteTask = ( index ) => {
        setTareas( ( prevState ) => {
            return prevState.filter( ( task, i ) => i !== index );
        } );
    };

    const handleCompleteTask = ( index ) => {
        setCompleted( ( prevState ) => [
            ...prevState,
            tareas[ index ]
        ] );

        handleDeleteTask( index );
    };


    return (
        <div>
            <div>
                <h1>Tareas</h1>
                <input type='text' id='task' />
                <button onClick={ handleAddTask } > Agregar</button>
            </div>
            <h2>Tareas Pendientes </h2>
            <table>
                <thead>
                <tr>
                    <th>Nombre de la tarea</th>
                </tr>
                </thead>
                <tbody>
                {
                    tareas.map( ( task, index ) => (
                            <tr key={ index }>
                                <td>{ task }</td>
                                <td>
                                    <button onClick={ () => handleDeleteTask( index ) }>Eliminar</button>
                                </td>
                                <td>
                                    <button onClick={ () => handleCompleteTask( index ) }>Completada</button>
                                </td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>

            <h2>Tareas Completadas </h2>
            <table>
                <thead>
                <tr>
                    <th>Nombre de la tarea</th>
                </tr>
                </thead>
                <tbody>
                {
                    completed.map( ( task, index ) => (
                            <tr key={ index }>
                                <td>{ task }</td>
                            </tr>
                        )
                    )
                }
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;