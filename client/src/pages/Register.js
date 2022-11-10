import { Form, message } from "antd";
import Input from "antd/lib/input/Input";
import React , {useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import '../resources/authentication.css'
import axios from 'axios'
import Spinner from "../components/Spinner";

function Register() {
  const navigate = useNavigate(true)
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    try {
      setLoading(true)
      await axios.post("/api/users/register", values);
      message.success("Registration Successfull");
      setLoading(false);
    } catch (error) {
      setLoading(false)
      message.error("Something went wrong");
    }
  }
  useEffect(() => {
    if (localStorage.getItem("Expense_Tracker-user")) {
      navigate("/");
    }
  }, []);

  return (
    <div className="register">
      {loading && <Spinner />}
      <div className="row justify-content-center align-items-center w-100 h-100">
        <div className="col-md-5">
          <div className="lottie">
            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_xx9zron9.json"
              background="transparent"
              speed="1"
              loop
              autoplay></lottie-player>
          </div>
        </div>
        <div className="col-md-4">
          <Form layout="vertical" onFinish={onFinish}>
            <h1>REGISTER</h1>

            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" />
            </Form.Item>

            <div className="d-flex justify-content-between align-items-center">
              <Link to="/login">Already Registered , Click Here To Login</Link>
              <button className="secondary" type="submit">
                REGISTER
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;
