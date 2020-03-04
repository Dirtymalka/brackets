module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map((item) => item.join(""));
    let strTest = str;
    for (let i = 0; i < brackets.length; i++) {
        if (strTest.indexOf(brackets[i]) != -1) {
            strTest = strTest.replace(brackets[i], '');
            i = -1;
        }
    }
    return strTest.length === 0 ? true : false;
}
