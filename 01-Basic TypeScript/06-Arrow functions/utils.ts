// =================================================================
// ส่วนที่ 1: Arrow Function พื้นฐานและการจัดการตัวแปรซ้ำ
// =================================================================
let func1 = (id : number) => {
  console.log('[Function 1] This is an anonymous function');
};
func1(1); // เรียกใช้งานฟังก์ชันแบบบล็อกคำสั่งปกติ

// หมายเหตุ: ปรับชื่อจาก func เป็น func2 เพื่อไม่ให้เกิดข้อผิดพลาดจากการประกาศตัวแปรซ้ำ
let func2 = () => console.log('[Function 2] This is one line anonymous function');
func2(); // Arrow Function แบบบรรทัดเดียว ไม่ต้องใส่ปีกกา {}

// =================================================================
// ส่วนที่ 2: การทำงานร่วมกับระบบตั้งเวลา (Asynchronous Callback)
// =================================================================
let doSomething = () => {
  let dateTime = new Date();
  console.log('[Function 3] ' + dateTime + ' Function doSomething is executed...');
};
setTimeout(doSomething, 2000);
setTimeout(doSomething, 3000);

// ประกาศ Arrow Function แบบเขียนครอบ (Inline Callback) ให้ทำงานเมื่อผ่านไป 4 วินาที
setTimeout(() => {
  let dateTime = new Date();
  console.log('[Function 4] ' + dateTime + " Function doSomething is executed...");
}, 4000);

// =================================================================
// ส่วนที่ 3: การส่งออกฟังก์ชันแบบไม่มีชื่อ (Default Export)
// =================================================================
// ฟังก์ชันนี้จะถูกส่งออกไปภายนอก เพื่อให้ไฟล์อื่นนำไปใช้ผ่านคำสั่ง import
export default (name: string) => {
  return `[Function 5] Hello ${name}`;
};
