// day 6
// (a)
 class Movie{
     constructor(title,studio,rating){
         this.title=title;
         this.studio=studio;
         this.rating=rating;
     }
 }
var m1=new Movie("casino Royale","Eon Productions","PG13");
console.log(m1.title)

// (b) 
class Circle{
     constructor(radius,color){
         this.radius=radius;
         this.color=color;
         }
         getarea(){
             return PI*this.radius*2;
         }
         getcumference(){
             return PI*this.radius*this.radius
         }
         getradius(){
             return this.radius*2
         }
 }
var c1=new Circle(2,0);
console.log(c1.getradius())

// (c) 
class Person{
     constructor(name,age,height,weight,job){
         this.name=name;
         this.age=age;
         this.height=height;
         this.weight=weight
         this.job=job
         }
        
 }
 var num1=new Person("raja",45,157,67,"whatch man");
 console.log(num1.job)

// (d)
 class Calculator{
     constructor(highprice,averageprice,lowprice){
         this.highprice=highprice;
         this.averageprice=averageprice;
         this.lowprice=lowprice;
        
         }
        
 }
 var num1=new Calculator(1000,500,250);
 console.log(num1.lowprice);