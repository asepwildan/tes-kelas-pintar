function passValidation(pass) {
    if (pass.length >= 8 && pass.length <= 32) {
        if (pass.substring(0, 1).match("\\d")) {
            return "chareacter pertama tidak  boleh angka";
        } else if (pass.match(/[\\\[\]\/\(\)\+\*\?`!@#$%\^&_=-]/g).length < 2) {
            return "Harus memiliki 2 atau lebih simbol";
        } else if (pass.match(/[0-9]/g).length < 0) {
            return "need number";
        } else if (pass.match(/[A-Z]/g).length < 0) {
            return "harus memiliki huruf kapital";
        } else if (pass.match(/[a-z]/g).length < 0) {
            return "harus memiliki huruf kecil";
        } else {
            let cekNumber = pass.split("");
            for (let i = 0; i < cekNumber.length; i++) {
                if (
                    /[0-9]/.test(pass[i]) &&
                    /[0-9]/.test(pass[i + 1]) &&
                    /[0-9]/.test(pass[i + 2])
                ) {
                    return "Tidak boleh memiliki 3 angka berurutan";
                }
            }
        }
    }

    return "kata sandi valid";
}

console.log(passValidation("Ffqwe#s45%ss1D"));
