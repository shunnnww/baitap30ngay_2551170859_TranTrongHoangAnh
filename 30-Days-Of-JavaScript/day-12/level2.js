// ==========================================
// 30 Days of JavaScript - Day 12: Level 2
// Regular Expressions (Biểu thức chính quy - Regex)
// ==========================================

// Câu 1: Viết hàm tenMostFrequentWords lấy ra các từ xuất hiện nhiều nhất trong đoạn văn bản
console.log('=== CÂU 1: Tìm các từ xuất hiện nhiều nhất (tenMostFrequentWords) ===');

/**
 * Hàm tìm các từ có tần suất xuất hiện cao nhất trong đoạn văn bản
 * @param {string} text - Đoạn văn bản đầu vào
 * @param {number} [limit=10] - Số lượng từ tối đa cần lấy (mặc định là 10)
 * @returns {Array<{word: string, count: number}>} - Mảng các đối tượng chứa từ và số lần xuất hiện
 */
function tenMostFrequentWords(text, limit = 10) {
  if (!text || typeof text !== 'string') return [];

  // Sử dụng regex /\b[A-Za-z]+\b/g để bóc tách tất cả các từ trong văn bản
  const words = text.match(/\b[A-Za-z]+\b/g);
  if (!words) return [];

  // Đếm tần suất xuất hiện của từng từ (chuẩn hóa về chữ thường để không phân biệt hoa thường)
  const wordCounts = {};
  for (const word of words) {
    const normalizedWord = word.toLowerCase();
    wordCounts[normalizedWord] = (wordCounts[normalizedWord] || 0) + 1;
  }

  // Chuyển đối tượng tần suất thành mảng các object [{ word, count }, ...]
  const result = Object.keys(wordCounts)
    .map(word => ({ word: word, count: wordCounts[word] }))
    .sort((a, b) => b.count - a.count); // Sắp xếp giảm dần theo số lần xuất hiện

  // Trả về số lượng phần tử theo tham số limit (nếu limit được truyền vào)
  return typeof limit === 'number' && limit > 0 ? result.slice(0, limit) : result;
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log('--- 10 từ xuất hiện nhiều nhất (mặc định limit = 10): ---');
console.log(tenMostFrequentWords(paragraph));

console.log('\n--- 5 từ xuất hiện nhiều nhất (truyền limit = 5): ---');
console.log(tenMostFrequentWords(paragraph, 5));

console.log('\n--- Giữ nguyên chữ hoa/thường (tùy chọn so sánh): ---');
function tenMostFrequentWordsCaseSensitive(text, limit = 10) {
  const words = text.match(/\b[A-Za-z]+\b/g) || [];
  const counts = {};
  for (const w of words) counts[w] = (counts[w] || 0) + 1;
  return Object.keys(counts)
    .map(w => ({ word: w, count: counts[w] }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}
console.log(tenMostFrequentWordsCaseSensitive(paragraph, 5));
