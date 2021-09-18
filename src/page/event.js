import { numberCreate } from "../util/number";
import appendNumber from "../page/appendNumber";
var isStart = false;
var n = new numberCreate(200);
n.onNumberCreate = function(n,isPrime){
    appendNumber(n,isPrime)
}
export default window.onclick = function(){
    if(isStart){
        n.stop();
        isStart = false;
    }else{
        n.start();
        isStart = true;
    }
}