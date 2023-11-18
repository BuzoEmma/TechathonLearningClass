import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ReactHookForm = () => {
  const inlineCss = {
    border: "1px solid black",
    width: "100%",
    padding: "5px",
  };

  const schema = yup.object({
    name: yup.string().required("give me your name myfriend!"),
    email: yup
      .string()
      .email("Invalid Email")
      .required("give me ur original email"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);
  const submit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>React Hook Form</h1>

      <form
        action="hook form"
        style={{ margin: "1rem" }}
        onSubmit={handleSubmit(submit)}
      >
        <div style={{ width: "30%", padding: "5px" }}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            {...register("name")}
            style={inlineCss}
            placeholder="Input your name"
          />
          {errors.name?.message}
        </div>
        <div style={{ width: "30%", padding: "5px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Input your email"
            {...register("email")}
            style={inlineCss}
          />
          {errors?.email?.message}
        </div>

        <button>Send</button>
      </form>
    </>
  );
};

export default ReactHookForm;
