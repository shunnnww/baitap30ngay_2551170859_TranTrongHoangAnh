// ==========================================
// 30 Days of JavaScript - Day 12: Level 3
// Regular Expressions (Biểu thức chính quy - Regex)
// ==========================================

// Câu 1: Viết hàm cleanText làm sạch văn bản bằng cách loại bỏ các ký tự đặc biệt lạ
console.log('=== CÂU 1: Làm sạch văn bản bằng biểu thức chính quy (cleanText) ===');

/**
 * Hàm làm sạch văn bản: loại bỏ các ký tự đặc biệt (%$@&#;!?,.) và chuẩn hóa khoảng trắng
 * @param {string} text - Đoạn văn bản chứa các ký tự đặc biệt
 * @returns {string} - Đoạn văn bản sạch sẽ, dễ đọc
 */
function cleanText(text) {
  if (!text || typeof text !== 'string') return '';
  // Loại bỏ các ký tự đặc biệt gây nhiễu: % $ @ & # ; ! ?
  // Giữ lại dấu chấm và dấu phẩy ở vị trí thích hợp hoặc chuẩn hóa các khoảng trắng thừa
  return text
    .replace(/[%$@&#;!?]/g, '')     // Xóa các ký tự đặc biệt rác
    .replace(/\s+/g, ' ')           // Chuẩn hóa nhiều khoảng trắng liên tiếp thành 1 khoảng trắng
    .trim();                        // Cắt khoảng trắng thừa ở 2 đầu
}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

const cleanedText = cleanText(sentence);
console.log('Văn bản gốc ban đầu:');
console.log(sentence);
console.log('\nVăn bản sau khi làm sạch (cleanedText):');
console.log(cleanedText);


// Câu 2: Viết hàm mostFrequentWords đếm và tìm các từ xuất hiện nhiều nhất sau khi làm sạch văn bản
console.log('\n=== CÂU 2: Tìm 3 từ xuất hiện nhiều nhất sau khi làm sạch (mostFrequentWords) ===');

/**
 * Hàm đếm và trả về danh sách các từ có tần suất xuất hiện cao nhất
 * @param {string} text - Văn bản đã được làm sạch
 * @param {number} [limit=3] - Số lượng từ cần lấy (mặc định là 3)
 * @returns {Array<{word: string, count: number}>} - Mảng các đối tượng chứa từ và tần suất
 */
function mostFrequentWords(text, limit = 3) {
  if (!text || typeof text !== 'string') return [];

  // Trích xuất toàn bộ các từ chỉ gồm chữ cái
  const words = text.match(/\b[A-Za-z]+\b/g);
  if (!words) return [];

  // Đếm tần suất xuất hiện của từng từ
  const wordCounts = {};
  for (const word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }

  // Chuyển sang mảng và sắp xếp giảm dần theo count
  return Object.keys(wordCounts)
    .map(word => ({ word: word, count: wordCounts[word] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

// Kết quả hiển thị đúng theo định dạng mong đợi của bài tập
const topThreeWords = mostFrequentWords(cleanedText, 3);
console.log('Top 3 từ xuất hiện nhiều nhất (giữ nguyên case gốc như bài tập):');
console.log(topThreeWords);

// Phiên bản không phân biệt hoa thường (case-insensitive)
function mostFrequentWordsNormalized(text, limit = 3) {
  const words = text.toLowerCase().match(/\b[A-Za-z]+\b/g) || [];
  const wordCounts = {};
  for (const word of words) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }
  return Object.keys(wordCounts)
    .map(word => ({ word: word, count: wordCounts[word] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

console.log('\nTop 3 từ xuất hiện nhiều nhất (chuẩn hóa chữ thường case-insensitive):');
console.log(mostFrequentWordsNormalized(cleanedText, 3));
