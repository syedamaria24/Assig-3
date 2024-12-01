// Q1: Solve the below code of expressions using short circuit?
let a = 5

// Q # 1:
let exp1 = (4 + 5) && "abc" || false * "test" || (a - 1) || (false && (++a + 1)) * "end";
console.log(exp1);

// Q # 2:
let exp2 = 10 + ("foo" && 5 + (++a)) && "bar" && (false * "test") || 0 && true;
console.log(exp2);


// Q # 3:
let exp3 = a + (!1 * "start") * 4 && (a++ * "value") + (1 + 2) * "result";
console.log(exp3);

//  Q # 4:
let exp4 = "hello" / (++a + true) || (2 * 3 * "abc") * (0 + 1) + "xyz" && 0;
console.log(exp4);

//  Q # 5:
let exp5 = (true || (0 - 1) * "test" && 4 || false && 3 * "value") * a--;
console.log(exp5);

//  Q # 6:
let exp6 = a + "abc" && (4 * 2) + 3 || (0 + 1) && (3 * "hello" || !a--);
console.log(exp6);

//  Q # 7:
let exp7 = ("foo" + 5) * (++a + true) || 2 * 3 + (true + 2) || "result";
console.log(exp7);

//  Q # 8:
let exp8 = (0 - 1) && (true + 0) || (false * "test") * 4 && 3 * 2 || "value";
console.log(exp8);

//  Q # 9:
let exp9 = 3 * "abc" + (true + 1) || (++a * "test") && (3 * "result") || null;
console.log(exp9);

//  Q # 10:
let exp10 = (++a + false) && "start" || 0 + 1 && "value" || 5 * "end" && a++;
console.log(exp10);

//  Q # 11:
let exp11 = (++a && "hello") + (a++ || 3 * "test") * 4 || 5 * "abc" && 0;
console.log(exp11);

//  Q # 12:
let exp12 = "hello" * (true + 0) * 2 || (false + 1) * 3 && "result" || 4 * "test";
console.log(exp12);

//  Q # 13:
let exp13 = a && ++a || false * 2 && (false * "test") || 3 * "end" && 4;
console.log(exp13);

//  Q # 14:
let exp14 = (false * "abc") * 2 || 1 + "start" && 3 * 4 && "end";
console.log(exp14);

//  Q # 15:
let exp15 = ("foo" * 3 + "true" * 2 || "result") || "start" + ++a && 4 * "end";
console.log(exp15);

//  Q # 16:
let exp16 = 3 * 2 * "end" || (false && true) || "start" * (++a - 2) && null;
console.log(exp16);

//  Q # 17:
let exp17 = 5 + 3.2 * "test" && (false * 3) * "result" || NaN * "end";
console.log(exp17);

//  Q # 18:
let exp18 = "start" && (false || 2 * "end") || 1 + 3 * "result" && 0;
console.log(exp18);

//  Q # 19:
let exp19 = (5 + 1) * "abc" && "foo" || (1 + 2 * (false + 3)) * "test" && 7;
console.log(exp19);

//  Q # 20:
let exp20 = 2 * 3 + "hello" && (false + ++a) * "result" || "end" + 5 || 0;
console.log(exp20);

//  Q # 21:
let exp21 = 5 * (true + ++a) && ("test" - false) || 7 * (true + 2) * "value";
console.log(exp21);

//  Q # 22:
let exp22 = "foo" * 4 && (a++ + 1) * "start" || 5 + 6 * (false + true) && "test";
console.log(exp22);


//  Q # 23:
let exp23 = (false && 2) || (++a + 1) * "end" && "start" || 4 * 5 && "result";
console.log(exp23);

//  Q # 24:
let exp24 = 3 + 2 * "test" || (false + a--) * "hello" && "world" + 1 || 2;
console.log(exp24);

//  Q # 25:
let exp25 = (3 + 4) * (false || 2) && 5 || "start" + 1 + "test" && 0;
console.log(exp25);

//  Q # 26:
let exp26 = "hello" && 3 * 2 + (++a + 1) || (false + true) * "result" + "end";
console.log(exp26);

//  Q # 27:
let exp27 = a + "test" + (true + 2) && (false || "value") || "start" + a++;
console.log(exp27);

//  Q # 28:
let exp28 = (true + false) * "hello" || 3 * (a-- + "value") && "world";
console.log(exp28);

//  Q # 29:
let exp29 = "start" + 2 * (true || 1) && (false || "value") * 5 + "result";
console.log(exp29);

//  Q # 30:
let exp30 = (true + 3) * "test" || 1 * 5 && (false * "value") + "end" || a--;
console.log(exp30);

//  Q # 31:
let exp31 = 3 + "end" || 2 * "test" && (a++ + true) || "start" + 1;
console.log(exp31);

//  Q # 32:
let exp32 = (0 + 3) * (true + false) || 5 * "hello" + 2 && (false * "test");
console.log(exp32);

//  Q # 33:
let exp33 = 2 * 3 && ("end" + a++) || !((false + "test") * 4 && 5);
console.log(exp33);

//  Q # 34:
let exp34 = "hello" + 4 * (false - a--) && 3 + "start" * 1 || true * "test";
console.log(exp34);

//  Q # 35:
let exp35 = "start" && (a-- * 4) + 5 && (false + "end" || 2);
console.log(exp35);

//  Q # 36:
let exp36 = 10 + "value" && (a++ * 2) - 4 && true && 4;
console.log(exp36);

//  Q # 37:
let exp37 = "hello" && 2 * "test" || !(++a * "value") + 1;
console.log(exp37);

//  Q # 38:
let exp38 = (a-- || "test") && 6 * "result" || 12 * "end";
console.log(exp38);

//  Q # 39:
let exp39 = (false * "start") && (false + 1) || 3 * 4 + "hello" * 5 && 0;
console.log(exp39);

//  Q # 40:
let exp40 = false || (4 * "test") * 5 || 6 + ("hello" * 4);
console.log(exp40);

//  Q # 41:
let exp41 = (false && "test") || 5 * (++a + 1) && "hello";
console.log(exp41);

//  Q # 42:
let exp42 = 1 + 2 * "end" || (false + 3) && "result" * 4 && a--;
console.log(exp42);

//  Q # 43:
let exp43 = (false && a--) || 4 * (3 + 2) && "start" + 5;
console.log(exp43);

//  Q # 44:
let exp44 = 3 + 2 * (true + 5) && "value" * 1 || (++a + 2) * "test";
console.log(exp44);

//  Q # 45:
let exp45 = (false || 1) * "test" && 5 * (3 + a--) || "end" + 2;
console.log(exp45);

//  Q # 46:
let exp46 = (2 + a-- + 4) && "test" || 3 * "hello" && (false + 1) * 5;
console.log(exp46);

//  Q # 47:
let exp47 = 0 + "result" && (3 + 1) * 2 || (false + a--) * "end";
console.log(exp47);

//  Q # 48:
let exp48 = (false || 1) * "test" && a-- || (true + 2) * "hello" + a--;
console.log(exp48);

//  Q # 49:
let exp49 = (2 * 3) + "result" && (4 * a--) || "start" + 2 + "end";
console.log(exp49);

//  Q # 50:
let exp50 = 32 && true + "value" || "true://for a = 5";
console.log(exp50);

//  Q # 51:
let exp51 = (5 + 2) * (a-- + 1) || "start" * (++a + "end") * 3;
console.log(exp51);

//  Q # 52:
let exp52 = (++a && 8) * "test" || 4 * "start" * (a-- + "result");
console.log(exp52);

//  Q # 53:
let exp53 = 3 + "value" * (++a + 1) || (a-- && "start") + "end";
console.log(exp53);

//  Q # 54:
let exp54 = (a-- + 2) * "result" || (false && 5) * "test" + 4;
console.log(exp54);

//  Q # 55:
let exp55 = "start" + 5 * (a-- + "test") || (false + 2) * "value";
console.log(exp55);

//  Q # 56:
let exp56 = 4 * (a-- + 1) * "test" || (++a + 3) * "start" + 5;
console.log(exp56);

//  Q # 57:
let exp57 = 3 * "test" || (a-- && "result") || "value";
console.log(exp57);

//  Q # 58:
let exp58 = (a-- + 1) * "start" || (false + 2) * "end" + 3;
console.log(exp58);

//  Q # 59:
let exp59 = 5 * "abc" + "value" || a-- + "test" + 4;
console.log(exp59);

//  Q # 60:
let exp60 = a-- + 3 * "value" + (a-- * 4) || (false + 2) * "end";
console.log(exp60);

//  Q # 61:
let exp61 = 5 * "end" + (++a - 1) * "test" || "start" + false + 4;
console.log(exp61);

//  Q # 62:
let exp62 = "start" + (a-- + 1) * 3 || (false && "end") + 5;
console.log(exp62);

//  Q # 63:
let exp63 = ++a * "test" + (a-- * 3) * "result";
console.log(exp63);

//  Q # 64:
let exp64 = 5 * "end" + (a-- + 1) * "test" || "start" + (false && "result");
console.log(exp64);

//  Q # 65:
let exp65 = "value" + 3 * (a-- * "test") || (false + 1) * "end";
console.log(exp65);

//  Q # 66:
let exp66 = (++a * "test") * 2 || (a-- + 1) * "start" + "result";
console.log(exp66);

//  Q # 67:
let exp67 = "start" + (a-- + 3) * "end" || (++a * "test") * 5;
console.log(exp67);

//  Q # 68:
let exp68 = 2 * (a-- + 1) * "result" || (false && "start") * 3;
console.log(exp68);

//  Q # 69:
let exp69 = 4 + (a-- * "test") * 5 || (false && 2) + "start";
console.log(exp69);

//  Q # 70:
let exp70 = (a-- - 2) * "result" || (false && "end") + 3;
console.log(exp70);

//  Q # 71:
let exp71 = "test" + 2 * (a-- + 3) || (false && "start") + 4;
console.log(exp71);

//  Q # 72:
let exp72 = 3 * (a-- + "value") || 1 + (false + 2) * "test";
console.log(exp72);

//  Q # 73:
let exp73 = (a-- + "test") * 4 || (false + 1) * "result" + "start";
console.log(exp73);

//  Q # 74:
let exp74 = (++a + 5) * "end" || (a-- + 2) * "result" + "start";
console.log(exp74);

//     //     //      //        //     ////        //       //         //      //