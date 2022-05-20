const container = document.getElementById("container");
const button = document.getElementById("btn");

document.addEventListener("DOMContentLoaded" , getNotes);

button.addEventListener("click" , () => {
    const noteBox = document.createElement("div");
    noteBox.classList.add("note-box");
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Type New Note ..." ;
    const saveBtn = document.createElement("button");
    saveBtn.classList.add("save-btn");
    saveBtn.innerText = "Save Note";

    noteBox.append(element);
    noteBox.append(saveBtn);
    container.append(noteBox);

    saveBtn.addEventListener("click" , () => {
        saveBtn.remove();
        saveNote(element.value);
    });

    element.addEventListener("dblclick" , () => {
        const doDelete = confirm("do you realy want to delete this note ?");
        if(doDelete){
        removeNote(noteBox);
        noteBox.remove();
        };
    });
});

function saveNote(note) {
    let notes ;
    if(localStorage.getItem("notes") === null){
        notes = [] ;
    } else{
        notes = JSON.parse(localStorage.getItem("notes"));
    }
    notes.push(note);
    localStorage.setItem("notes" , JSON.stringify(notes))
};

function removeNote (note) {
    let notes ;
    if(localStorage.getItem("notes") === null){
        notes = [] ;
    } else{
        notes = JSON.parse(localStorage.getItem("notes"));
    }
    const noteIndex = note.children[0].value ;
    notes.splice(notes.indexOf(noteIndex),1);
    localStorage.setItem("notes" , JSON.stringify(notes))
}



function getNotes () {
    let notes ;
    if(localStorage.getItem("notes") === null){
        notes = [] ;
    } else{
        notes = JSON.parse(localStorage.getItem("notes"));
    };
    notes.forEach((note) => {
        const noteBox = document.createElement("div");
        noteBox.classList.add("note-box");
        const element = document.createElement("textarea");
        element.classList.add("note");
        // element.placeholder = "Type New Note ..." ;
        element.value = note ;
        // const saveBtn = document.createElement("button");
        // saveBtn.classList.add("save-btn");
        // saveBtn.innerText = "Save Note";
    
        noteBox.append(element);
        // noteBox.append(saveBtn);
        container.append(noteBox);
        element.addEventListener("dblclick" , () => {
            const doDelete = confirm("do you realy want to delete this note ?");
            if(doDelete){
            removeNote(noteBox);
            noteBox.remove();
            };
        });
    })
}