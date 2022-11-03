var agent = {
    person: {
        name: "bond",
        spy: {
            code: "007"
        }
    }
};

function get(obj,str) {
    if (obj !== undefined) {
        return obj.str;
    } else {
        return undefined;
    }
}



module.exports = get;