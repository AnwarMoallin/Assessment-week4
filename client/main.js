// selecting html elements
const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const numInput = document.getElementById("input-number");
const numForm = document.getElementById("random-number-form");
const deleteBtn = document.getElementById("deleteButton");

// functions
const getCompliment = () => {
  axios.get("http://localhost:3000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:3000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const postingForm = (event) => {
  event.preventDefault();
  const inputValue = numInput.value;
  axios
    .post("http://localhost:3000/api/number/", { val: inputValue })
    .then((res) => {
      const data = res.data;
      alert(data);
    });
};

const deletingNum = () => {
  // send delete request to server with selected number id
  const selectedId = prompt("Enter number id to delete:");
  axios
    .delete(`http://localhost:3000/api/number/${selectedId}`)
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// events
complimentBtn.addEventListener("click", getCompliment);
fortuneBtn.addEventListener("click", getFortune);
numForm.addEventListener("submit", postingForm);
deleteBtn.addEventListener("click", deletingNum);
