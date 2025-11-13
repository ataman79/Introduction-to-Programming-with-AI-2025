function printPersonInfo({name, address: {town, country}}) {
    return `I am ${name} from ${town}, ${country}.`;
}



console.log(printPersonInfo({name: "Maria", address: {town: "Plovdiv", country: "Bulgaria"}}));