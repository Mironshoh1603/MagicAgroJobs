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
  const res = await districts(region.value);

  for (let i = 0; i < res.data.districts.length; i++) {
    let opt = document.createElement("option");
    opt.value = res.data.districts[i]._id;
    opt.innerHTML = res.data.districts[i].name_uz;
    district.appendChild(opt);
  }
});

const addJob = async (
  title,
  body,
  price,
  userId,
  typeId,
  regionId,
  districtId,
  photo
) => {
  try {
    const res = await axios.post("http://127.0.0.1:8000/api/v1/jobs/", {
      title: title,
      body: body,
      price: price,
      userId: userId,
      typeId: typeId,
      regionId: regionId,
      districtId: districtId,
      photo: photo,
    });
    console.log(res);
    if (res.status === 201) {
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

const jobForm = document.querySelector(".jobForm");

jobForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector(".jobName").value;
  const body = document.querySelector(".jobContent").value;
  const price = document.querySelector(".priceJob").value;
  const userId = document.querySelector(".userType").value;
  const typeId = document.querySelector(".jobType").value;
  const regionId = region.value;
  const districtId = district.value;
  const photo = document.querySelector(".photoJob").value;

  console.log(title, body, price, userId, regionId, districtId, photo, typeId);
  addJob(title, body, price, userId, typeId, regionId, districtId, photo);
});
