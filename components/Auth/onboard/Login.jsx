import LoginForm from "./LoginForm";
import FormCarousel from "../../FormCarousel";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4">
          <FormCarousel />
        </div>
        <div className="col-sm-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
