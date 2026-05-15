// ==========================================
// ส่วนที่ 1: การประกาศตัวแปรและการตรวจประเภทข้อมูล
// ==========================================
let text1: string = 'Hello'; // Explicit Type: ล็อกให้เป็นข้อความชัดเจน
let text2 = 'Hello';         // Type Inference: ระบบเดาให้ว่าเป็นข้อความอัตโนมัติ
let text3: any = 'Hello';    // Any Type: ยืดหยุ่นสูงสุด เก็บค่าอะไรก็ได้

console.log("--- ตรวจสอบประเภทข้อมูลเริ่มต้น ---");
console.log(typeof text1); // ผลลัพธ์: string
console.log(typeof text2); // ผลลัพธ์: string
console.log(typeof text3); // ผลลัพธ์: string

// ==========================================
// ส่วนที่ 2: การเปลี่ยนค่าตัวแปรและการทำงานของ any
// ==========================================
// text1 = 10; // Error: นำเลข 10 มาใส่ในกล่อง string ไม่ได้
// text2 = 10; // Error: ระบบเดาว่าเป็น string ไปแล้ว จึงห้ามเปลี่ยนประเภท
text3 = 10;    //  Pass: เพราะเป็น any จึงเปลี่ยนจากข้อความเป็นตัวเลขได้

console.log("\n--- ตรวจสอบประเภทข้อมูลหลังเปลี่ยนค่า ---");
console.log(text1); // ผลลัพธ์: Hello
console.log(text2); // ผลลัพธ์: Hello
console.log(text3); // ผลลัพธ์: 10

console.log(typeof text1); // ผลลัพธ์: string
console.log(typeof text2); // ผลลัพธ์: string
console.log(typeof text3); // ผลลัพธ์: number (เปลี่ยนตามค่าปัจจุบัน)

// ==========================================
// ส่วนที่ 3: พฤติกรรมของตัวแปร undefined (ไม่มีการกำหนดค่า)
// ==========================================
console.log("\n--- ทดสอบตัวแปร undefined ---");
let u = undefined; // มองเป็น any ชั่วคราว
console.log(u);    // ผลลัพธ์: undefined

u = true;          //  Pass: สลับมาเก็บค่า Boolean ได้
console.log(u);    // ผลลัพธ์: true
console.log(typeof u); // ผลลัพธ์: boolean

// ==========================================
// ส่วนที่ 4: พฤติกรรมของตัวแปร null (ค่าว่างเปล่า)
// ==========================================
console.log("\n--- ทดสอบตัวแปร null ---");
let n = null;      // มองเป็น any ชั่วคราว
console.log(n);    // ผลลัพธ์: null

n = true;          //  Pass: สลับมาเก็บค่า Boolean ได้เช่นกัน
console.log(n);    // ผลลัพธ์: true
console.log(typeof n); // ผลลัพธ์: boolean
