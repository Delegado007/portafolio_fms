import React from "react";
import { useNearScreen } from '@hoocks/useNearScreen';
import { ContainerGridForm, ContactIn, Article, H2, Span, ContactMap, Form, InputText, TextArea, InputButton } from "./styles";


export const ContactForm = () => {
  const [showForm, form] = useNearScreen()
  const [showMap, map] = useNearScreen()
  console.log(showMap)
  return (
    <ContainerGridForm>
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
                  <Span aria-hidden="true">u</Span>
                  u
                  <Span aria-hidden="true">u</Span>
                </H2>
                <H2>
                  <Span aria-hidden="true">s</Span>
                  s
                  <Span aria-hidden="true">s</Span>
                </H2>
              </Article>
              <form className="animate__fadeInUp">
                <InputText type="text" placeholder="Name" />
                <InputText type="text" placeholder="Name" />
                <TextArea placeholder="Message" ></TextArea>
                <InputButton type="submit">Send</InputButton>
              </form>
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