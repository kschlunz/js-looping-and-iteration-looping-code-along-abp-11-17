function printBadges(names){

  for(let i = 0; i < names.length; i++){

    console.log(`Welcome ${names[i]}! You are employee #${i+1}.` )
  }

  return names;
}


function tailsNeverFails () {
  let tails = 0;

  while (Math.random() >= 0.5) {
    tails++;
  }

  return `You got ${tails} tails in a row!`;
<<<<<<< HEAD
}
=======
}
>>>>>>> 9af7f986b3cb77d2ae86bc1170fa6d14aa8c4290
