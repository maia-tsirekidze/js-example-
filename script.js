// ამოცანა: მარტივი რიცხვების გამოტანა
// მომხმარებელმა შეიყვანოს რიცხვი n.
// პროგრამამ უნდა დაბეჭდოს ყველა მარტივი რიცხვი 1–დან n-მდე.
// ფიქრი: აქ უკვე მოგიწევს ფლაგის (isPrime) ლოგიკა, ციკლი 2–დან i-1-მდე და გადაწყვეტილების მიღება.
let n = Number(prompt('შეიყვანე რიცხვი:'));
let isPrime=true;
for(let i=2; i<n;i++){
    isPrime=true
for (let j=2;j<i;j++){
    //  console.log(i%j==0 )
    
    if(i%j==0){
        isPrime=false
        break;

} 

}
// 
if(isPrime){
    console.log(i+'მარტივი')
}else{
    console.log('შერეული')
}
}

