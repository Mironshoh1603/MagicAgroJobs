const User = require("./../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const AppError = require("../utility/appError");

const signUp = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });
    if (req.file) {
      newUser.photo = req.file.path;
    }
    await newUser.save({ validateBeforeSave: true });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

    const { password, ...others } = newUser._doc;
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        token,
        others,
      });
  } catch (err) {
    console.log(err);
    next(new AppError(err));
  }
};
const signIn = async (req, res, next) => {
  // 1) Email bilan password borligini tekshirish
  const { email, password } = { ...req.body };
  if (!email || !password) {
    return next(new AppError("Email yoki passwordni kiriting! Xato!!!", 401));
  }
  // 2) Shunaqa odam bormi yuqmi shuni tekshirish
  console.log(email);
  const user = await User.findOne({ email: email });
  console.log(user);

  if (!user) {
    return next(
      new AppError("Bunday user mavjud emas. Iltimos royxatdan uting!", 404)
    );
  }

  // 3) password tugri yokin notugriligini tekshirish
  const tekshirHashga = async (oddiyPassword, hashPassword) => {
    const tekshir = await bcrypt.compare(oddiyPassword, hashPassword);
    return tekshir;
  };

  if (!(await tekshirHashga(password, user.password))) {
    return next(
      new AppError(
        "Sizning parol yoki loginingiz xato! Iltimos qayta urinib kuring!",
        401
      )
    );
  }
  // 4) JWT token yasab berish
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  // 5) Response qaytarish
  res
    .cookie("token", token, {
      httpOnly: true,
    })
    .status(200)
    .json({
      token,
    });
};

module.exports = { signIn, signUp };
