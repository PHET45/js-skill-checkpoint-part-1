// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
let add = {id: 5, todo: "Walk the dog"};
  myTodo.push(add); //1.เพิ่ม Object ใหม่เข้าไปใน myTodo ซึ่งมี id เป็น 5 และมี todo เป็น "Walk the dog"
  myTodo[3].todo = "Go to the gym"; //2) แก้ไขชื่อ Object ที่มี id เป็น 4 เพื่อให้ todo ของ Object นั้นมีค่าเป็น "Go to the gym"
  myTodo.pop(); //3) ลบ Object สุดท้ายใน Array ออก
  console.log(myTodo); //4) นำ myTodo มาแสดงบนหน้าจอ Console
  console.log(`To-do id: ${myTodo[3].id},${myTodo[3].todo}`);