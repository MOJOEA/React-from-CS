// =================================================================
// sayHello_1: ฟังก์ชันพื้นฐาน ไม่รับค่าพารามิเตอร์ และไม่ส่งค่ากลับ (Void)
// =================================================================
function sayHello_1() {
  console.log('[Function 1] Hello!');
}
sayHello_1();


// =================================================================
// sayHello_2: ฟังก์ชันรับพารามิเตอร์ (name เป็น string, age เป็น any)
// =================================================================
function sayHello_2(name: string, age: any) {
  console.log('[Function 2] Hello! ' + name + ' ' + age);
}
sayHello_2("Tadayoshi", 20);  // age ส่งเป็นตัวเลข
sayHello_2('Tadayoshi', 21);  // age ส่งเป็นตัวเลข


// =================================================================
// sayHello_3: ฟังก์ชันที่มีการกำหนดค่าเริ่มต้นให้พารามิเตอร์ (Default Parameter)
// =================================================================
function sayHello_3(name: string, age: any, address = 'CS MSU') {
  console.log('[Function 3] Hello! ' + name + ' ' + age + ' ' + address);
}
sayHello_3("Tadayoshi", 20); // ไม่ส่ง address ระบบจะใช้ค่าเริ่มต้น 'CS MSU'
sayHello_3('Tadayoshi', "20", 'Computer Science MSU'); // ส่ง address ใหม่เข้าไปแทนที่


// =================================================================
// sayHello_4: ฟังก์ชันที่มีพารามิเตอร์แบบเลือกใส่หรือไม่ก็ได้ (Optional Parameter)
// =================================================================
function sayHello_4(name: string, age: any, address?: string) {
  console.log('[Function 4] Hello! ' + name + ' ' + age + ' ' + address);
}
sayHello_4("Tadayoshi", 20); // ไม่ส่ง address ระบบจะแสดงค่าเป็น undefined
sayHello_4("Tadayoshi", "20", 'Computer Science MSU');


// =================================================================
// sayHello_5: ฟังก์ชันแบบส่งค่ากลับ (Return Value) โดยใช้เครื่องหมาย + ต่อข้อความ
// =================================================================
function sayHello_5(name: string, age: any, address?: string) {
  return '[Function 5] Hello! ' + name + ' ' + age + ' ' + address;
}
let text1 = sayHello_5("Tadayoshi", 20);
console.log(text1);
console.log(sayHello_5("Tadayoshi", "20", "Computer Science MSU"));


// =================================================================
// sayHello_6: ฟังก์ชันแบบส่งค่ากลับ โดยใช้เครื่องหมาย Backtick (Template Literals)
// =================================================================
function sayHello_6(name: string, age: any, address?: string) {
  return `[Function 6] Hello! ${name} ${age} ${address}`; // เขียนง่ายขึ้น ไม่ต้องใช้เครื่องหมาย +
}
let text2 = sayHello_6("Tadayoshi", 20);
console.log(text2);
console.log(sayHello_6("Tadayoshi", "20", "Computer Science MSU"));


// =================================================================
// sayHello_7: ฟังก์ชันซ้อนฟังก์ชัน (Nested Function) และขอบเขตตัวแปร (Scope)
// =================================================================
function sayHello_7(name: string, age: any, address?: string) {
  function show() {
    console.log(text); // ฟังก์ชันย่อยสามารถดึงตัวแปร text จากฟังก์ชันหลักมาใช้ได้
  }
  let text = `[Function 7] Hello! ${name} ${age} ${address}`;
  show(); // เรียกทำงานฟังก์ชันย่อยหลังจากกำหนดค่าตัวแปร text เรียบร้อยแล้ว
}
sayHello_7("Tadayoshi", 20, "Computer Science MSU");
