import React, { useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as Yup from "yup";
import Email from "./Email";
import { render } from "@react-email/render";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();
  // for validation
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Το όνομα σου είναι απαραίτητο."),
    petname: Yup.string().required(
      "Δεν πιστεύω να ξέχασες πως λένε το κατοικίδιο σου;"
    ),
    petage: Yup.string().required(
      "Ευαίσθητη ερώτηση, αλλά πρέπει να απαντήσεις!"
    ),
    pettype: Yup.string().required("Πρέπει να ξέρω!"),
    projectGoal: Yup.string().required("Χρειαζόμαστε μια διάγνωση."),
    vetname: Yup.string(),
    email: Yup.string()
      .required("Το email είναι απαραίτητο!")
      .email("Μη έγκυρη email διεύθυνση."),
    mobile: Yup.string().required("Πως θα επικοινωνήσω μαζί σου;"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const sandMail = () => {
    var params = {
      from_name   : document.getElementById("id_from_name").value,
      email_id    : document.getElementById("id_email_id").value,
      petname     : document.getElementById("id_petname").value,
      petage      : document.getElementById("id_petage").value,
      pettype     : document.getElementById("id_pettype").value,
      projectGoal : document.getElementById("id_projectGoal").value,
      vetname     : document.getElementById("id_vetname").value,
      mobile      : document.getElementById("id_mobile").value
    }
    //emailjs
      //.sendForm("service_cekj3z1", "template_glky4lt", form.current, {      
      //  publicKey: "5-h1SOGyHXyb7DPu6",
      emailjs.send("service_cekj3z1", "template_zpbvy6a", params, {      
          publicKey: "5-h1SOGyHXyb7DPu6",
      })
      .then((res) => {
        if (res.status == 200) {
          toast.success("Λάβαμε το μήνυμα σου και θα απαντήσουμε σύντομα!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.error("Κάτι δεν πήγε καλά, προσπάθησε ξανά.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };

  function onSubmit(data, e) {
    e.preventDefault();
    // display form data on success

    const formData = [
      { id: 1, question: "Πως σε λένε;", answer: data.name },
      {
        id: 2,
        question: "Ποιο είναι το όνομα του κατοικίδιου σου;",
        answer: data.petname,
      },
      { id: 3, question: "Τι ηλικία έχει;", answer: data.petage },
      { id: 4, question: "Τι ζωάκι είναι;", answer: data.pettype },
      { id: 5, question: "Ποιο είναι το email σου;", answer: data.email },
      {
        id: 6,
        question: "Περιέγραψε το πρόβλημα που αντιμετωπίζεις.",
        answer: data.projectGoal,
      },
      {
        id: 7,
        question: "Πως λέγεται ο/η κτηνίατρος σου;",
        answer: data.vetname,
      },
      { id: 8, question: "Το κινητό σου τηλέφωνο;", answer: data.mobile },
    ];
    //const emailHtml = render(
    //  <Email data={formData} name={data.name} email={data.email} />
    //);
    //document.getElementById("messageInput").value = emailHtml;
    sandMail();
    e.target.reset();
  }

  return (
    <>
      <form ref={form} style={{ display: "none" }}>
        <input type="text" readOnly id="messageInput" name="message" />
      </form>
      <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
        <div className="ptf-form-group">
          <label data-number="01">Πως σε λένε;</label>
          <input
            type="text"
            name="name"
            id="id_from_name"
            {...register("name")}
            className={`${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback">{errors.name?.message}</div>
          )}
        </div>
        {/* End .ptf-form-group */}

        <div className="ptf-form-group">
          <label data-number="02">
            Ποιο είναι το όνομα του κατοικίδιου σου;
          </label>
          <input
            type="text"
            name="petname"
            id="id_petname"
            {...register("petname")}
            className={`${errors.petname ? "is-invalid" : ""}`}
          />
          {errors.petname && (
            <div className="invalid-feedback">{errors.petname?.message}</div>
          )}
        </div>
        {/* End .ptf-form-group */}

        <div className="ptf-form-group">
          <label data-number="03">Τι ηλικία έχει;</label>
          <input
            type="text"
            name="petage"
            id="id_petage"
            {...register("petage")}
            className={`${errors.petage ? "is-invalid" : ""}`}
          />
          {errors.petage && (
            <div className="invalid-feedback">{errors.petage?.message}</div>
          )}
        </div>
        {/* End .ptf-form-group */}

        <div className="ptf-form-group">
          <label data-number="04">Τι ζωάκι είναι;</label>
          <select
            name="pettype"
            id="id_pettype"
            {...register("pettype")}
            className={`${errors.pettype ? "is-invalid" : ""}`}
          >
            <option value="Σκύλος">Σκύλος</option>
            <option value="Γάτα">Γάτα</option>
            <option value="άλλο θηλαστικό">Άλλο</option>
          </select>
          {errors.pettype && (
            <div className="invalid-feedback">{errors.pettype?.message}</div>
          )}
        </div>
        {/* End .ptf-form-group */}

        <div className="ptf-form-group">
          <label data-number="05">Ποιο είναι το email σου;</label>
          <input
            name="email"
            id="id_email_id"
            type="text"
            {...register("email")}
            className={` ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email?.message}</div>
          )}
        </div>
        {/* End .ptf-form-group */}

        <div className="ptf-form-group">
          <label data-number="06">
            Περιέγραψε το πρόβλημα που αντιμετωπίζεις.
          </label>
          <textarea
            type="text"
            name="projectGoal"
            id="id_projectGoal"
            {...register("projectGoal")}
            className={`${errors.projectGoal ? "is-invalid" : ""}`}
          />
          {errors.projectGoal && (
            <div className="invalid-feedback">
              {errors.projectGoal?.message}
            </div>
          )}
        </div>
        {/* End .ptf-form-group */}

        <div className="ptf-form-group">
          <label data-number="07">Πως λέγεται ο/η κτηνίατρος σου;</label>
          <input
            type="text"
            name="vetname"
            id="id_vetname"
            {...register("vetname")}
            className={`${errors.vetname ? "is-invalid" : ""}`}
          />
          {errors.vetname && (
            <div className="invalid-feedback">{errors.vetname?.message}</div>
          )}
        </div>
        {/* End .ptf-form-group */}

        <div className="ptf-form-group">
          <label data-number="08">Το κινητό σου τηλέφωνο;</label>
          <input
            type="text"
            name="mobile"
            id="id_mobile"
            {...register("mobile")}
            className={`${errors.mobile ? "is-invalid" : ""}`}
          />
          {errors.mobile && (
            <div className="invalid-feedback">{errors.mobile?.message}</div>
          )}
        </div>
        {/* End .ptf-form-group */}

        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>

        <button className="ptf-submit-button">
          Αποστολή
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 17 17"
          >
            <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
          </svg>
        </button>
        {/* End .ptf-submit-button */}
      </form>
    </>
  );
};

export default ContactForm;
