import { FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

import { Button } from "../../../../../../components/Button";
import { Text } from "../../../../../../components/Text";
import { TextInput } from "../../../../../../components/TextInput";
import { InputTextArea } from "./styles";
import { FormContactContainer } from "./styles";
import "react-toastify/dist/ReactToastify.css";

function FormContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    toast.success("Mensagem enviada com sucesso!");

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <FormContactContainer
      onSubmit={handleSendMessage}
      action="https://formsubmit.co/ivanoliver131@gmail.com"
      method="POST"
    >
      <label htmlFor="name">
        <Text>Nome</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <FaUser />
          </TextInput.Icon>
          <TextInput.Input
            id="name"
            type="text"
            placeholder="Seu Nome"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required={true}
          />
        </TextInput.Root>
      </label>

      <label htmlFor="e-mail">
        <Text>Email</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <MdEmail />
          </TextInput.Icon>
          <TextInput.Input
            id="email"
            name="email"
            type="email"
            placeholder="Seu Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required={true}
          />
        </TextInput.Root>
      </label>

      <label htmlFor="message">
        <Text>Mensagem</Text>
        <InputTextArea
          name="message"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required={true}
        />
      </label>

      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="http://127.0.0.1:5173" />
      <input
        type="hidden"
        name="_next"
        value="https://portifolio-ivan.vercel.app"
      />

      <Button type="submit">Enviar Mensagem</Button>
    </FormContactContainer>
  );
}

export { FormContact };
