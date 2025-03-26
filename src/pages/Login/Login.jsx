import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/services/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "../../utilities/lib/verifyToken";
import { setUser } from "../../redux/services/auth/authSlice";
import { Button } from "antd";
import CustomForm from "../../components/Reusable/Form/CustomForm";
import CustomInput from "../../components/Reusable/Form/CustomInput";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data) => {
    const toastId = toast.loading("Logging in...");
    try {
      const res = await login(data).unwrap();
      const user = verifyToken(res.access);
      dispatch(setUser({ user: user, token: res.access }));
      toast.success("Logged in successfully!", { id: toastId });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Invalid credentials. Please try again!", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <section
      style={{
        backgroundImage:
          "url('https://viscarttoolsapi.moonsgallerysystem.com/uploads/1742983046581-loginBg.png')",
      }}
      className="relative bg-cover bg-center bg-no-repeat h-full"
    >
      <div className="absolute inset-0 bg-white opacity-70"></div>

      <div className="relative h-screen flex justify-center items-center">
        <div className="hidden lg:block lg:w-[550px]">
          <img src={"/login.png"} alt="login" width={500} height={500} />
        </div>
        <div className="lg:w-[550px] p-10 text-center lg:text-start">
          <h1 className="mb-4 text-xl md:text-4xl font-semibold">
            Login To Your Account
          </h1>
          <h3 className="mb-5 text-gray-600 text-sm md:text-base">
            Login now to access real-time delivery tracking, seamless logistics
            management, and secure shipments!
          </h3>
          <CustomForm onSubmit={onSubmit} className="flex flex-col gap-6">
            <CustomInput
              label="Email"
              type={"text"}
              required={true}
              name={"email"}
              placeholder={"Enter Email or Username"}
            />
            <CustomInput
              label="Password"
              type={"password"}
              name={"password"}
              required={true}
              placeholder={"Enter Password"}
            />
            <Button
              htmlType="submit"
              loading={isLoading}
              className="font-bold w-full pt-2 pb-8 rounded-lg"
              type="primary"
            >
              Enter
            </Button>
          </CustomForm>
        </div>
      </div>
    </section>
  );
};

export default Login;
