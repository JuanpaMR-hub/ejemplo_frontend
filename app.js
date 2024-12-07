
// HTML QUE TENGA UN INPUT PARA CREAR TAREAS, ADICIONALMENTE TIENE UN BOTON PARA GUARDARLAS
// AL APRETAR EL BOTON, CON JS OBTENEMOS EL VALOR DEL INPUT (LO QUE PUSO EL USUARIO)
// ESA TAREA QUE CREÓ QUEDARÁ GUARDADA EN UNA LISTA QUE ESTÁ ALMACENADA EN LOCALSTORAGE
// LA LISTA SE MUESTRA DEBAJO DEL INPUT Y SE ACTUALIZA CADA VEZ QUE EL USUARIO GUARDA UNA NUEVA TAREA

//1. CREAR UNA LISTA DE TAREAS Y GUARDARLA EN LOCALSTORAGE
//2. OBTENER EL VALOR DEL INPUT AL MOMENTO DE APRETAR EL BOTON GUARDAR
//3. TRAER DEVUELTA LA LISTA
//4. AÑADIR LA TAREA A LA LISTA
//5. GUARDAR NUEVAMENTE LA LISTA EN LOCALSTORAGE Y LIMPIAR EL INPUT
//6. ACTUALIZAR LA LISTA DE TAREAS QUE VE EL USUARIO

const tarea = document.querySelector('#task');
const boton = document.querySelector('#save_task');

function listar_tareas(){
    const tareas = JSON.parse(localStorage.getItem('tareas'))
    let task_list = document.querySelector('#task_list')
    task_list.innerHTML = ''

    tareas.forEach(tarea => {
        let li = document.createElement('li')
        li.innerHTML = tarea
        li.setAttribute('class','list-group-item')
        task_list.appendChild(li)
        
    });
}
listar_tareas()
boton.addEventListener('click',()=>{
    let nueva_tarea = tarea.value
    const tareas = JSON.parse(localStorage.getItem('tareas'))
    tareas.push(nueva_tarea)
    localStorage.setItem('tareas',JSON.stringify(tareas))
    tarea.value = ''
    listar_tareas()
})