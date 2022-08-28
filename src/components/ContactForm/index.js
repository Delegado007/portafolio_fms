import React from "react";

export const ContactForm = () => {
  return (
    <div>
      <div>Mapa</div>
      <div>
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Name" />
          <textarea placeholder="Message" ></textarea>
          <input type="submit" name="Submit" />
        </form>
      </div>
    </div>
  )
}