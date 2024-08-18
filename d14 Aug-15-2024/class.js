class myInfo {
    // property
    name = "Asif Abir";
    city = "Dhaka";
    static country = "Bangladesh";

    // method
    showMyInfo() {
        return "Name : " + this.name + " and City : " + this.city;
    }

    // constructor
    constructor($msg) {
        console.log($msg);
    }

    // static method
    static showStaticMethod() {
        return "This is a static method";
    }
}

// instance
var obj = new myInfo("Hello World");
console.log(obj.name);
console.log(obj.showMyInfo());
console.log(myInfo.showStaticMethod());
console.log(myInfo.country);

obj.city = "Jhalokathi";
console.log(obj.city);

// Inheritance
class myChildInfo extends myInfo {
    childName = "Asifa Amrin";
    
    showMyChildInfo(){
        return "My name is : " + this.childName + " and my father name is : " + this.name;
    }

}

var obj2 = new myChildInfo("Child has been created");
console.log(obj2.showMyChildInfo());