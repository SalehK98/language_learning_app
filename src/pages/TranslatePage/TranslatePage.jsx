import { LoadingButton } from "@mui/lab";
import React, { useState, useRef } from "react";
import classes from "./TranslatePage.module.css";

export default function TranslatePage() {
  const [loading, setLoading] = useState(false);
  const [variant, setVariant] = useState("contained");

  const input = useRef("");
  const output = useRef("");
  const inputLang = useRef("");
  const outputLang = useRef("");

  async function translate() {
    if (typeof input.current === "string") {
      console.log("input", typeof input.current);
      const lang1 = inputLang.current.value;
      const lang2 = outputLang.current.value;
      setLoading(true);
      setVariant("outlined");
      await fetch(
        `https://api.mymemory.translated.net/get?q=${input.current}&langpair=${lang1}|${lang2}`
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("response not ok");
          }
          console.log("res", res);
          return res.json();
        })
        .then((data) => {
          console.log("data", data);
          output.current = data.responseData.translatedText;
          setLoading(false);
          setVariant("contained");
          return data;
        })
        .catch((err) => {
          console.error("Error", err);
          return err;
        });
    }
  }

  return (
    <div className={classes.translatePage}>
      <div className={classes.translatePage_container}>
        <div className={classes.translatePage_input}>
          <select
            name="langs"
            id="langs"
            ref={inputLang}
            className={classes.translatePage_langList}
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="es">Spanish</option>
            <option value="he">Hebrew</option>
            <option value="ru">Russian</option>
          </select>

          <label>
            <textarea
              autoFocus={!loading}
              maxLength="450"
              ref={input}
              onChange={(event) => {
                input.current = event.target.value;
              }}
              className={classes.translatePage_textArea}
            />
          </label>
        </div>
        <br />
        <br />
        <LoadingButton
          loading={loading}
          variant={variant}
          onClick={translate}
          disabled={loading}
          sx={{
            // marginBottom: 50,
            marginRight: 2,
            marginLeft: 2,
          }}
        >
          <span>translate</span>
        </LoadingButton>
        <br />
        <br />
        <div className={classes.translatePage_output}>
          <select
            name="langs"
            id="langs"
            ref={outputLang}
            className={classes.translatePage_langList}
          >
            <option value="ar">Arabic</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="he">Hebrew</option>
            <option value="ru">Russian</option>
          </select>
          <label>
            <textarea
              maxLength="450"
              readOnly
              autoFocus={loading}
              value={output.current}
              className={classes.translatePage_textArea}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
