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
        this.status = 'done';
        this.done_at = new Date(); // fecha y hora actual.
        document.querySelector('#' + this.id).classList.add('done');
    }

    delete() {
        this.status = 'delete';
        this.deleted_at = new Date();
        document.querySelector("#"+this.id).classList.add('delete');
    }

    createElement() {
        const element = document.createElement('p');
        element.setAttribute('id', this.id);
        element.setAttribute('class', 'task');
        element.innerHTML = `
            <input type="checkbox" onchange="checkTask(this);">
            <span>${this.text}</span>
            <a onclick="deleteTask(this);">❌</a>
        `;
        return element; // elemento HTML
    }
}