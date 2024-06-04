var n;
for (i = n + 1; ; i++) {
  isPrime = true;
  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      isPrime = false;
    }
  }
  if (isPrime == true) {
    console.log(i);
    break;
  }
}
