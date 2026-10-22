// ==============================================================================
// 30 Days of JavaScript - Day 10: Sets and Maps (Level 2)
// ==============================================================================

{
  console.log('\n--- DAY 10: LEVEL 2 ---');

  const a = [4, 5, 8, 9];
  const b = [3, 4, 5, 7];

  console.log('Mảng a:', a);
  console.log('Mảng b:', b);

  // Câu 1: Tìm hợp của a và b (a union b)
  // Phép hợp gộp tất cả phần tử của cả a và b, sử dụng Set để loại bỏ các phần tử trùng lặp
  const c = [...a, ...b];
  const unionSet = new Set(c);
  const aUnionB = [...unionSet];
  console.log('Câu 1: Hợp của a và b (a U b):', aUnionB);

  // Câu 2: Tìm giao của a và b (a intersection b)
  // Phép giao lấy các phần tử cùng xuất hiện trong cả 2 tập hợp
  const setB = new Set(b);
  const intersection = a.filter((num) => setB.has(num));
  const aIntersectionB = new Set(intersection);
  console.log('Câu 2: Giao của a và b (a ∩ b):', [...aIntersectionB]);

  // Câu 3: Tìm hiệu của a đối với b (a with b / a difference b)
  // Phép hiệu lấy các phần tử thuộc a nhưng KHÔNG thuộc b
  const difference = a.filter((num) => !setB.has(num));
  const aDifferenceB = new Set(difference);
  console.log('Câu 3: Hiệu của a và b (a \\ b):', [...aDifferenceB]);
}
