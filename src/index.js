module.exports = function check(str, bracketsConfig) {
  let bool = true;
  let run = str.length;
  const arr = [];
  const res = bracketsConfig.join(',').split(',').join('');

  for (let i = 0; i < res.length; i += 2) {
    arr.push(res.slice(i, i + 2));
  };
  
  while (bool) {
    run = str.length;

    for (let i = 0; i < arr.length; i++) {
      str = str.replace(arr[i],'');
    };

    if (run === str.length) {
      bool = false;
    };
  };
  
  return run === 0;
};
