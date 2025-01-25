//Write Code to get all unique keys from this object

const a = [
    {
      c: [
        {
          d: 15,
        },
      ],
    },
    "5",
    {
      f: 7,
    },
    {
      e: {
        c: [
          9,
          {
            d: 9,
          },
        ],
      },
      g: {
        c: [
          9,
          {
            d: 9,
          },
        ],
      },
    },
    [
      {
        k: 1,
      },
      ["highLevel", "marketing"],
    ],
  ];
  const allUniqueKeys = new Set();
  
  const getUniqueKeys = (arr) => {
    for (const item of arr) {
      console.log(1, item);
      if (typeof item == "object" && !Array.isArray(item)) {
        handleObj(item);
      } else if (typeof item == "object" && Array.isArray(item)) {
        handleArr(item);
      } else if (item != undefined && item != null) {
        allUniqueKeys.add(item);
      }
    }
  
    return allUniqueKeys;
  };
  
  const handleObj = (obj) => {
    for (const key of Object.keys(obj)) {
      console.log(2, key);
      if (typeof obj[key] == "object" && !Array.isArray(obj[key])) {
        allUniqueKeys.add(key);
        handleObj(obj[key]);
      } else if (typeof obj[key] == "object" && Array.isArray(obj[key])) {
        handleArr(obj[key]);
      } else if (obj[key] != undefined && obj[key] != null) {
        allUniqueKeys.add(key);
      }
    }
  };
  
  const handleArr = (arr) => {
    for (const item of arr) {
      console.log(3, item, typeof item);
      if (typeof item == "object" && !Array.isArray(item)) {
        console.log(4, item, typeof item);
        handleObj(item);
      } else if (typeof item == "object" && Array.isArray(item)) {
        handleArr(item);
      }
    }
  };
  
  const result = getUniqueKeys(a);
  console.log(result);
  