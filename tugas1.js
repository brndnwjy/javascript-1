const biodata = {
  name: "Brandon Wijaya",
  age: 21,
  hobbies: ["music", "sport", "game", "art"],
  isMarried: false,
  schoolList: [
    {
        name: "Bina Putra Private Elementary",
        yearIn: 2007,
        yearOut: 2013,
        major: null
    },
    {
        name: "45 State Junior High Jakarta",
        yearIn: 2013,
        yearOut: 2016,
        major: null
    },
    {
        name: "33 State Senior High Jakarta",
        yearIn: 2016,
        yearOut: 2019,
        major: "Math and Natural Science"
    }
  ],
  skills: [
    {
        skillName: "programming",
        level: {
            'c++': "beginner",
            java: "beginner",
            swift: "beginner",
            javascript: "intermediate"
        }
    },
    {
        skillName: "illustrating",
        level: "beginner"
    },
  ],
  interestedInCoding : true
};

console.log(biodata)