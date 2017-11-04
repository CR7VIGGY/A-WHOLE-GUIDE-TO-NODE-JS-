var AIT = {mess:"shetty",city:"pune"};
var Dir = AIT;
Dir.mess = "wife";
console.log(AIT.mess);
//knowing the meaning of == and ===

console.log(19 == '19');
console.log(19 === '19');

//this operator
var Atul =
{
  printname : function ()
  {
    console.log("my nameis atul");
    console.log(this === Atul);
  }
};
Atul.printname();
function Viggy()
{
  console.log("my nameis atul");
  console.log(this === Atul);
}
Viggy();
