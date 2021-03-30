import yup from "yup";

yup.setLocale({
  mixed: {
    required: "必传",
  },
});

let schema = yup.object().shape({
  name: yup.string().required(),
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
    let res = await schema.validate();
    console.log("res", res);
    console.log("data", schema.getDefault());
  } catch (error) {
    console.log("error", error);
  }
})();

// console.log(schema.cast());
