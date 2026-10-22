/**
 * 30 Days of JavaScript - Day 18: Promises, Async/Await & Fetch API
 * Level 3
 */

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

console.log('%c=== DAY 18 - LEVEL 3 ===', 'color: #e67e22; font-weight: bold; font-size: 14px;')

// ==========================================
// Dữ liệu dự phòng chuẩn cho mèo và các quốc gia
// ==========================================
const fallbackCats = [
  { name: 'Abyssinian', weight: { metric: '3 - 5' } },
  { name: 'Aegean', weight: { metric: '4 - 5' } },
  { name: 'American Bobtail', weight: { metric: '3 - 7' } },
  { name: 'American Curl', weight: { metric: '2 - 5' } },
  { name: 'American Shorthair', weight: { metric: '4 - 7' } },
  { name: 'American Wirehair', weight: { metric: '4 - 7' } },
  { name: 'Balinese', weight: { metric: '2 - 5' } },
  { name: 'Bengal', weight: { metric: '3 - 7' } },
  { name: 'Birman', weight: { metric: '3 - 7' } },
  { name: 'Bombay', weight: { metric: '4 - 5' } },
  { name: 'British Shorthair', weight: { metric: '5 - 9' } },
  { name: 'Maine Coon', weight: { metric: '5 - 11' } },
  { name: 'Persian', weight: { metric: '3 - 6' } },
  { name: 'Ragdoll', weight: { metric: '4 - 9' } },
  { name: 'Siamese', weight: { metric: '3 - 5' } },
  { name: 'Sphynx', weight: { metric: '3 - 6' } }
]

const fallbackCountries = [
  { name: 'Russia', area: 17098242, languages: [{ name: 'Russian' }] },
  { name: 'Canada', area: 9984670, languages: [{ name: 'English' }, { name: 'French' }] },
  { name: 'China', area: 9706961, languages: [{ name: 'Chinese' }] },
  { name: 'United States of America', area: 9372610, languages: [{ name: 'English' }] },
  { name: 'Brazil', area: 8515767, languages: [{ name: 'Portuguese' }] },
  { name: 'Australia', area: 7692024, languages: [{ name: 'English' }] },
  { name: 'India', area: 3287263, languages: [{ name: 'Hindi' }, { name: 'English' }] },
  { name: 'Argentina', area: 2780400, languages: [{ name: 'Spanish' }] },
  { name: 'Kazakhstan', area: 2724900, languages: [{ name: 'Kazakh' }, { name: 'Russian' }] },
  { name: 'Algeria', area: 2381741, languages: [{ name: 'Arabic' }] },
  { name: 'Democratic Republic of the Congo', area: 2344858, languages: [{ name: 'French' }, { name: 'Lingala' }] },
  { name: 'Greenland', area: 2166086, languages: [{ name: 'Kalaallisut' }] },
  { name: 'Saudi Arabia', area: 2149690, languages: [{ name: 'Arabic' }] },
  { name: 'Mexico', area: 1964375, languages: [{ name: 'Spanish' }] },
  { name: 'Indonesia', area: 1904569, languages: [{ name: 'Indonesian' }] },
  { name: 'Sudan', area: 1886068, languages: [{ name: 'Arabic' }, { name: 'English' }] },
  { name: 'Libya', area: 1759540, languages: [{ name: 'Arabic' }] },
  { name: 'Iran', area: 1648195, languages: [{ name: 'Persian (Farsi)' }] },
  { name: 'Mongolia', area: 1564110, languages: [{ name: 'Mongolian' }] },
  { name: 'Vietnam', area: 331212, languages: [{ name: 'Vietnamese' }] },
  { name: 'Japan', area: 377975, languages: [{ name: 'Japanese' }] },
  { name: 'Germany', area: 357114, languages: [{ name: 'German' }] },
  { name: 'France', area: 551695, languages: [{ name: 'French' }] }
]

// ==========================================
// Câu 1: Đọc Cats API và tính trọng lượng trung bình loài mèo theo metric (kg)
// ==========================================
async function calculateCatAverageWeight() {
  console.log('\n--- CÂU 1: TÍNH CÂN NẶNG TRUNG BÌNH CỦA LOÀI MÈO (kg) ---')
  let catsData = []
  try {
    const res = await fetch(catsAPI)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (Array.isArray(data) && data.length > 0) {
      catsData = data
    } else {
      throw new Error('Dữ liệu API không phải mảng')
    }
  } catch (err) {
    console.warn(`[Cats API] Không thể lấy trực tiếp (${err.message}). Dùng fallback cats.`)
    catsData = fallbackCats
  }

  let totalSum = 0
  let count = 0

  catsData.forEach(cat => {
    if (cat.weight && cat.weight.metric) {
      const parts = cat.weight.metric.split('-').map(s => parseFloat(s.trim()))
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        const breedAvg = (parts[0] + parts[1]) / 2
        totalSum += breedAvg
        count++
      }
    }
  })

  const average = totalSum / count
  console.log(`Số giống mèo được tính toán: ${count}`)
  console.log(`=> Trọng lượng trung bình của loài mèo: ${average.toFixed(2)} kg`)
}

// ==========================================
// Câu 2: Đọc Countries API và tìm 10 quốc gia có diện tích lớn nhất thế giới
// ==========================================
async function getTop10LargestCountries(countries) {
  console.log('\n--- CÂU 2: 10 QUỐC GIA CÓ DIỆN TÍCH LỚN NHẤT THẾ GIỚI ---')
  
  // Lọc các quốc gia có diện tích hợp lệ và sắp xếp giảm dần theo diện tích
  const sortedByArea = countries
    .filter(c => typeof c.area === 'number' && !isNaN(c.area))
    .sort((a, b) => b.area - a.area)
    .slice(0, 10)

  const top10 = sortedByArea.map((country, index) => ({
    rank: index + 1,
    country: country.name,
    area_km2: country.area.toLocaleString('vi-VN')
  }))

  console.table(top10)
}

// ==========================================
// Câu 3: Đọc Countries API và đếm tổng số ngôn ngữ chính thức trên thế giới
// ==========================================
async function countTotalOfficialLanguages(countries) {
  console.log('\n--- CÂU 3: TỔNG SỐ NGÔN NGỮ CHÍNH THỨC TRÊN THẾ GIỚI ---')
  
  const languageSet = new Set()

  countries.forEach(country => {
    if (Array.isArray(country.languages)) {
      country.languages.forEach(lang => {
        // Cấu trúc RestCountries v2: lang.name; v3: các cặp key-value
        const langName = typeof lang === 'object' && lang !== null ? lang.name : lang
        if (langName) {
          languageSet.add(langName)
        }
      })
    }
  })

  console.log(`Tổng số ngôn ngữ chính thức độc nhất tìm thấy: ${languageSet.size}`)
  console.log('Danh sách các ngôn ngữ:', Array.from(languageSet))
}

// ==========================================
// Hàm điều phối chạy các tác vụ Level 3
// ==========================================
async function runLevel3() {
  await calculateCatAverageWeight()

  let countriesData = []
  try {
    const res = await fetch(countriesAPI)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const data = await res.json()
    if (Array.isArray(data) && data.length > 0) {
      countriesData = data
    } else {
      throw new Error('Dữ liệu API không phải mảng')
    }
  } catch (err) {
    console.warn(`[Countries API] Không thể lấy trực tiếp (${err.message}). Dùng fallback countries.`)
    countriesData = fallbackCountries
  }

  await getTop10LargestCountries(countriesData)
  await countTotalOfficialLanguages(countriesData)
}

runLevel3()
