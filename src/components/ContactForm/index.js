import React from "react";
import { useNearScreen } from '@hoocks/useNearScreen';
import { ContainerGridForm, ContactIn, Article, H2, Span, ContactMap, Form, ContainerInput, InputText, TextArea, InputButton } from "./styles";


export const ContactForm = () => {
  const [showForm, form] = useNearScreen()
  const [showMap, map] = useNearScreen()
  console.log(showMap)
  return (
    <ContainerGridForm id="contact_form">
      <ContactIn>
        <Form ref={form}>
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
                  <InputText id="input0" type="text" required />
                  <label htmlFor="input0" >Name</label>
                  <span className="underline"></span>
                </ContainerInput>
                <ContainerInput>
                  <InputText id="input1" type="text" required />
                  <label htmlFor="input1" >Email</label>
                  <span className="underline"></span>
                </ContainerInput>
                <ContainerInput>
                  <TextArea id="input2" required ></TextArea>
                  <label htmlFor="input2" >Message</label>
                  <span className="underline"></span>
                </ContainerInput>
                <InputButton type="submit" ><span>Send Message</span></InputButton>
              </div>
            </>
          }
        </Form>
        <ContactMap ref={map}>
          {showMap &&

            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d105058.66985255587!2d-68.39524922662146!3d-34.627331825692565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1661709310308!5m2!1ses!2sar" className="animate__flipInX" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          }
        </ContactMap>
      </ContactIn>
    </ContainerGridForm>
  )
}