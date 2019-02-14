class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  callMyProfile() {
    console.log(this.name, this.age);
  }
}

const Nakanishi = new Human("nakanishi", 30);
Nakanishi.callMyProfile();

const Tanaka = new Human("tanaka", 40);

// console.log(Tanaka);
Tanaka.callMyProfile();
