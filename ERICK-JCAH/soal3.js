let koinList = {
    coinA: 25,
    coinB: 10,
    coinC: 5,
    coinD: 1
};
let result = {
    coinA: 0,
    coinB: 0,
    coinC: 0,
    coinD: 0
};


function cekKoin(koin) {
    let change = koin;
    
    while (change >= koinList.coinD) {
        for (let key in koinList) {
            if (change >= koinList[key]) {
                change = change - koinList[key];
                result[key]++;
                break;
            }
        }
    }
    return result;
}

console.log(koinList)
console.log(cekKoin(49));