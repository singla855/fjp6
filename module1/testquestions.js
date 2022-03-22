let a;

console.log(a);

function A() { let a = 2; console.log(a);

function C() { console.log(a);

function D() {
  console.log(a);

  a = 2;
}
//////////////////          D
D();
a = 3;
}
///////////// C
C(); 
}
/////////////  A
function B() { let a; console.log(a);

function E() { a = 6; console.log(a);

}
/////////////    E
a = 2; E(); console.log(a);
}
///////////////    B
function F() { console.log(a); a = 2; 
}
//////////////      F
a = 3;

F(); B(); A();