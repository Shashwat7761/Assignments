function Person(FirstName, LastName, OfficeAddress)
{
    this.FirstName = FirstName;
    this.LastName = LastName;
    this.OfficeAddress = OfficeAddress;
}

Person.prototype.print = function(){
    console.log(this.FirstName + " "+this.LastName + "  Works at : "+this.OfficeAddress);
}

Person.prototype.printing = function(id){
    id.innerHTML = this.FirstName + " "+this.LastName + "  <br>Works at : "+this.OfficeAddress;
}


let Person1 = new Person("Stephen","Robert","USA");
let Person2 = new Person("Kane","Williamson","Newzealand");
let Person3 = new Person("Rahul","Dravid","BCCI Coach India");

Person1.print();
Person2.print();
Person3.print();

Person1.printing(document.getElementById("p1"));
Person2.printing(document.getElementById("p2"));
Person3.printing(document.getElementById("p3"));
