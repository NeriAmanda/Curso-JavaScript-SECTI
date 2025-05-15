// 01

function somar (n1, n2){
    return n1 + n2;
}

let soma = somar(3, 4);
console.log(`Soma: ${soma}`);

// 02

function soma1(a,b,c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma1(2,3,4));
console.log(soma1());

// 03

function soma2(a,b,c){
    a = a !== undefined ? a : 1; 
    b = isNaN(b) ? 1 : b; 
    c = isNaN(c) ? 1 : c; 
    return a + b + c;
}

console.log(soma2());
console.log(soma2(0, 0, 0));

// 04

function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma3());
console.log(soma3(0, 0, 0));
