// STDIN

function inputCheck() {
  console.log('Welcome to Holberton School, what is your name?');
  process.stdin.on('data', (data) => {
    const fetchText = data;
    process.stdout.write(`Your name is: ${fetchText}`);
    console.log('This important software is now closing');
    process.stdin.destroy();
  });
}

inputCheck();
