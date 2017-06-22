import * as sModel from './model';
import * as sController from './controller';

let _getTemplate, render, wrapper, init, container;

container = document.getElementById('content');
wrapper   = document.createElement('div');

init = (data) => {

    wrapper.addEventListener('click', (ev) => {
        sController.handleEvent('click', ev);
    });
    render(data);

    if (container.appendChild(wrapper)) {

        //  add listener here if do not use event proxy
        document.getElementById('seeBtn').addEventListener('click', (ev) => {
            sController.handleEvent('click', ev);
            ev.stopPropagation();
        });
    };

    sModel.sub(render);
};

_getTemplate = (data) => {
    return `
            <section>
                <h1>${data.title}</h1>
                <h3 class="hide" id = 'desc'>${data.description}</h3>
                <p>num: ${data.number}</p>
                <button id = 'addBtn' >add</button>
                <button id = 'seeBtn'>view description</button>
            </section>
            `;
};

render = (data) => {
    wrapper.innerHTML = _getTemplate(data);
};

export {render, init};