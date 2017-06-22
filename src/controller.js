import * as sView from './view';
import * as sModel from './model';

let handleEvent, init, addEvent;

handleEvent = (type, ev) => {
    let _target = ev.target;
    switch (type) {
    case 'click':
        switch (_target.id) {
        case 'addBtn':
            sModel.addNum();
            break;
        case 'seeBtn':
            document.getElementById('desc').classList.toggle('hide');
            break;
        }
        break;
    }
};

init = () => {
    sView.init(sModel.getData());
}

export {handleEvent, init};
