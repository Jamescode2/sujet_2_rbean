function ageValidator(obj) {
    if (obj.age >=0  && obj.age <=150) {
        return true;
    }else{
        return false;
    }
}

module.exports = ageValidator;