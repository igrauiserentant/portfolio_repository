const cheapWisdom = name => {
    let rngOne = Math.floor(Math.random() * 10);
    let rngTwo = Math.floor(Math.random() * 10);
    let rngThree = Math.floor(Math.random() * 10);
    let rngFour = Math.floor(Math.random() * 10);
    const firstPart = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const nouns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const infinitives = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const lastPart = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let message = (`${firstPart[rngOne]} ${nouns[rngTwo]} ${infinitives[rngThree]} ${lastPart[rngFour]}, ${name}...`);
    const previousMessages = [];
    previousMessages.push(message);
    console.log(message);
    return message;
}
cheapWisdom('Inigo');