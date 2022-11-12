const district = document.querySelector("#districtInput");

const districts = async (regionId) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/api/v1/regions/${regionId}`
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

const region = document.querySelector("#regionInput");
region.addEventListener("change", async () => {
  const res = await districts(regionInput.value);

  for (let i = 0; i < res.data.districts.length; i++) {
    let opt = document.createElement("option");
    opt.value = res.data.districts[i]._id;
    opt.innerHTML = res.data.districts[i].name_uz;
    district.appendChild(opt);
  }
});

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
    const res = await axios.post("http://127.0.0.1:8000/api/v1/auth/signup", {
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
        location.assign("http://127.0.0.1:8000/jobs");
      }, 1000);
    } else {
      console.log(err.response.data.message);
      alert(`Xatolik yuz berdi.200 emas
    Error: ${err.response.data.message}`);
    }
  } catch (err) {
    console.log(err);
    alert(`Xatolik yuz berdi.xati
    Error: ${err.response.data.message}`);
  }
};

const registerForm = document.querySelector(".registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector(".name").value;
  const surname = document.querySelector(".surname").value;
  const email = document.querySelector(".email").value;
  const phone = document.querySelector(".phone").value;
  const password = document.querySelector(".password").value;
  const passwordConfirm = document.querySelector(".passwordConfirm").value;
  const regionId = region.value;
  const districtId = district.value;
  const role = document.querySelector(".role").value;
  const photo = document.querySelector(".photo").value;

  register(
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
  );
});
