// =================================================================
// ส่วนที่ 1: Array Destructuring (การสลายโครงสร้างอาเรย์)
// =================================================================
// ดึงข้อมูลจากอาเรย์ตามลำดับดัชนี (Index) มาเก็บเข้าตัวแปรตัวใหม่โดยตรง
let [fullname, currentPosition] = ['Tadayoshi', 'Front-end Developer'];

// หมายเหตุ: ปรับชื่อตัวแปรจาก position เป็น currentPosition เพื่อไม่ให้ชื่อซ้ำกับส่วนที่ 2
console.log('[Destructuring 1] Array - Fullname:', fullname); // ดึงค่าดัชนีที่ 0 ได้ 'Tadayoshi'
console.log('[Destructuring 1] Array - Position:', currentPosition); // ดึงค่าดัชนีที่ 1 ได้ 'Front-end Developer'


// =================================================================
// ส่วนที่ 2: Object Destructuring (การสลายโครงสร้างออบเจกต์)
// =================================================================
// ดึงข้อมูลจากออบเจกต์โดยอิงตามชื่อคีย์ (Key) พร้อมตัวอย่างการเปลี่ยนชื่อตัวแปรใหม่
let { fullname: namex, position, salary: income } = {
  fullname: "Tadayoshi",
  position: "Back-end Developer",
  salary: 250000
};

// อธิบายรูปแบบการรับค่า:
// 1. fullname: namex -> ค้นหาคีย์ fullname แต่สั่งให้เปลี่ยนชื่อตัวแปรไปเก็บในชื่อ namex
// 2. position        -> ค้นหาคีย์ position และบันทึกเข้าตัวแปรชื่อเดิมคือ position
// 3. salary: income  -> ค้นหาคีย์ salary แต่สั่งให้เปลี่ยนชื่อตัวแปรไปเก็บในชื่อ income

console.log('[Destructuring 2] Object - namex (Renamed):', namex); // ได้ค่า 'Tadayoshi'
console.log('[Destructuring 2] Object - position:', position); // ได้ค่า 'Back-end Developer'
console.log('[Destructuring 2] Object - income (Renamed):', income); // ได้ค่า 250000
