var colors = ['#7FFF00','#00FFFF','#FF69B4','#FF00FF','#DC143C']
export function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default function(){
    var index = getRandom(0,colors.length);
    return colors[index];
}