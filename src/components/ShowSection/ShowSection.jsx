import React from "react";
import Section from "../Section/Section";
import { iconChat, iconMoney, iconSecurity } from "../../assets/icons";
import "./showsection.css";

// import iconChat from "../assets/img/icon-chat.png";
// import iconMoney from "../assets/img/icon-money.png";
// import iconSecurity from "../assets/img/icon-security.png";

function ShowSection() {
  return (
    <section className="show-section">
      <Section
        icon={iconChat}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <Section
        icon={iconMoney}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <Section
        icon={iconSecurity}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
}

export default ShowSection;
