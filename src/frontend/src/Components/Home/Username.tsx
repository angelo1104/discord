import React, { useCallback, useEffect, useRef, useState } from "react";
import { Wrapper, Input, Container, Terms } from "./Username.style";
import { ArrowForward } from "@material-ui/icons";
import Button from "../Utils/Button/Button";
import Link from "next/link";
import Tooltip from "../Utils/Tooltip/Tooltip";
import sleep from "../../Utils/sleep";
import RICK_ROLL from "../../Utils/rick-roll";

function Username() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!inputRef) return;

    inputRef?.current?.focus();
  }, [inputRef]);

  const validate = useCallback((): string | undefined => {
    if (!username) return "Slow down, partner. We need a username first.";

    if (username.length < 2 || username.length > 32)
      return "Must be between 2 and 32 in length.";
  }, [username]);

  const submitForm = async (event: any) => {
    event.preventDefault();

    try {
      setLoading(true);

      const validation = validate();

      await sleep(500);

      if (validation) throw new Error(validation);

      // do the normal stuff

      window.location = RICK_ROLL;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Tooltip title={error} open={true} type={"error"} disableAnimation>
        <div style={{ marginBottom: -10 }} />
      </Tooltip>
      <Wrapper
        initial={{ width: 0, opacity: 0, y: 0 }}
        animate={{ width: "60%", opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        onSubmit={submitForm}
      >
        <Input
          value={username}
          ref={inputRef}
          onChange={(event) => {
            if (event.target.value.length > 32) return;

            setUsername(event.target.value);
          }}
          placeholder={"Enter a username"}
        />
        <Button
          buttonType={"primary"}
          styles={{ padding: "5px 15px" }}
          type={"submit"}
          loading={loading}
        >
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
