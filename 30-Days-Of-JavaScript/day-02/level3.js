// Câu 1: Đếm số lần từ 'love' xuất hiện trong câu
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(loveSentence.match(/love/gi).length);

// Câu 2: Đếm số lần từ 'because' xuất hiện trong câu
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(becauseSentence.match(/because/gi).length);

// Câu 3: Làm sạch đoạn văn bản và tìm từ xuất hiện nhiều nhất
const messSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanSentence = messSentence.replace(/[%$@&#;!?.,]/g, '');
let wordsList = cleanSentence.split(' ');
let wordCounts = {};
let mostFrequentWord = '';
let maxCount = 0;

for (let i = 0; i < wordsList.length; i++) {
    let word = wordsList[i];
    if (word) {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
        if (wordCounts[word] > maxCount) {
            maxCount = wordCounts[word];
            mostFrequentWord = word;
        }
    }
}
console.log(mostFrequentWord);

// Câu 4: Tính tổng thu nhập hàng năm
let incomeText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numbers = incomeText.match(/\d+/g).map(Number);
let totalAnnualIncome = (numbers[0] * 12) + numbers[1] + (numbers[2] * 12);
console.log(totalAnnualIncome);
