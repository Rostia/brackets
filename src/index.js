module.exports = function check(str, bracketsConfig) {
    var stack = [];
    for(var i = 0 ; i < str.length ; i++){
        if(getOpenBrackets(str[i],bracketsConfig) !=='' && stack.length > 0 && stack[stack.length-1] === getOpenBrackets(str[i],bracketsConfig)){
            stack.pop();
        }else{
            stack.push(str[i]);
        }
    }
    return (stack.length > 0) ? false : true;
}
function getOpenBrackets(bracket, bracketsConfig) {
    var openBracket = '';
    for(var i = 0 ; i < bracketsConfig.length ; i++){
        if(bracketsConfig[i][1] === bracket){
            openBracket = bracketsConfig[i][0];
            break;
        }
    }
    return openBracket;
}