import radColor from "../util/radColor";
import { getRandom } from "../util/radColor";

var divContainer = document.getElementById('divContainer');
var divCenter = document.getElementById('divCenter');

export default function(n,isPrime){
    var span = document.createElement('span');
    if(isPrime){
        span.style.color = radColor();
    }
    span.innerText = n;
    divContainer.appendChild(span);
    createNumberCenter(n,isPrime);
}

function createNumberCenter(n,isPrime){
    divCenter.innerText = n;
    if(isPrime){
        var div = document.createElement('div');
        div.className = 'center';
        div.innerText = n;
        div.style.color = radColor();
        document.body.appendChild(div);
        getComputedStyle(div).left;
        div.style.transform = `translate(${getRandom(-200,200)}px,${getRandom(-200,200)}px)`;
        div.style.opacity = 0;
    }
    
}