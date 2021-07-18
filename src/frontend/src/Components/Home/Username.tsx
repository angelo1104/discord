import React, { useEffect, useRef } from "react";
import { Wrapper, Input, Container, Terms } from "./Username.style";
import { ArrowForward } from "@material-ui/icons";
import Button from "../Utils/Button/Button";
import Link from "next/link";

function Username() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef) return;

    inputRef?.current?.focus();
  }, [inputRef]);

  return (
    <Container>
      <Wrapper
        initial={{ width: 0, opacity: 0, y: 0 }}
        animate={{ width: "60%", opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <Input ref={inputRef} placeholder={"Enter a username"} />
        <Button buttonType={"primary"} styles={{ padding: "5px 15px" }}>
          <ArrowForward />
        </Button>
      </Wrapper>
      <Terms>
        By registering, you agree to Discord's{" "}
        <Link href={"/terms"}>
          <a>Terms of Service</a>
        </Link>{" "}
        and{"  "}
        <Link href={"/privacy"}>
          <a>Privacy Policy.</a>
        </Link>
      </Terms>
    </Container>
  );
}

export default Username;
