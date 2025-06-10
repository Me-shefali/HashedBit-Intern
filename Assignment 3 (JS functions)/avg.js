const students = [
  {
    name: "student1",
    marks: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    name: "student2",
    marks: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    name: "student3",
    marks: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];

const result = students.map(student => {
  const scores = Object.values(student.marks);
  const total = scores.reduce((sum, mark) => sum + mark, 0);
  const average = total / scores.length;

  return {
    [student.name]: {
      average: Math.round(average) 
    }
  };
});

console.log(result);
