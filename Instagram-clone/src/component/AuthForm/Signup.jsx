import { Button, Input, InputGroup, InputRightElement, } from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        placeholder="Email"
        fontSize={14}
        type="email"
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.userName}
        onChange={(e) => setInputs({ ...inputs, userName: e.target.value })}
      />
      <Input
        placeholder="Fullname"
        fontSize={14}
        type="text"
        size={"sm"}
        value={inputs.fullName}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          size={"sm"}
          value={inputs.password}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />

        <InputRightElement h="full">
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {/* {showPassword ? <ViewIcon /> : <ViewOffIcon /> } */}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
