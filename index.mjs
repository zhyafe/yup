import yup from "yup";

yup.setLocale({
  mixed: {
    required: "必传",
  },
});

let schema = yup.object().shape({
  name: yup.string().required("zdy").min(4, "最小斯"),
  address: yup.string().matches(/^[\u4e00-\u9fa5A-Za-z0-9]{2,20}$/, {
    message: "输入2-20长度字符",
    excludeEmptyString: true,
  }),
  age: yup.number().required().positive().integer(),
  email: yup.string().email(),
  website: yup.string().url(),
  createdOn: yup.date().default(function () {
    return new Date();
  }),
});

// check validity
(async () => {
  try {
    let res = await schema.validate({ age: 1, name: "11aa", address: "" });
    console.log("res", res);
    console.log("data", schema.getDefault());
  } catch (error) {
    console.log("error", error);
  }
})();

// console.log(schema.cast());
