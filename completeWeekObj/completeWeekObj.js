function completeWeekObj(obj) {
    if (obj.monday === undefined) {
        obj.monday = 0;
    }
    if (obj.tuesday === undefined) {
        obj.tuesday = 0;
    }
    if (obj.wednesday === undefined) {
        obj.wednesday = 0;
    }
    if (obj.thursday === undefined) {
        obj.thursday = 0;
    }
    if (obj.friday === undefined) {
        obj.friday = 0;
    }
    if (obj.saturday === undefined) {
        obj.saturday = 0;
    }
    if (obj.sunday === undefined) {
        obj.sunday = 0;
    }

    return obj;
}

module.exports = completeWeekObj;