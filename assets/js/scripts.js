const listaDeTareas = document.querySelector("#tareas")
const tareaInput = document.querySelector("#nuevaTarea")
const btnAgregar = document.querySelector("#agregarTarea")
const cuentaTareas = document.querySelector("#cuenta-tareas");
const realizadas = document.querySelector("#realizadas")

const tareas = []

btnAgregar.addEventListener("click", () => {
    const tarea = tareaInput.value
    tareas.push({id: Date.now(), tarea: tarea, completed: false})
    tareaInput.value = ""
    let html = ""
    for (let tarea of tareas) {
    html += `<li class="grid-container">
    <div class="item1">${tarea.id}</div>
    <div class="item2">${tarea.tarea}</div>
    <div class="item3"><input type="checkbox" onchange="marcarComoCompletada(${tarea.id})"></div>  
    <div class="item4"><button class="button" onclick="borrar(${tarea.id})">X</button></div>
</li>`;
    }
    listaDeTareas.innerHTML = html;
    cuentaTareas.textContent = `${tareas.length}`;
});

function marcarComoCompletada(id) {
    const tarea = tareas.find(t => t.id === id)
    let completedCount = 0
    tarea.completed = !tarea.completed
    let realizadasHtml = ""
    for (let tarea of tareas) {
        if (tarea.completed) {
            completedCount++
        }
    }
    realizadas.textContent = `${completedCount}`
}

function borrar(id) {
    const tareaIndex = tareas.findIndex(t => t.id === id)
    if (tareas[tareaIndex].completed) {
        completedCount--
    }
    tareas.splice(tareaIndex, 1)
    let html = ""
    for (tarea of tareas) {
        html += `<li class="grid-container">
        <div class="item1">${tarea.id}</div>
        <div class="item2">${tarea.tarea}</div>
        <div class="item3"><input type="checkbox" onchange="marcarComoCompletada(${tarea.id})" ${tarea.completed ? 'checked' : ''}></div>  
        <div class="item4"><button class="button" onclick="borrar(${tarea.id})">X</button></div>
    </li>`
    }
    listaDeTareas.innerHTML = html
    cuentaTareas.textContent = `${tareas.length}`
    realizadas.textContent = `Realizadas: ${completedCount}`
}


