console.log(processArrayCommands([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]));

function processArrayCommands(input) {
    //parse initial array
    let arr = input.shift().split(' ').map(Number); 
    //process commands
    for (let i = 0; i < input.length; i++) {
        const [command, ...args] = input[i].split(' ');
        switch (command) {
            case 'Add': 
                arr.push(Number(args[0]));
                break;
            case 'Remove': 
                arr = arr.filter(num => num !== Number(args[0]));   
                break;
            case 'RemoveAt': 
                arr.splice(Number(args[0]), 1);
                break;
            case 'Insert': 
                arr.splice(Number(args[1]), 0, Number(args[0]));
                break;
        }
    }
    return arr.join(' ');
}