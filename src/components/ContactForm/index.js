import React from "react";
import { ModalStatusMail } from "../ModalStatusMail";
import { useNearScreen } from '@hoocks/useNearScreen';
import { ContainerGridForm, ContactIn, Article, H2, Span, ContactMap, Form, ContainerInput, InputText, TextArea, InputButton, Iframe } from "./styles";
import { useState } from "react";
import axios from 'axios';


export const ContactForm = () => {
  const [showForm, form] = useNearScreen();
  const [showMap, map] = useNearScreen();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://sheltered-bastion-73111.herokuapp.com/send_mail", { name, mail, message });
      setName("");
      setMail("");
      setMessage("");
      setEnviado(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <ContainerGridForm id="contact_form">
      <ModalStatusMail status={enviado} />
      <ContactIn>
        <Form ref={form} onSubmit={handleSubmit} >
          {showForm &&
            <>
              <Article className="animate__rubberBand">
                <H2>
                  <Span aria-hidden="true">C</Span>
                  C
                  <Span aria-hidden="true">C</Span>
                </H2>
                <H2>
                  <Span aria-hidden="true">o</Span>
                  o
                  <Span aria-hidden="true">o</Span>
                </H2>
                <H2>
                  <Span aria-hidden="true">n</Span>
                  n
                  <Span aria-hidden="true">n</Span>
                </H2>
                <H2>
                  <Span aria-hidden="true">t</Span>
                  t
                  <Span aria-hidden="true">t</Span>
                </H2>
                <H2>
                  <Span aria-hidden="true">a</Span>
                  a
                  <Span aria-hidden="true">a</Span>
                </H2>
                <H2>
                  <Span aria-hidden="true">c</Span>
                  c
                  <Span aria-hidden="true">c</Span>
                </H2>
                <H2>
                  <Span aria-hidden="true">t</Span>
                  t&nbsp;
                  <Span aria-hidden="true">t</Span>
                </H2>
                <H2>
                  <Span aria-hidden="true">m</Span>
                  m
                  <Span aria-hidden="true">m</Span>
                </H2>
                <H2>
                  <Span aria-hidden="true">e</Span>
                  e
                  <Span aria-hidden="true">e</Span>
                </H2>
              </Article>
              <div className="animate__fadeInUp">
                <ContainerInput>
                  <InputText id="input0" type="text" value={name} onChange={({ target }) => { setName(target.value) }} required />
                  <label htmlFor="input0" >Name</label>
                  <span className="underline"></span>
                </ContainerInput>
                <ContainerInput>
                  <InputText id="input1" type="text" value={mail} onChange={({ target }) => { setMail(target.value) }} required />
                  <label htmlFor="input1" >Email</label>
                  <span className="underline"></span>
                </ContainerInput>
                <ContainerInput>
                  <TextArea id="input2" value={message} onChange={({ target }) => { setMessage(target.value) }} required ></TextArea>
                  <label htmlFor="input2" >Message</label>
                  <span className="underline"></span>
                </ContainerInput>
                <InputButton type="submit" disabled={loading} ><span>Send Message</span></InputButton>
              </div>
            </>
          }
        </Form>
        <ContactMap ref={map}>
          {showMap &&
            <Iframe>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105058.66985255587!2d-68.39524922662146!3d-34.627331825692565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1661709310308!5m2!1ses!2sar" width="100%" height="100%" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Iframe>
          }
        </ContactMap>
      </ContactIn>
    </ContainerGridForm>
  )
}