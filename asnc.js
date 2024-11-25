async function course(){
    
   try{

    await userName();
    await courseList();

   } catch(error){
      console.log(`here is the ${error}`);
   }

}

course()



function userName(){
    console.log("enroll course");
    // reject("Error occurred in userName!");
}

function courseList(){
    console.log("Here are your lists");
    
}