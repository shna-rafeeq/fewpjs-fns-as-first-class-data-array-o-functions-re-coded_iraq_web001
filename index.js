function wakeDog(dogName, dogBreed) {
  console.log(`Wake ${dogName} the ${dogBreed}`);
  let result = `Wake ${dogName} the ${dogBreed}`;
  return result;
}

function leashDog(dogName, dogBreed) {
  console.log(`Leash ${dogName} the ${dogBreed}`);
  let result = `Leash ${dogName} the ${dogBreed}`;
  return result;
}

function walkToPark(dogName, dogBreed) {
 console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
  let result = `Walk to the park with ${dogName} the ${dogBreed}`;
  return result;
}

function throwFrisbee(dogName, dogBreed) {
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
   let result = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  return result;
}

function walkHome(dogName, dogBreed) {
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  let result = `Walk home with ${dogName} the ${dogBreed}`;
  return result;
}

function unleashDog(dogName, dogBreed) {
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  let result = `Unleash ${dogName} the ${dogBreed}`;
  return result;
}


const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];



function exerciseDog(dogName,dogBreed){
  let newArr = [];
  for(let i = 0; i < routine.length; i++){
    newArr.push(routine[i](dogName,dogBreed)); 
  }
  return newArr;
}

exerciseDog('Byron','Poodle',routine);

