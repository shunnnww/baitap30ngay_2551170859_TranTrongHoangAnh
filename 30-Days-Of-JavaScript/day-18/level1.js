/**
 * 30 Days of JavaScript - Day 18: Promises, Async/Await & Fetch API
 * Level 1
 */

const countriesAPI = 'https://restcountries.com/v2/all'

console.log('%c=== DAY 18 - LEVEL 1 ===', 'color: #3498db; font-weight: bold; font-size: 14px;')

// Dữ liệu dự phòng (Fallback Data) mô phỏng chính xác cấu trúc API RestCountries v2
// Phòng trường hợp API bên thứ ba bị giới hạn truy cập, đổi chính sách hoặc mất kết nối mạng
const fallbackCountries = [
  {
    name: 'Vietnam',
    capital: 'Hanoi',
    languages: [{ name: 'Vietnamese' }],
    population: 98168833,
    area: 331212
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    languages: [{ name: 'Japanese' }],
    population: 125836021,
    area: 377975
  },
  {
    name: 'United States of America',
    capital: 'Washington, D.C.',
    languages: [{ name: 'English' }],
    population: 332915073,
    area: 9372610
  },
  {
    name: 'France',
    capital: 'Paris',
    languages: [{ name: 'French' }],
    population: 67391582,
    area: 551695
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    languages: [{ name: 'German' }],
    population: 83240525,
    area: 357114
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    languages: [{ name: 'German' }, { name: 'French' }, { name: 'Italian' }, { name: 'Romansh' }],
    population: 8654622,
    area: 41284
  },
  {
    name: 'Russia',
    capital: 'Moscow',
    languages: [{ name: 'Russian' }],
    population: 144104080,
    area: 17098242
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    languages: [{ name: 'English' }, { name: 'French' }],
    population: 38005238,
    area: 9984670
  },
  {
    name: 'China',
    capital: 'Beijing',
    languages: [{ name: 'Chinese' }],
    population: 1402112000,
    area: 9706961
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    languages: [{ name: 'Portuguese' }],
    population: 212559417,
    area: 8515767
  }
]

// Hàm định dạng và in thông tin từng quốc gia ra console
function displayCountryInfo(countries, limit = 5) {
  console.log(`--- Hiển thị thông tin ${limit} quốc gia tiêu biểu: ---`)
  countries.slice(0, limit).forEach((country, index) => {
    // Trích xuất danh sách tên ngôn ngữ
    const languageNames = country.languages
      ? country.languages.map(lang => lang.name || lang).join(', ')
      : 'N/A'

    console.log(`[${index + 1}] Quốc gia: ${country.name}`)
    console.log(`    - Thủ đô: ${country.capital || 'N/A'}`)
    console.log(`    - Ngôn ngữ: ${languageNames}`)
    console.log(`    - Dân số: ${country.population?.toLocaleString('vi-VN') || 'N/A'} người`)
    console.log(`    - Diện tích: ${country.area?.toLocaleString('vi-VN') || 'N/A'} km²`)
  })
}

// ==========================================
// Cách 1: Sử dụng Async / Await kết hợp Try...Catch (Khuyên dùng trong ES6+)
// ==========================================
async function fetchCountriesAsync() {
  console.log('\n[Cách 1: async/await] Đang gọi Fetch API tới:', countriesAPI)
  try {
    const response = await fetch(countriesAPI)
    if (!response.ok) {
      throw new Error(`Mã lỗi HTTP: ${response.status} (${response.statusText})`)
    }
    const data = await response.json()

    // Kiểm tra dữ liệu trả về có phải là mảng quốc gia hợp lệ
    if (Array.isArray(data) && data.length > 0) {
      console.log(`✓ Lấy dữ liệu thành công từ API (${data.length} quốc gia)!`)
      displayCountryInfo(data, 5)
      return data
    } else {
      throw new Error('Dữ liệu API không đúng định dạng mảng (có thể API yêu cầu key hoặc đã đổi phiên bản).')
    }
  } catch (error) {
    console.warn('⚠️ Lỗi khi gọi API trực tiếp:', error.message)
    console.log('🔄 Đang kích hoạt dữ liệu dự phòng (Fallback Data) để chương trình hoạt động bình thường...')
    displayCountryInfo(fallbackCountries, 5)
    return fallbackCountries
  }
}

// ==========================================
// Cách 2: Sử dụng Promise thuần (.then và .catch)
// ==========================================
function fetchCountriesPromise() {
  console.log('\n[Cách 2: Promise .then().catch()] Gọi API các quốc gia:')
  fetch(countriesAPI)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      return response.json()
    })
    .then(data => {
      if (Array.isArray(data)) {
        console.log(`✓ Promise hoàn thành: Lấy được ${data.length} quốc gia.`)
      }
    })
    .catch(err => {
      console.warn('⚠️ Promise bắt được lỗi (API offline/deprecated):', err.message)
    })
}

// Thực thi
fetchCountriesAsync()
fetchCountriesPromise()
