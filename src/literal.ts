let role:"admin"; // type ban gaya hai
role="admin";    // yaha admin ke alawa koi aur s=string nhi aayega//
console.log(role);
  // ise hi literal kehte hai 


  // string literal type 
  type Userrole="admin"|"user";

  let role1:Userrole;
  role1="admin";
  console.log(role);



  // number ke throw

  type dycevalue=1|2|3|4|5|6;
  let dicevalue:dycevalue;
  dicevalue=1;
  console.log(dicevalue);


  // boolean ke throw
  let isvarified:true;
  isvarified=true;
  console.log(isvarified);


  // function

  function settheme(
    theme:"dark"|"light"
  ){
    console.log(theme);
  }

  settheme("dark"); // dark ya light ke alawa aur koi use nhi kar sakte hai
  settheme("light");