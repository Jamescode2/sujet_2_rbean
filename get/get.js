var agent = {
    person: {
        name: "bond",
        spy: {
            code: "007"
        }
    }
};

var obj = {
    randkeyyqjkrbxk: 'rand-val-rbdnqhxx',
    randkeylnazoarp:
    {
        randkeyfwuqprvk: 'rand-val-qubcfnke',
        randkeytaduwnou:
        {
            randkeywrgsdxiu: 'rand-val-moleofhx',
            randkeymlkpfzpq: 'rand-val-mdfgprgc',
            randkeygtegonfd: 'rand-val-rodkoias'
        },
        randkeyupmencxi: 'rand-val-sindtbjo'
    }
};

var s = "randkeylnazoarp.randkeytaduwnoua.randkeygtegonfd";

function get(o, str) {
    let array = str.split('.');
    let element = o;

    if (o === undefined || str === undefined) {
        return undefined;
    }

    for (let i = 0; i < array.length; i++) {
        element = element[array[i]];
        if (element === undefined) {
            return element;
        }
    }

    if (str === '') {
        return o;
    } else {
        return element;
    }

}


module.exports = get;