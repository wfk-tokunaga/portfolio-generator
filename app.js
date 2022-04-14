console.log("Go T-Wolves!");

const profileDataArgs = process.argv.slice(2, process.argv.length);

console.log(profileDataArgs);

// profileDataArgs = "hi";

// console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    profileDataArr.forEach(arg => console.log(arg))
};

printProfileData(profileDataArgs);