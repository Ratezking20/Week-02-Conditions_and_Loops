for(let i = 0; i < 10; i++){
    console.log(i);
}
console.log('Whatever code is Next after the loop')

for (let i = 0; i < 20; i++) {
if (i % 2 == 0) {
    console.log(i);
}
}
 
let names = ['Jasmine', 'Ratez', 'Daejonn'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}

var b = 110 

while (b < 10) {
    console.log(b);
    b++;
}

do {
    console.log(b)
} while (b < 10);

for (i in names){
    console.log(names[i]);
}

for (i of names){
    console.log(i)
}
var x = 25;
var y = 3;
var z = "Z = " + (x*2);