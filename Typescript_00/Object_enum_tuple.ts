//Object , Array , Tuple , Enum 

const Person :{
         FirstName : string;
         Age : number; // semicolon at end 
         Adress : {
                  City : string;
         };
         skills : string[];
         
} =  {
         FirstName : "Lucky" , 
         Age : 23,
         Adress : {
                  City : "Bhubaneswar"
         },
         skills : ["c ++ " , "Java" , "Python" , "JavaScript"]
}

console.log(Person);

//! Tuple
const P : {
         name : string;
         age : number;
         skills : string[];
         product : [number , string];//fixed array of Two Types  // This Is the Tuple 
} = {
         name : "Raghav",
         age : 62,
         skills : ["c ++" , "Java" , "pythion"],
         product : [0 , "macBook M2"],
}

P.product[0] = 0; // Replace a nUmber with other value // valid
// P.product[1] = 1000 ; Invalid
P.product[1] = "MacBook Air M3"; 


enum role {"AUTHOR" , "CLIENT" , "USER" ,}

const PP : {
         name : string;
         age : number;
         skills : string[];
         product : [number , string];
         role : role;
} = {
         name : "sashank" ,
         age : 20,
         skills : ["c ++" , "java" , "Python" , "Name"], 
         product :[10 , "MacBook AIR M1"],
         role : role.AUTHOR , // we want this variable as dynamic 

}

if(PP.role == role.AUTHOR){
         console.log("AUthor Person");
}else if(PP.role === role.CLIENT){
         console.log("Client User Only");   
}else{
         console.log("User Only");  
}


