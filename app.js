//  Variables list
const args = process.argv.slice(2)
const month = args[0]
const day = args[1]
const symbol = {
  capricorn: '"Goat"',
  aquarius: '"Water Bearer"',
  pisces: '"Fishes"',
  aries: '"Ram"',
  taurus:'"Bull"',
  gemini:'"Twins"',
  cancer:'"Crab"',
  leo:'"Lion"',
  libra: '"Scales"',
  scorpio: '"Scorpion"',
  sagittarius: '"Archer"'
}

// If else array detailed the specific date ranges for "each sign" 
// Errors out for out anything out the standard date range
if(month > 12 || day > 31) {
    console.log(`Thaaat's not right, please enter a valid birthdate. Format: MM DD`);

  }  else if((month == 01 && day <= 20) || (month == 12 && day >=22)) {
    console.log(`Your sign is "Capricorn" and your symbol is the ${symbol.capricorn}`);
  } else if ((month == 01 && day >= 21) || (month == 02 && day <= 18)) {
    console.log(`Your sign is "Aquarius" and your symbol is the ${symbol.aquarius}`);
  } else if((month == 02 && day >= 19) || (month == 03 && day <= 20)) {
    console.log(`Your sign is "Pisces" and your symbol is the ${symbol.pisces}`);
  } else if((month == 03 && day >= 21) || (month == 04 && day <= 20)) {
    console.log(`Your sign is "Aries" and your symbol is the ${symbol.aries}`);
  } else if((month == 04 && day >= 21) || (month == 05 && day <= 20)) {
    console.log(`Your sign is "Taurus" and your symbol is the ${symbol.taurus}`);
  } else if((month == 05 && day >= 21) || (month == 06 && day <= 20)) {
    console.log(`Your sign is "Gemini" and your symbol is the ${symbol.gemini}`);
  } else if((month == 06 && day >= 22) || (month == 07 && day <= 22)) {
    console.log(`Your sign is "Cancer" and your symbol is the ${symbol.cancer}`);
  } else if((month == 07 && day >= 23) || (month == 08 && day <= 23)) {
    console.log(`Your sign is "Leo" and your symbol is the ${symbol.leo}`);
  } else if((month == 08 && day >= 24) || (month == 09 && day <= 23)) {
    console.log(`Your sign is "Virgo" and your symbol is the ${symbol.virgo}`);
  } else if((month == 09 && day >= 24) || (month == 10 && day <= 23)) {
    console.log(`Your sign is "Libra" and your symbol is the ${symbol.libra}`);
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    console.log(`Your sign is "Scorpio" and your symbol is the ${symbol.scorpio}`);
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    console.log(`Your sign is "Sagittarius" and your symbol is the ${symbol.sagittarius}`);
  }  else {

    // Errors out if you enter nonsense data 
    console.log(`What the... no try again! Just numbers! Solo numeros! Seul nombres! Format: MM DD`)
  
  }
