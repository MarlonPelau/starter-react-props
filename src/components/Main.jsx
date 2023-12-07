import Button from "./Button.jsx";
import dogs from "../data.js";

function Main() {
  const getAverage = (dogs) => {
    let sum = 0;
    for (let dog of dogs) {
      sum += parseInt(dog.grade);
    }
    return (sum / dogs.length).toFixed(2);
  };
  const average = getAverage(dogs);
  return (
    <main>
      <h2>Class Average: {average} </h2>
      <h3>Notable performances and grades:</h3>
      <Button name={"Submit"} color={"green"} />
      <Button name={"Cancel"} color={"red"} />
      <Button name={"Pay Now"} color={"orange"} />
      <ul></ul>
    </main>
  );
}

export default Main;
