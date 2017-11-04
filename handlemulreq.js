//handling multiple request without wasting time.
function placeorder(orderno)
{
  console.log("order no:",orderno);
  deliver(function()
  {
    console.log("delivered order:",orderno);
  });
  cooking(function()
  {
    console.log("Food being cooked:",orderno);
  });
}
function deliver(callback)
{
  setTimeout(callback,5000);
}
function cooking(callback)
{
  setTimeout(callback,2000);
}
placeorder(1);
placeorder(2);
placeorder(3);
placeorder(4);
placeorder(5);
