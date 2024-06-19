import styles from "./index.module.scss";

import { FaRegUser } from "react-icons/fa6";
import { IoLockClosedOutline } from "react-icons/io5";


import Captcha from "../Captcha/Index.tsx";
import { useState } from "react";
import toast from "react-hot-toast";
import InputBox from "../Box/Index.tsx";
import InputCheckbox from "../Checkbox/Index.tsx";
import SubmitButton from "../Submit/Index.tsx";

type Props = {
  isDarkMode: boolean;
};

const LoginForm = ({ isDarkMode }: Props) => {
  // Controle do usuario e da senha
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // mude a url apenas se alterar na API
  const BASE_URL = "http://127.0.0.1:8000/api/login";

  // submissão do login
  const procedLogin = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (!validate(username, password)) return;

    toast.loading("Verificando...", {
      duration: 500
    })

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    // se for diretente de sucesso, retorna um erro.
    if (response.status !== 200) {
      toast.error("Credenciais inválidas!!!");
      return;
    }

    toast.success("Credenciais válidadas, bem vindo!!!")
  };

  // Valida se o usuário digitou algo, sendo a base para uma validação de senha mais robusta.
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
      <InputBox
        label="Usuário"
        name="username"
        placeholder="aluno290_1u"
        Icon={FaRegUser}
        type="text"
        setAnything={setUsername}
      />
      <InputBox
        label="Senha"
        name="password"
        placeholder="********"
        Icon={IoLockClosedOutline}
        type="text"
        setAnything={setPassword}
      />
      <InputCheckbox
        checkboxName="holdConnection"
        label="Manter conectado"
        isDarkMode={isDarkMode}
        responsiveDisplay={false}
      />
      <Captcha />
      <SubmitButton
        isDarkMode={isDarkMode}
        text={"Entrar"}
        procedLogin={procedLogin}
      />
    </form>
  );
};

export default LoginForm;
