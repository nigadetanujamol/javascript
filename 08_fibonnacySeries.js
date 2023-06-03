// 0  1  1  2  3  5  8
console.log(`fibonacci series`);
function fib(num) {
  let n1 = 0;
  let n2 = 1;

  for (let index = 1; index <= num; index++) {
        console.log(n1);
    let n3 = n1 + n2;

    n1 = n2;

    n2 = n3;
  }
}

fib(15);
