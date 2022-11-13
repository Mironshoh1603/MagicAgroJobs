const formType = document.querySelector(".formType");
const typeName = document.querySelector(".typeName");

const addType = async (name, userId) => {
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:8000/api/v1/types",
      data: {
        name: name,
        userId: userId,
      },
    });
    if (res.status === 201) {
      alert("You added type successfully");
      window.setTimeout(() => {
        location.assign("/createType");
      }, 1000);
    } else {
      console.log(res);
      alert("Xatolik yuz berdii");
      window.setTimeout(() => {
        location.assign("/home");
      }, 1000);
    }
  } catch (err) {
    console.log(err.response);
  }
};

formType.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = typeName.value;
  const userId = document.querySelector(".userType").value;
  console.log(name, userId);
  addType(name, userId);
});
