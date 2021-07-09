
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    const result2 = fruits.split(',', 2);
    console.log(result);
    console.log(result2);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); //배열 자체를 변화시킴
  }
  
  // ⭐Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    //const result = array.splice(0, 2); splice: array를 변경
    const result = array.slice(2, 5);
    console.log(result);
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find((student) => student.score === 90);
      console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student) => student.enrolled);
      console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
      console.log(result);

  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      console.clear();
      const result = students.some((student) => student.score < 50);
      console.log(result); // 하나라도 조건에 만족되면 true

      const result2 = students.every((student) => student.score < 50);
      console.log(result2); // 모든 학생들이 50보다 낮을 때 return true;
  }
  
  // Q9. compute students' average score
  {
      const result = students.reduce((prev, curr) =>  prev + curr.score, 0);//return한 curr이 prev로
      console.log(result / students.length);
      //reduecRight은 거꾸로 item을 전달 받음
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const result = students
      .map((student) => student.score)
      .filter(score => score >= 50)
      .join();
      console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
      const result = students.map(student => student.score)
      .sort((a, b) => a - b) //❔
      .join();   
      console.log(result);
  }