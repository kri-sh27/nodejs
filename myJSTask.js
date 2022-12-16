function avg(data){
    var total=0;
    data.forEach(function(d){
        total+=d;
    });
    var average=total/data.length;
    return Math.round(average);
}
var data=[10,2,20,6,35,2];
console.log(avg(data));