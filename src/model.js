let data = {
        title:  'A red hat',
        number: 10,
        description: 'a story tells a red hat girl and a big bad wolf'
    },
    obs  = [],
    getData, addNum, pub, sub;

getData = () => {
    return data;
};

sub = (fn) => {
    typeof fn == 'function' && obs.push(fn);
};
pub = (data) => {
    for (let fn of obs) {
        fn(data);
    }
};
addNum = () => {
    data.number++;
    pub(getData());
};

export {getData, addNum, sub, pub};