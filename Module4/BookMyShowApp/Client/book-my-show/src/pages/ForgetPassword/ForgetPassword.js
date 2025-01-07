

import {Link} from "react-router-dom";
import {Input, Form , Button, message} from "antd";
import { ForgetPasswordAPI } from "../../calls/users";


function ForgetPassword(){

    const onSendOTP = async (values)=>{

        console.log(values);

      const response  = await ForgetPasswordAPI({email:values.email});

        if(response.data.status === "success"){
            message.success(response.data.message);
            window.location.href="/reset";

        }else{
            message.error(response.data.message)
        }
    
      }
    
        return <>
        <header className="App-header">
          <main className="main-area mw-500 text-center px-3">
            <section className="left-section">
              <h1>Forget Password </h1>
            </section>
    
            <section className="right-section">
              <Form onFinish={onSendOTP} layout="vertical">
        
              <Form.Item
                  label="Email"
                  htmlFor="email"
                  name="email"
                  className="d-block"
                  rules={[{ required: true, message: "Email is required" }]}
                >
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your Email"
                  >
                  </Input>
    
                </Form.Item>
    
 
    
                <Form.Item className="d-block">
                  <Button
              color="primary"
                 variant="solid"
                    block
                    htmlType="submit"
                    style={{ fontSize: "1rem", fontWeight: "600" }}
                  >
                    Send OTP 
                  </Button>
                </Form.Item>
              </Form>
              <div>
                <p>
                  Existing User? <Link to="/login">Login Here</Link>
                </p>
              </div>
            </section>
          </main>
        </header>
      </>

}

export default ForgetPassword;