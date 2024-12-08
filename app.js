// BLOG 1
//  misol - 1
let num = 2;
if (num % 2 === 0) {
  console.log("Tog'ri bu son juft son.");
} else {
  console.log("Notog'ri bu son toq son.");
}

// misol - 2

let A = 3;
let B = 5;

if (A >= 0 && B <= 5) {
  console.log(
    "Baraka toping misol togri Ikkita butun A va B sonlari rostlikka tekshirildi"
  );
} else {
  console.log(
    "Qayta uruning misol notog'ri Ikkita butun A va B sonlari rostlikka tekshirilmadi"
  );
}

// misol - 3
let a = 5;
let b = 4;
let c = 3;

if (a >= 4 && b <= 8 && c >= 1) {
  console.log("Baraka toping bu misol tog'ri.");
} else {
  console.log("Qayta uruning bu misol notog'ri.");
}

// misol - 4
let ones = 5;
let twos = 7;

if (ones % 2 && twos % 2) {
  console.log("Baraka toping misol togri, A va B sonlari toq son");
} else {
  console.log("Qayta uruning misol notog'ri, A va B sonlari toq son emas");
}

// misol - 5
let a_1 = 5; /* toq son */
let b_2 = 8;

if (a_1 % 2 && b_2 >= 4) {
  console.log(
    "Misol tog'ri A va B sonlarning hech bo'lmaganda bittasi toq son"
  );
} else {
  console.log(
    "Misol notog'ri A va B sonlarning hech bo'lmaganda bittasi toq son emas"
  );
}

// misol - 6
let A_1 = 9;
let B_2 = 4;

if (A_1 % 2 !== 0 && B_2 % 2 === 0) {
  console.log("Misol togri A va B sonlarning faqat bittasi toq son.");
} else {
  console.log(
    "Misol notog'ri A va B sonlarning ikkalasi ham toq yoki ikkalasi ham juft."
  );
}

//  misol - 7
let A1 = 2;
let b2 = 5;
let c3 = 8;

if (A1 > -3 && b2 < 12 && c3 > 4) {
  console.log("Misol tog'ri");
} else {
  console.log("Qayta uruning misol natog'ri");
}

// misol - 8
let E = 5;
let I = -6;
let L = -4;

if (E > 2 && I < -2 && L == -4) {
  console.log("Tog'ri A,B,C sonlardan faqat bittasi musbat son");
} else {
  console.log("Notog'ri A,B,C sonlardan faqat bittasi musbat son emas");
}

// misol - 9
let p = 5;
let k = -6;
let r = 4;

if (p > 2 && k < -2 && r == 4) {
  console.log("Tog'ri A,B,C sonlardan faqat bittasi musbat son");
} else {
  console.log("Notog'ri A,B,C sonlardan faqat bittasi musbat son emas");
}

// misol 10
let number = 12;

if (number >= 10 && number <= 99 && number % 2 === 0) {
  console.log("Masala tog'ri berilgan son ikki xonali juft son.");
} else {
  console.log("Javob natog'ri berilgan son ikki xonali juft son emas");
}

// BLOG 2
// Masala 1
let number_a = 5;
let number_b = 3;

if (number_a > 0 && number_b > 0) {
  let S = number_a * number_b;
  let P = 2 * (number_a + number_b);
  console.log("Yuzasi (S): " + S);
  console.log("Perimetri (P)" + P);
} else {
  console.log("Notog'ri tomonlar musbat bo'lishi kerak.");
}

// Masala - 2;
let d = 10;
const pi = 3.14;

if (d > 0) {
  let li = pi * d;
  let re = d / 2;
  let Si = pi * re ** 2;
  console.log("Uzunligi (L):" + li);
  console.log("Yuzasi (S):" + Si);
} else {
  console.log("diametr musbat bo'lishi kerak.");
}

// masala - 3
let v_a = 8;

if (v_a > 0) {
  let V = v_a ** 3;
  let C = 6 * v_a ** 2;
  console.log("Hajmi (V):" + V);
  console.log("To'la sirti (S):" + C);
} else {
  console.log("Notog'ri V, S aniqlanmadi");
}

// MISOL - 4
let paralipepet_a = 3;
let paralipepet_b = 4;
let paralipepet_c = 5;

if (paralipepet_a > 0 && paralipepet_b > 0 && paralipepet_c > 0) {
  let V = paralipepet_a * paralipepet_b * paralipepet_c;
  let S =
    2 *
    (paralipepet_a * paralipepet_b +
      paralipepet_b * paralipepet_c +
      paralipepet_a * paralipepet_c);
  console.log("Hajmi (V):" + V);
  console.log("Sirti (S):" + S);
} else {
  console.log("Tomonlar musbat bolish kerak");
}

// MISOL - 5
let a_2 = 14;
let a_3 = 8;
if (a_2 > 0 && a_3 > 0) {
  let M = (a_2 + a_3) / 2;
  console.log("Arifmetigi (M):" + M);
} else {
  console.log("o`rta arifmetigi emas (M):");
}

// Misol 6
let A_2 = 3;
let B_3 = 4;

if (A_2 > 0 && B_3 > 0) {
  let C = A_2 + A_2 + B_3 + B_3;
  let P = A_2 + B_3 + C;
  console.log("Gipotenuzasi (C):" + C);
  console.log("Perimetri (P):" + P);
} else {
  console.log("Notog'ri.");
}

// MISOL - 7
let Pi = 3.14;
let r1 = 5;
let r2 = 3;

if (r1 > r2) {
  let s1 = Pi * r1;
  let s2 = Pi * r2;
  let S = Pi * (r1 ** 2 - r2 ** 2);
  console.log("Ularning yuzalari S1 va S2, ularning ayirmasi (S):" + S);
} else {
  console.log("Notog'ri");
}

// MISOL - 8
let P_2 = 3.14;
let l = 3.14;

if (l > 0) {
  let R = l / (2 * P_2);
  let S = P_2 * R ** 2;
  console.log("Radious (R):" + R);
  console.log("Yuzasi (S):" + S);
} else {
  console.log("Notog'ri Aylananing uzunligi musbat bo'lishi kerak.");
}
