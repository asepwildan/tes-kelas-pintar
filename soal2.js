// soal 2
const words =
    "Berikut adalah kisah sang gajah. Sang gajah memiliki teman serigala bernama DoeSang. Gajah sering dibela oleh serigala ketika harimau mendekati gajah.";

function findAnimal(words) {
    const word = words.split(" ");
    console.log(word);
    let result = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] == "sang" || (word[i] == "Sang") & (word[i + 1] == "gajah")) {
            result.push(`${word[i]} ${word[i + 1]} `);
        }

        if (word[i] == "serigala") {
            result.push(word[i]);
        }
        if (word[i] == "harimau") {
            result.push(word[i]);
        }
    }

    return result;
}

console.log(findAnimal(words));
