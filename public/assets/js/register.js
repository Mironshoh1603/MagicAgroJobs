console.log("hello");
const registerForm = document.querySelector(".registerForm");
console.log(registerForm);
const register = async (
  name,
  surname,
  email,
  phone,
  password,
  passwordConfirm,
  regionId,
  districtId,
  role,
  photo
) => {
  try {
    const res = await axios.post("http://localhost:8000/auth/signup", {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      password: password,
      passwordConfirm: passwordConfirm,
      regionId: regionId,
      districtId: districtId,
      role: role,
      photo: photo,
    });
    console.log(res);
    if (res.status === 200) {
      alert("Siz ro`yxatdan o`tdingiz. Telegram kanalimizga qo`shiling");
      window.setTimeout(() => {
        location.assign("https://t.me/Abduraxmanov_Abdulaziz");
      }, 1000);
    } else {
      console.log(err.response.data.message);
      alert(`Xatolik yuz berdi.
    Error: ${err.response.data.message}`);
    }
  } catch (err) {
    console.log(err.response.data.message);
    alert(`Xatolik yuz berdi.
    Error: ${err.response.data.message}`);
  }
};

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const surName = document.querySelector(".surName").value;
  const birthDate = document.querySelector(".birthDate").value;
  const phone = document.querySelector(".number").value;
  const adress = document.querySelector(".address").value;
  const faculty = document.querySelector(".faculty").value;
  const direction = document.querySelector(".direction").value;
  const grade = document.querySelector(".grade").value;
  const course = document.querySelector(".course").value;
  const startTime = document.querySelector(".startTime").value;
  const english = document.querySelector(".english").value;
  const math = document.querySelector(".math").value;
  register(
    name,
    surName,
    birthDate,
    phone,
    adress,
    faculty,
    direction,
    grade,
    course,
    startTime,
    english,
    math
  );
});
