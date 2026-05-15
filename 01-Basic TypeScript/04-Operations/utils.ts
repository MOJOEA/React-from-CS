// ชุดที่ 1: ทดสอบการต่อข้อความกับตัวเลข (String Concatenation)
const s1: string = "This is some text ";
const n1: number = 1;
console.log(s1 + n1); // ผลลัพธ์จะเป็นข้อความ: "This is some text 1"

// ชุดที่ 2: ทดสอบลำดับการคำนวณ (Operations Order)
const s2: string = "This is some text ";
const n2: number = 1;
const m2: number = 2;

console.log(s2 + n2 + m2);   // ผลลัพธ์: "This is some text 12" (ต่อข้อความทีละตัวจากซ้ายไปขวา)
console.log(s2 + (n2 + m2)); // ผลลัพธ์: "This is some text 3"  (บวกตัวเลขในวงเล็บก่อน)
