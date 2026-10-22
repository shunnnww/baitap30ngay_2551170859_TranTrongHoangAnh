// ==============================================================================
// 30 Days of JavaScript - Day 10: Sets and Maps (Level 3)
// ==============================================================================

{
  console.log('\n--- DAY 10: LEVEL 3 ---');

  // Lấy dữ liệu countries_data (được nạp từ countries_data.js)
  const countries = (typeof countries_data !== 'undefined' && Array.isArray(countries_data))
    ? countries_data
    : [];

  // Câu 1: Có bao nhiêu ngôn ngữ độc nhất trong file dữ liệu các quốc gia? (Dùng Set)
  // Gom tất cả ngôn ngữ của tất cả các quốc gia vào một mảng phẳng
  const allLanguages = [];
  countries.forEach((country) => {
    if (Array.isArray(country.languages)) {
      country.languages.forEach((lang) => allLanguages.push(lang));
    }
  });

  // Sử dụng Set để lọc các ngôn ngữ duy nhất không trùng lặp
  const uniqueLanguagesSet = new Set(allLanguages);
  console.log(`Câu 1: Tổng số ngôn ngữ độc nhất trong danh sách các quốc gia là: ${uniqueLanguagesSet.size} ngôn ngữ.`);

  // Câu 2: Tìm top N ngôn ngữ được nói nhiều nhất bằng cách kết hợp Map và Set
  function mostSpokenLanguages(countryList, topN = 10) {
    // Bước 1: Sử dụng Map để đếm số lượng quốc gia sử dụng từng ngôn ngữ
    const languageFrequencyMap = new Map();

    countryList.forEach((country) => {
      if (Array.isArray(country.languages)) {
        // Dùng Set để đảm bảo mỗi quốc gia chỉ tính 1 ngôn ngữ tối đa 1 lần
        const countryLangSet = new Set(country.languages);
        countryLangSet.forEach((lang) => {
          languageFrequencyMap.set(lang, (languageFrequencyMap.get(lang) || 0) + 1);
        });
      }
    });

    // Bước 2: Chuyển đổi các cặp [key, value] từ Map sang mảng và sắp xếp giảm dần theo số lượng
    const sortedLanguages = [...languageFrequencyMap.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, topN);

    // Bước 3: Định dạng kết quả trả về theo đúng mẫu của giáo trình: [{ [tên_ngôn_ngữ]: số_lượng }]
    const formattedResult = sortedLanguages.map(([lang, count]) => ({ [lang]: count }));

    return formattedResult;
  }

  console.log('\nCâu 2: Top 10 ngôn ngữ phổ biến nhất:');
  console.log(mostSpokenLanguages(countries, 10));

  console.log('\nCâu 2: Top 3 ngôn ngữ phổ biến nhất:');
  console.log(mostSpokenLanguages(countries, 3));
}
