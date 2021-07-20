import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Input, Container, Terms } from "./Username.style";
import { ArrowForward } from "@material-ui/icons";
import Button from "../Utils/Button/Button";
import Link from "next/link";
import Tooltip from "../Utils/Tooltip/Tooltip";

function Username() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    if (!inputRef) return;

    inputRef?.current?.focus();
  }, [inputRef]);

  return (
    <Container>
      <Tooltip
        title={"Slow down, partner. We need a username first."}
        type={"error"}
      >
        <Wrapper
          initial={{ width: 0, opacity: 0, y: 0 }}
          animate={{ width: "60%", opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <Input
            ref={inputRef}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder={"Enter a username"}
          />
          <Button
            buttonType={"primary"}
            styles={{ padding: "5px 15px" }}
            type={"submit"}
          >
            <ArrowForward />
          </Button>
        </Wrapper>
      </Tooltip>
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
