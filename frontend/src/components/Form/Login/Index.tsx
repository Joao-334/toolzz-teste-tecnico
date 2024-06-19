import styles from "./index.module.scss";

import { FaRegUser } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";
import Captcha from "../Captcha/Index";
import Submit from "../Submit/Index";
import Checkbox from "../../Checkbox/Index";
import Box from "../../Box/Index";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  isDarkMode: boolean;
};

const LoginForm = ({ isDarkMode }: Props) => {
  // Controle do usuario e da senha
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // submissão do login
  const procedLogin = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!validate(username, password)) return;

    toast.loading("Verificando...", {
      duration: 500
    })

    const response = await fetch("http://127.0.0.1:8001/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    if (response.status !== 200) {
      toast.error("Credenciais inválidas!!!");
      return;
    }

    toast.success("Credenciais válidadas, bem vindo!!!")
  };

  const validate = (username: string, password: string) => {
    if (username === "" || username === null) {
      toast.error("Usuário inválido");
      return false;
    }

    if (password === "" || password === null) {
      toast.error("Senha inválida");
      return false;
    }

    return true;
  };

  return (
    <form className={styles.form}>
      <Box
        label="Usuário"
        name="username"
        placeholder="aluno290_1u"
        Icon={FaRegUser}
        type="text"
        setAnything={setUsername}
      />
      <Box
        label="Senha"
        name="password"
        placeholder="********"
        Icon={IoLockClosedOutline}
        type="text"
        setAnything={setPassword}
      />
      <Checkbox
        checkboxName="holdConnection"
        label="Manter conectado"
        isDarkMode={isDarkMode}
        responsiveDisplay={false}
      />
      <Captcha />
      <Submit
        isDarkMode={isDarkMode}
        text={"Entrar"}
        procedLogin={procedLogin}
      />
    </form>
  );
};

export default LoginForm;
