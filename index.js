const mylog = require('caillet-my-log');
const Mymulti = require('caillet-my-multi');

if (process.argv[2] && process.argv[3]) {
  if (process.argv[2].length!=0) {
    const tutu = process.argv[2].replace(/[[\]]/g,'');
    if (tutu!=0) {
      const multiplica = tutu.split(',');
      console.log('toto');
      for (var i = multiplica.length - 1; i >= 0; i--) {
        const result = new Mymulti(multiplica[i],process.argv[3]);
        console.log(result.run());
        console.log(mylog());
      }
    }
  } 
}else{
	return new Error('[error]: multi <number> <number>');
}

