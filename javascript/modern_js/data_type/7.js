// 1. Object.keys、Object.values、Object.entries
{
  let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
  const sumSalaries = (salaries) => {
    let answer = 0;
    for (const key in salaries) {
      answer += salaries[key];
    }
    return answer;
  };
  const sumSalaries_0 = (salaries) => {
    let answer = 0;
    Object.values(salaries).forEach((item) => (answer += item));
    return answer;
  };
  console.log(sumSalaries(salaries));
  console.log(sumSalaries_0(salaries));
}
