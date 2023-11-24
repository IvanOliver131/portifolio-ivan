import { FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

import emailjs from "@emailjs/browser";

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

  async function handleSendEmail(event: FormEvent) {
    event.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    await emailjs
      .send(
        "service_l2viq9r",
        "template_5ibd0ee",
        templateParams,
        "bL4L-GpXtDy1xGk-m"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Mensagem enviada com sucesso!");
        },
        (err) => {
          console.log("FAILED...", err);
          toast.warning("Erro ao enviar mensagem!");
        }
      );
  }

  return (
    <FormContactContainer onSubmit={handleSendEmail}>
      <label htmlFor="name">
        <Text>Nome</Text>
        <TextInput.Root>
          <TextInput.Icon>
            <FaUser />
          </TextInput.Icon>
          <TextInput.Input
            id="name"
            name="name"
            type="text"
            placeholder="Seu Nome"
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

      <Button type="submit">Enviar Mensagem</Button>
    </FormContactContainer>
  );
}

export { FormContact };
