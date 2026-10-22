// ==============================================================================
// 30 Days of JavaScript - Day 09: Higher Order Functions (Level 3)
// ==============================================================================

{
  console.log('\n--- DAY 09: LEVEL 3 ---');

  // Lấy dữ liệu countries_data (được nạp từ countries_data.js)
  const countries = (typeof countries_data !== 'undefined' && Array.isArray(countries_data))
    ? countries_data
    : [];

  // Câu 1: Sắp xếp các quốc gia theo name, theo capital, theo population
  // Lưu ý: Sử dụng spread operator [...] để tránh thay đổi mảng gốc ban đầu

  // Sắp xếp theo tên quốc gia (A -> Z)
  const sortedByName = [...countries].sort((a, b) => a.name.localeCompare(b.name));
  console.log('Câu 1.1: 5 quốc gia đầu tiên xếp theo Tên (A-Z):', sortedByName.slice(0, 5).map((c) => c.name));

  // Sắp xếp theo thủ đô (A -> Z, xử lý an toàn nếu quốc gia không có thủ đô)
  const sortedByCapital = [...countries].sort((a, b) => {
    const capA = a.capital || '';
    const capB = b.capital || '';
    return capA.localeCompare(capB);
  });
  console.log('Câu 1.2: 5 quốc gia đầu tiên xếp theo Thủ đô (A-Z):', sortedByCapital.slice(0, 5).map((c) => `${c.name} (${c.capital})`));

  // Sắp xếp theo dân số giảm dần (Đông dân nhất -> Ít dân nhất)
  const sortedByPopulation = [...countries].sort((a, b) => b.population - a.population);
  console.log('Câu 1.3: 5 quốc gia đông dân nhất:', sortedByPopulation.slice(0, 5).map((c) => `${c.name}: ${c.population.toLocaleString()} người`));

  // Câu 2: Tìm top N ngôn ngữ được nói nhiều nhất (mostSpokenLanguages)
  function mostSpokenLanguages(countryList, topN = 10) {
    // Đếm số quốc gia sử dụng mỗi ngôn ngữ
    const langCounts = {};
    countryList.forEach((country) => {
      if (Array.isArray(country.languages)) {
        country.languages.forEach((lang) => {
          langCounts[lang] = (langCounts[lang] || 0) + 1;
        });
      }
    });

    // Chuyển sang dạng mảng object và sắp xếp giảm dần theo count
    const sortedLangs = Object.keys(langCounts)
      .map((lang) => ({ country: lang, count: langCounts[lang] }))
      .sort((a, b) => b.count - a.count);

    return sortedLangs.slice(0, topN);
  }

  console.log('Câu 2: Top 10 ngôn ngữ được nói nhiều nhất:');
  console.log(mostSpokenLanguages(countries, 10));
  console.log('Câu 2: Top 3 ngôn ngữ được nói nhiều nhất:');
  console.log(mostSpokenLanguages(countries, 3));

  // Câu 3: Tìm top N quốc gia đông dân nhất (mostPopulatedCountries)
  function mostPopulatedCountries(countryList, topN = 10) {
    return [...countryList]
      .sort((a, b) => b.population - a.population)
      .slice(0, topN)
      .map((item) => ({ country: item.name, population: item.population }));
  }

  console.log('Câu 3: Top 10 quốc gia đông dân nhất:');
  console.log(mostPopulatedCountries(countries, 10));
  console.log('Câu 3: Top 3 quốc gia đông dân nhất:');
  console.log(mostPopulatedCountries(countries, 3));

  // Câu 4: Xây dựng đối tượng thống kê toán học (statistics object)
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

  const statistics = {
    data: ages,

    count() {
      return this.data.length;
    },

    sum() {
      return this.data.reduce((acc, curr) => acc + curr, 0);
    },

    min() {
      return Math.min(...this.data);
    },

    max() {
      return Math.max(...this.data);
    },

    range() {
      return this.max() - this.min();
    },

    mean() {
      return Math.round(this.sum() / this.count());
    },

    median() {
      const sorted = [...this.data].sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
      }
      return sorted[mid];
    },

    mode() {
      const freq = {};
      this.data.forEach((val) => {
        freq[val] = (freq[val] || 0) + 1;
      });

      let maxCount = 0;
      let modeVal = null;
      for (const val in freq) {
        if (freq[val] > maxCount) {
          maxCount = freq[val];
          modeVal = Number(val);
        }
      }
      return { mode: modeVal, count: maxCount };
    },

    var() {
      const m = this.sum() / this.count(); // giá trị trung bình chính xác (29.76)
      const variance = this.data.reduce((acc, curr) => acc + (curr - m) ** 2, 0) / this.count();
      return Math.round(variance * 10) / 10; // 17.5
    },

    std() {
      const m = this.sum() / this.count();
      const variance = this.data.reduce((acc, curr) => acc + (curr - m) ** 2, 0) / this.count();
      return Math.round(Math.sqrt(variance) * 10) / 10; // 4.2
    },

    freqDist() {
      const total = this.count();
      const freq = {};
      this.data.forEach((val) => {
        freq[val] = (freq[val] || 0) + 1;
      });

      // Sắp xếp theo tỷ lệ phần trăm / số lần xuất hiện giảm dần
      return Object.keys(freq)
        .map((key) => {
          const count = freq[key];
          const percentage = (count / total) * 100;
          return `(${percentage.toFixed(1)}, ${key})`;
        })
        .sort((a, b) => {
          const pctA = parseFloat(a.slice(1));
          const pctB = parseFloat(b.slice(1));
          return pctB - pctA;
        });
    },

    describe() {
      const modeResult = this.mode();
      return [
        `Count: ${this.count()}`,
        `Sum:  ${this.sum()}`,
        `Min:  ${this.min()}`,
        `Max:  ${this.max()}`,
        `Range:  ${this.range()}`,
        `Mean:  ${this.mean()}`,
        `Median:  ${this.median()}`,
        `Mode:  (${modeResult.mode}, ${modeResult.count})`,
        `Variance:  ${this.var()}`,
        `Standard Deviation:  ${this.std()}`,
        `Frequency Distribution: [${this.freqDist().join(', ')}]`
      ].join('\n');
    }
  };

  console.log('Câu 4: Kiểm tra các phương thức của statistics:');
  console.log('Count:', statistics.count());
  console.log('Sum: ', statistics.sum());
  console.log('Min: ', statistics.min());
  console.log('Max: ', statistics.max());
  console.log('Range: ', statistics.range());
  console.log('Mean: ', statistics.mean());
  console.log('Median: ', statistics.median());
  console.log('Mode: ', statistics.mode());
  console.log('Variance: ', statistics.var());
  console.log('Standard Deviation: ', statistics.std());
  console.log('Frequency Distribution: ', statistics.freqDist());
  console.log('\n--- BẢNG THỐNG KÊ CHI TIẾT (statistics.describe()) ---');
  console.log(statistics.describe());
}
