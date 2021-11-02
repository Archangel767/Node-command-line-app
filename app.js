// console.log(process.argv)

const args = process.argv.slice(2)

const month = args[0]
const day = args[1]

 if((month == 01 && day <= 20) || (month == 12 && day >=22)) {
    console.log('capricorn');
  } else if ((month == 01 && day >= 21) || (month == 02 && day <= 18)) {
    console.log('aquarius');
  } else if((month == 02 && day >= 19) || (month == 03 && day <= 20)) {
    console.log('pisces');
  } else if((month == 03 && day >= 21) || (month == 04 && day <= 20)) {
    console.log('aries');
  } else if((month == 04 && day >= 21) || (month == 05 && day <= 20)) {
    console.log('taurus');
  } else if((month == 05 && day >= 21) || (month == 06 && day <= 20)) {
    console.log('gemini');
  } else if((month == 06 && day >= 22) || (month == 07 && day <= 22)) {
    console.log('cancer');
  } else if((month == 07 && day >= 23) || (month == 08 && day <= 23)) {
    console.log('leo');
  } else if((month == 08 && day >= 24) || (month == 09 && day <= 23)) {
    console.log('virgo');
  } else if((month == 09 && day >= 24) || (month == 10 && day <= 23)) {
    console.log('libra');
  } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
    console.log('scorpio');
  } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
    console.log('sagittarius');
  }
