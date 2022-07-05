class Task {

    constructor(_text) {
        this.id = '_' + Math.random().toString(36).slice(2);
        this.text = _text;
        this.status = 'todo'; // done | delete
        this.created_at = new Date();
        // this.priority = 'high';
        this.done_at = null;
        this.deleted_at = null;
    }

    done() {
        this.changeStatus('done')
/*         this.status = 'done';
        this.done_at = new Date(); // fecha y hora actual.
        const element =document.querySelector('#' + this.id);
        element.classList.add('done');
        element.classList.remove("todo"); */
    }

    delete() {
        this.changeStatus('delete')
/*         this.status = 'delete';
        this.deleted_at = new Date();
        const element=document.querySelector("#"+this.id);
        element.classList.add('delete');
        element.classList.remove("todo"); */
    }

    changeStatus(status) {
        this.status = status;
        status=="delete"?( this.deleted_at = new Date()):(this.done_at = new Date())
        const element =document.querySelector('#' + this.id);
        element.classList.add(status);
        element.classList.remove("todo");
    }

/*     createElement() {
        const element = document.createElement('p');
        element.setAttribute('id', this.id);
        element.setAttribute('class', 'task todo');
        element.innerHTML = `
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.text}</span>
            <a onclick="deleteTask(this);">❌</a>
        `;
        return element; // elemento HTML
    } */

    update(newText) {
        const element = document.querySelector(`#${this.id}`);
        // children: Busca los elementos hijos
        // Nota recurden que ponemos 0 porque p tiene 2 div hijos
        // Versiona larga
        // const primerDiv = element.children[0];
        // const span = (primerDiv.children[1].textContent = newText);
        // Version corta
        element.children[0].children[1].textContent = newText;
      }

    createElement() {
        const element = document.createElement("p");
        element.setAttribute("id", this.id);
        element.setAttribute("class", "task todo");
        element.innerHTML = `
          <div>
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.text}</span>
          </div>
          <div>
             <a onclick="updateTask(this);">✏️</a>
            <a onclick="deleteTask(this);">❌</a>
          </div>
            `;
        return element; // elemento HTML
      }
}