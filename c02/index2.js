const groupBy = (array, key) => {
  return array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});
};

// Example usage:
const data = [
  { id: 1, category: "fruit", name: "apple" },
  { id: 2, category: "fruit", name: "banana" },
  { id: 3, category: "vegetable", name: "carrot" },
  { id: 4, category: "fruit", name: "orange" },
  { id: 5, category: "vegetable", name: "broccoli" },
];

const groupedData = groupBy(data, "category");
