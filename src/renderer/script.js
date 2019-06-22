//For security ipc functions live in preload.js
const buttons = {
    'shutdown': shutdown,
    'restart': restart,
    'lock': lock,
    'logout': logout,
};

for(let id in buttons) {
    document.querySelector("#"+id).addEventListener('click', evt => {
        buttons[id]();
        evt.preventDefault();
        return false;
    });
}

document.addEventListener('click', quit);

document.addEventListener("keyup", evt => {
    switch(evt.key) {
        case "Escape": quit(); return;
    }
});

document.addEventListener("keydown", evt => {
    switch(evt.key) {
        case "ArrowRight": focusNext(); return;
        case "ArrowLeft": focusPrev(); return;
    }
});

function focusNext() {
    const active = document.activeElement;
    const parent = active.parentNode;
    let next = active.nextElementSibling;

    if(!next && parent.lastElementChild === active) {
        next = parent.firstElementChild;
    }

    if(next) {
        next.focus();
    }
}

function focusPrev() {
    const active = document.activeElement;
    const parent = active.parentNode;
    let prev = active.previousElementSibling;

    if(!prev && parent.firstElementChild === active) {
        prev = parent.lastElementChild;
    }

    if(prev) {
        prev.focus();
    }
}
