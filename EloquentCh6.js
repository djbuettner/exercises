console.log("6.1 A vector type\n");

// Your code here.
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(Vec2) {
    return new Vec(this.x + Vec2.x, this.y + Vec2.y); 
  }
  minus(Vec2) {
    return new Vec(this.x - Vec2.x, this.y - Vec2.y); 
  }
  get length() {
    return Math.sqrt( (this.x * this.x) + (this.y * this.y) );
  }
}
console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// ? Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// ? Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// ? 5


console.log("\n\n6.2 Groups\n");

class Group {
  constructor() {
    this.members = [];
  }
  add(value) {
    if ( !this.has(value) ) {
      this.members.push(value);
    }
  }
  delete(value) {
    // what is this doing?
    this.members = this.members.filter(v => v !== value);
  }
  has(value) {
    return this.members.includes(value);
  }
  static from(collection) {
    let group = new Group;
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// ? true
console.log(group.has(30));
// ? false
group.add(10);
group.delete(10);
console.log(group.has(10));
// ? false


console.log("\n\n6.3 Iterable Group\n");

console.log("Don't understand--try later");


console.log("\n\n6.4 Borrowing a method\n");

console.log("Try later");
