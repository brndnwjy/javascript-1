const segitiga = (t = 5) => {
    if(Number.isInteger(t)){
        for(let i = t; i > 0; i--){
            let line = ""
            for(let j = 1; j <= i; j++){
                line += " "
                line += j
            }
            console.log(line)
        }
    } else {
        console.log("Pastikan input bertipe number")
    }
}

segitiga()