var args = process.argv;
var total = 0;

for(var idx in args) {
    i = Number(args[idx]);

    if(false === isNaN(i)) {
        total += i;
    }
}

console.log(total);