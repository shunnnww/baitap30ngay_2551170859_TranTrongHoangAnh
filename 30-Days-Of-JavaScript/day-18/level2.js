/**
 * 30 Days of JavaScript - Day 18: Promises, Async/Await & Fetch API
 * Level 2
 */

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

console.log('%c=== DAY 18 - LEVEL 2 ===', 'color: #2ecc71; font-weight: bold; font-size: 14px;')

// Dữ liệu mèo dự phòng (Fallback Data) chuẩn theo cấu trúc TheCatAPI
const fallbackCats = [
  { name: 'Abyssinian', origin: 'Egypt', weight: { metric: '3 - 5' } },
  { name: 'Aegean', origin: 'Greece', weight: { metric: '4 - 5' } },
  { name: 'American Bobtail', origin: 'United States', weight: { metric: '3 - 7' } },
  { name: 'American Curl', origin: 'United States', weight: { metric: '2 - 5' } },
  { name: 'American Shorthair', origin: 'United States', weight: { metric: '4 - 7' } },
  { name: 'American Wirehair', origin: 'United States', weight: { metric: '4 - 7' } },
  { name: 'Balinese', origin: 'United States', weight: { metric: '2 - 5' } },
  { name: 'Bengal', origin: 'United States', weight: { metric: '3 - 7' } },
  { name: 'Birman', origin: 'France', weight: { metric: '3 - 7' } },
  { name: 'Bombay', origin: 'United States', weight: { metric: '4 - 5' } },
  { name: 'British Shorthair', origin: 'United Kingdom', weight: { metric: '5 - 9' } },
  { name: 'Maine Coon', origin: 'United States', weight: { metric: '5 - 11' } },
  { name: 'Persian', origin: 'Iran', weight: { metric: '3 - 6' } },
  { name: 'Ragdoll', origin: 'United States', weight: { metric: '4 - 9' } },
  { name: 'Siamese', origin: 'Thailand', weight: { metric: '3 - 5' } },
  { name: 'Sphynx', origin: 'Canada', weight: { metric: '3 - 6' } }
]

// Hàm xử lý dữ liệu mèo: trích xuất danh sách tên và tính trọng lượng trung bình
function processCatData(cats) {
  // 1. Trích xuất tất cả tên các giống mèo vào biến catNames
  const catNames = cats.map(cat => cat.name)
  console.log('--- 1. Danh sách tên các giống mèo (catNames) ---')
  console.log(`Tổng số giống mèo: ${catNames.length}`)
  console.log('Mảng tên các giống mèo:', catNames)

  // 2. Trích xuất cân nặng và tính trọng lượng trung bình theo đơn vị metric (kg)
  let totalBreedAverage = 0
  let validBreedCount = 0

  const breedWeights = cats.map(cat => {
    if (cat.weight && cat.weight.metric) {
      // Định dạng cân nặng thường là "min - max" (ví dụ: "3 - 5")
      const parts = cat.weight.metric.split('-').map(str => parseFloat(str.trim()))
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        const breedAvg = (parts[0] + parts[1]) / 2
        totalBreedAverage += breedAvg
        validBreedCount++
        return {
          breed: cat.name,
          weightRange: `${cat.weight.metric} kg`,
          averageWeight: Number(breedAvg.toFixed(2))
        }
      }
    }
    return null
  }).filter(Boolean)

  console.log('\n--- 2. Bảng trích xuất cân nặng theo giống mèo (5 mẫu đầu tiên): ---')
  console.table(breedWeights.slice(0, 5))

  if (validBreedCount > 0) {
    const overallAverageWeight = totalBreedAverage / validBreedCount
    console.log(`\n=> CÂN NẶNG TRUNG BÌNH CỦA CÁC GIỐNG MÈO: ${overallAverageWeight.toFixed(2)} kg`)
  }
}

// Hàm bất đồng bộ gọi TheCatAPI
async function fetchCats() {
  console.log('\nĐang gọi Fetch API tới:', catsAPI)
  try {
    const response = await fetch(catsAPI)
    if (!response.ok) {
      throw new Error(`Mã lỗi HTTP: ${response.status} (TheCatAPI hiện yêu cầu API Key)`)
    }
    const data = await response.json()
    if (Array.isArray(data) && data.length > 0) {
      console.log(`✓ Lấy thành công dữ liệu từ TheCatAPI (${data.length} giống mèo)`)
      processCatData(data)
    } else {
      throw new Error('Dữ liệu API trả về không hợp lệ.')
    }
  } catch (error) {
    console.warn('⚠️ Lỗi khi kết nối TheCatAPI:', error.message)
    console.log('🔄 Đang kích hoạt dữ liệu dự phòng chuẩn để thực hiện phân tích cân nặng...')
    processCatData(fallbackCats)
  }
}

// Chạy hàm
fetchCats()
