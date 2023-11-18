const os = require('os');
const user = os.userInfo();
// console.log(user);

const  currentUser = {
    name:os.type(),
    release:os.release(),
    freememory:os.freemem(),
    totalMemory: os.totalmem()
}
console.log(currentUser);