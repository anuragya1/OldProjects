const calculator=(a,b,ch)=>{
switch(ch){
    case'+':
    return a+b;
    break;
    case'-':
    return a-b;
    break;
    case'*':
    return a*b;
    break;
    case '/':
     return a/b;
     break;
     default:
        return "enter correct expression";

}
}
export default calculator;