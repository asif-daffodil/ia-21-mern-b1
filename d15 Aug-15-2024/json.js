var myInfo = {
    name: "Asif Abir",
    city: "Dhaka",
    returnMyInfo: function () {
        return "Name : " + this.name + " and City : " + this.city;
    },
    friendList : ["Himel", "Sagar", "Titu"],
    myChildInfo : {
        childName: "Asifa Amrin",
        showMyChildInfo: function () {
            return "My name is : " + this.childName + " and my father name is : " + myInfo.name;
        }
    }
}
myInfo.city = "Jhalokathi";
console.log(myInfo.returnMyInfo());
console.log(myInfo.friendList[0]);
console.log(myInfo.myChildInfo.showMyChildInfo());

