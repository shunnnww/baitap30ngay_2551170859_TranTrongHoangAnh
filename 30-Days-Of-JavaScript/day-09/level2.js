// ==============================================================================
// 30 Days of JavaScript - Day 09: Higher Order Functions (Level 2)
// ==============================================================================

{
  console.log('\n--- DAY 09: LEVEL 2 ---');

  // Danh sách sản phẩm mẫu theo đề bài
  const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];

  // Danh sách quốc gia mẫu (ưu tiên lấy toàn bộ danh sách tên từ countries_data nếu có)
  const allCountryNames = (typeof countries_data !== 'undefined' && Array.isArray(countries_data))
    ? countries_data.map((c) => c.name)
    : [
        'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Argentina', 'Armenia',
        'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados',
        'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina',
        'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Cambodia', 'Cameroon', 'Canada', 'Denmark',
        'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Iceland', 'Ireland', 'Japan', 'Kazakhstan',
        'Kenya', 'Kyrgyzstan', 'Norway', 'Pakistan', 'Poland', 'Russia', 'Spain', 'Sweden',
        'Tajikistan', 'Turkmenistan', 'United Kingdom', 'United States', 'Uzbekistan'
      ];

  // Câu 1: Tính tổng giá sản phẩm bằng cách nối chuỗi (chaining) từ 2 iterator trở lên
  // Lọc sản phẩm có giá hợp lệ là số -> Trích xuất giá trị price -> Tính tổng bằng reduce
  const totalPriceChaining = products
    .filter((item) => typeof item.price === 'number' && !isNaN(item.price))
    .map((item) => item.price)
    .reduce((acc, curr) => acc + curr, 0);

  console.log('Câu 1: Tổng giá sản phẩm bằng chaining (filter -> map -> reduce):', totalPriceChaining);

  // Câu 2: Tính tổng giá sản phẩm chỉ sử dụng duy nhất reduce
  const totalPriceOnlyReduce = products.reduce((acc, curr) => {
    const priceNum = typeof curr.price === 'number' && !isNaN(curr.price) ? curr.price : 0;
    return acc + priceNum;
  }, 0);

  console.log('Câu 2: Tổng giá sản phẩm chỉ dùng reduce:', totalPriceOnlyReduce);

  // Câu 3: Khai báo hàm categorizeCountries nhận vào pattern và trả về mảng quốc gia có chung mẫu đó
  // (ví dụ: 'land', 'ia', 'island', 'stan')
  function categorizeCountries(pattern, countryList = allCountryNames) {
    const lowerPattern = pattern.toLowerCase();
    return countryList.filter((country) => country.toLowerCase().includes(lowerPattern));
  }

  console.log('Câu 3: Các quốc gia chứa "land":', categorizeCountries('land'));
  console.log('Câu 3: Các quốc gia chứa "stan":', categorizeCountries('stan'));
  console.log('Câu 3: Các quốc gia chứa "ia":', categorizeCountries('ia').slice(0, 10), '... (lấy 10 nước tiêu biểu)');

  // Câu 4: Viết hàm trả về mảng các object chứa chữ cái bắt đầu và số lần xuất hiện của chữ cái đó
  function countStartingLetters(countryList = allCountryNames) {
    const letterCounts = countryList.reduce((acc, country) => {
      const firstLetter = country[0].toUpperCase();
      acc[firstLetter] = (acc[firstLetter] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(letterCounts)
      .sort()
      .map((letter) => ({ letter, count: letterCounts[letter] }));
  }

  console.log('Câu 4: Thống kê số lượng quốc gia theo chữ cái bắt đầu:', countStartingLetters());

  // Câu 5: Khai báo hàm getFirstTenCountries trả về 10 quốc gia đầu tiên bằng phương pháp lập trình hàm
  function getFirstTenCountries(countryList = allCountryNames) {
    return countryList.filter((_, index) => index < 10);
  }

  console.log('Câu 5: 10 quốc gia đầu tiên (dùng filter):', getFirstTenCountries());

  // Câu 6: Khai báo hàm getLastTenCountries trả về 10 quốc gia cuối cùng trong mảng
  function getLastTenCountries(countryList = allCountryNames) {
    return countryList.filter((_, index) => index >= countryList.length - 10);
  }

  console.log('Câu 6: 10 quốc gia cuối cùng (dùng filter):', getLastTenCountries());

  // Câu 7: Tìm chữ cái được dùng nhiều nhất làm chữ cái bắt đầu của tên quốc gia
  function mostFrequentInitialLetter(countryList = allCountryNames) {
    const letterStats = countStartingLetters(countryList);
    const mostFrequent = letterStats.reduce((max, current) => (current.count > max.count ? current : max));
    return mostFrequent;
  }

  const bestLetter = mostFrequentInitialLetter();
  console.log(`Câu 7: Chữ cái bắt đầu xuất hiện nhiều nhất là "${bestLetter.letter}" với ${bestLetter.count} quốc gia.`);
}
