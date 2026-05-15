// =================================================================
// ส่วนที่ 1: การใช้งาน Array ฟังก์ชันพื้นฐาน (push, indexOf, splice)
// =================================================================
let activities1 = ['Sports', 'Programming', 'Eating', 'Sleeping'];
activities1.push('BoardGaming'); // เพิ่มข้อมูลเข้าต่อท้าย Array
console.log('[Array Basic 1] After Push:', activities1);

// ค้นหาคำว่า 'programming' (ตัวเล็กทั้งหมด) ซึ่งไม่มีใน Array ผลลัพธ์จึงได้ -1 (หาไม่เจอ)
let idx1 = activities1.indexOf('programming');
console.log('[Array Basic 2] IndexOf (Case-sensitive):', idx1); 

// เมื่อ idx1 เป็น -1 คำสั่ง splice(-1, 1) จะกลายเป็นการลบข้อมูลตัวสุดท้าย ('BoardGaming') ออก
activities1.splice(idx1, 1); 
console.log('[Array Basic 3] After Splice with -1:', activities1);

// ทดสอบใหม่อีกครั้งด้วยการค้นหาที่สะกดพิมพ์ตัวพิมพ์ใหญ่-เล็กถูกต้อง
let activities2 = ["Sports", "Programming", "Eating", "Sleeping", "BoardGaming"];
let idx2 = activities2.indexOf("Programming"); // หาเจอ ได้ค่าดัชนีเป็น 1
console.log('[Array Basic 4] IndexOf (Correct Case):', idx2);

activities2.splice(idx2, 1); // ลบข้อมูลตำแหน่งที่ 1 ออก 1 ตัว ('Programming')
console.log('[Array Basic 5] After Splice with Correct Index:', activities2);


// =================================================================
// ส่วนที่ 2: การใช้ Array Functions ร่วมกับ Arrow Function
// =================================================================
let activities3 = ['Sports', 'Programming', 'Eating', 'Sleeping', 'BoardGaming'];

// findIndex: ค้นหาตำแหน่งแรกที่ตรงตามเงื่อนไข (แปลงเป็นตัวเล็กเพื่อป้องกัน Case-sensitive)
let indexFound = activities3.findIndex((item) => {
  return item.toLowerCase() === 'eating'; // ค้นหาได้ตำแหน่งที่ 2
});
console.log('[Array Advanced 1] FindIndex:', indexFound);

// filter: คัดกรองข้อมูลเฉพาะสมาชิกที่ลงท้ายด้วยคำว่า "ing" เท่านั้นสร้างเป็น Array ใหม่
let filtered = activities3.filter((item) => item.endsWith("ing"));
console.log('[Array Advanced 2] Filter endsWith(ing):', filtered);

// map: วนลูปดึงข้อมูลสมาชิกทุกตัวใน Array ออกมาประมวลผลหรือแสดงผลทีละตัว
console.log('[Array Advanced 3] Map Loop Result:');
activities3.map((item) => {
  console.log(' - ' + item);  
});


// =================================================================
// ส่วนที่ 3: การใช้งาน Spread Operator กับ Array
// =================================================================
let actGroupA = ["Sports", "Programming", "Eating", "Sleeping"];
let actGroupB = ["Traveling", "Gaming"];

// แบบไม่ใช้ Spread: ผลลัพธ์จะได้ Array ซ้อน Array [[...], [...]]
let nestedActivities = [actGroupA, actGroupB];
console.log('[Spread Array 1] Nested Array:', nestedActivities);

// แบบใช้ Spread (...): จะเป็นการกระจายสมาชิกด้านในออกมารวมกันเป็น Array ชั้นเดียว
let spreadActivities = [...actGroupA, ...actGroupB];
console.log('[Spread Array 2] Merged Array:', spreadActivities);


// =================================================================
// ส่วนที่ 4: การใช้งาน Spread Operator กับ Object
// =================================================================
let user = {
  name: 'Aj.M',
  position: 'Lecturer'
};

// แบบไม่ใช้ Spread: ผลลัพธ์จะได้ Object ซ้อน Object (user จะเป็น Property ย่อยด้านใน)
let nestedAdmin = {
  isAdmin: true,
  user
};
console.log('[Spread Object 1] Nested Object:', nestedAdmin);

// แบบใช้ Spread (...): จะเป็นการกระจายคุณสมบัติ (Attributes) ทั้งหมดรวมเข้าเป็นชุดเดียวกัน
let spreadAdmin = {
  isAdmin: true,
  ...user
};
console.log('[Spread Object 2] Merged Object Properties:', spreadAdmin);
