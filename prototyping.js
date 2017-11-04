function user()
{
  this.name ="";
  this.life = 100;
  this.givelife = function(target)
  {
    target.life += 1;
    console.log(this.name + " gave 1 life to "+target.name);
  }
}

var viggy = new user();
var atul = new user();
viggy.name = "viggy";
atul.name = "atul";

viggy.givelife(atul);
console.log(viggy.life);
console.log(atul.life);

//prototyping
user.prototype.takelife = function (target)
{
  target.life -= 3;
  console.log(this.name + " take 3 life to "+target.name);
};

atul.takelife(viggy);
console.log(viggy.life);
console.log(atul.life);

user.prototype.age = 18;
console.log("viggy age :"+viggy.age);
console.log("atul age :"+atul.age);
