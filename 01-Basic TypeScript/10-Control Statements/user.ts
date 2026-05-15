// =================================================================
// ส่วนที่ 1: การใช้เงื่อนไขตรวจสอบ (If-Else Condition)
// =================================================================
// ใน Node.js (Terminal) จะไม่มีคำสั่ง prompt() เหมือนบนเบราว์เซอร์ 
// จึงขอจำลองค่าตัวแปรแทนการพิมพ์เพื่อทดสอบระบบรันอัตโนมัติ
const userKey = "1234"; 

if (userKey === '1234') {
  console.log('[Condition 1] Enter with 1234');
} else if (userKey === '9999') {
  console.log("[Condition 1] Enter with 9999");
} else {
  console.log("[Condition 1] Enter WRONG key");
}


// =================================================================
// ส่วนที่ 2: การวนลูปแบบมาตรฐาน (Standard For Loop) และ For...of
// =================================================================
const users = ["Tadayoshi", "admin", "user1", "someone"];

// การใช้ For Loop แบบนับดัชนี (Index) เหมาะกับงานที่ต้องการระบุตำแหน่งชัดเจน
console.log('\n[Loop 1] Standard For Loop Result:');
for (let index = 0; index < users.length; index++) {
  console.log(' Index ' + index + ': ' + users[index]);
}

console.log('=============================');

// การใช้ For...of ดึงข้อมูลสมาชิกออกมาโดยตรง อ่านง่ายและสั้นกว่า
console.log('[Loop 2] For...of Loop Result:');
for (const user of users) {
  console.log(' User: ' + user);
}


// =================================================================
// ส่วนที่ 3: การวนลูปแบบเงื่อนไขพึงระวัง (While Loop)
// =================================================================
// หมายเหตุ: ปรับชื่ออาเรย์เป็น usersList เพื่อไม่ให้ซ้ำกับส่วนที่ 2 ของไฟล์
const usersList = ["Tadayoshi", "admin", "user1", "someone"];
let idx = 0;

console.log('\n[Loop 3] While Loop Result:');
while (idx < usersList.length) {
  console.log(' While Index ' + idx + ': ' + usersList[idx]);
  idx++; // สิ่งสำคัญ: ห้ามลืมเพิ่มค่าตัวนับเด็ดขาด มิฉะนั้นลูปจะทำงานไม่สิ้นสุด (Infinite Loop)
}