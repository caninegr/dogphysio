import * as React from "react";
import { Html } from "@react-email/html";

import { Section, Column, Row, CodeInline } from "@react-email/components";
import { Link, Hr } from "@react-email/components";
export function Email({ data, name, email }) {
  return (
    <Html lang="en">
      <Section style={{ marginBottom: "40px" }}>
        Hello, You have a new contact form submission from your website: Name:{" "}
        <span style={{ fontWeight: "600px" }}>{name}</span>, Email:{" "}
        <Link href={`mailto:${email}`}>{email}</Link>
      </Section>
      <Hr />
      Message:
      <Section style={{ marginTop: "20px" }}>
        <Row style={{ backgroundColor: "#f2f3f4" }}>
          <Column style={{ width: "30px", padding: "4px 6px" }}>id</Column>
          <Column style={{ width: "calc(50% - 30px)", padding: "4px 6px" }}>
            Question
          </Column>
          <Column style={{ width: "50%", padding: "4px 6px" }}>Answer</Column>
        </Row>
        {data.map((elm, i) => (
          <Row
            key={i}
            style={{
              width: "100%",
              backgroundColor: i % 2 ? "#f2f3f4" : "fff",
            }}
          >
            <Column style={{ width: "30px", padding: "4px 6px" }}>
              {elm.id}
            </Column>
            <Column style={{ width: "calc(50% - 30px)", padding: "4px 6px" }}>
              {elm.question}
            </Column>
            <Column style={{ width: "50%", padding: "4px 6px" }}>
              {elm.answer}
            </Column>
          </Row>
        ))}
      </Section>
    </Html>
  );
}

export default Email;
