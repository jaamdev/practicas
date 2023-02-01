function integerToRoman(n){
 const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
 const romans = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];

 let res = '';

 values.forEach((value,i) => {
  while(n >= value){
   res = res + romans[i];
   n = n - value;
  }
 });

 return res;
}
console.log(integerToRoman(5));
console.log("https://youtu.be/Mqx2mC_kvaI");