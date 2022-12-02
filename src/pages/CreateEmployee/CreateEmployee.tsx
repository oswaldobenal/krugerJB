import { Employees } from "@/data";
import { User } from "@/models";
import { ErrorMessage, Field, Form, Formik, yupToFormErrors } from "formik";
import React from "react";
import "./styles/Forms.scss";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export interface CreateEmployeeInterface {}

const CreateEmployee: React.FC<CreateEmployeeInterface> = () => {
  const navigate = useNavigate();
  const create = (values: User) => {
    const ced = Employees.filter((el) => el.dni === values.dni);
    const id = Employees.filter((el) => el.id === values.id);
    //Alta de usuarios y passwords
    const empleado: User = {
      id: values.id,
      name: values.name,
      lastname: values.lastname,
      dni: values.dni,
      mail: values.mail,
      user: values.mail,
      password: values.dni,
      rol: values.rol,
      birth: values.birth,
      address: values.address,
      phone: values.phone,
      vaccinated: values.vaccinated,
      typeOfVaccine: values.typeOfVaccine,
      date: values.date,
      dosis: values.dosis,
    };

    //validacion de id unico.
    if (id.length) {
      alert("Este Id ya se encuentra registrado.");
    } //validacion de la cedula unica antes de crear el nuevo empleado.
    else if (ced.length) {
      alert("La cedula ya se encuentra registrada.");
    } else {
      Employees.push(empleado);
      alert("Empleado registrado exitosamente");
      navigate("/adminHome");
    }
  };

  //Esquema de validacion del formulario con YUP y Formik
  const validationSchema = Yup.object({
    id: Yup.string().required("Id es requerido"),
    name: Yup.string().required("Ingrese un nombre"),
    lastname: Yup.string().required("Ingrese un apellido"),
    mail: Yup.string().required("Ingrese un email").email("Email incorrecto"),
    dni: Yup.string()
      .required("Ingrese su DNI")
      .min(10, "La cedula debe tener 10 digitos")
      .max(10, "La cedula debe tener 10 digitos"),
  });
  return (
    <>
      <Formik
        initialValues={{
          id: "",
          name: "",
          lastname: "",
          dni: "",
          mail: "",
          user: "",
          password: "",
          rol: "",
          birth: "",
          address: "",
          phone: "",
          vaccinated: true,
          typeOfVaccine: "",
          date: "",
          dosis: 0,
        }}
        validationSchema={validationSchema}
        onSubmit={create}
      >
        {({ errors, touched }) => (
          <div className="formContainer">
            <Form className="form">
              <label htmlFor="id">
                Id
                <Field name="id" type="text" id="id" />
              </label>
              {errors.id && touched.id ? <div>{errors.id}</div> : null}

              <label htmlFor="name">
                Nombre
                <Field name="name" type="text" id="name" />
              </label>
              {errors.name && touched.name ? <div>{errors.name}</div> : null}

              <label htmlFor="lastname">
                Apellido
                <Field name="lastname" type="text" id="lastname" />
              </label>
              {errors.lastname && touched.lastname ? (
                <div>{errors.lastname}</div>
              ) : null}

              <label htmlFor="email">
                Email
                <Field name="mail" type="email" id="mail" />
              </label>
              {errors.mail && touched.mail ? <div>{errors.mail}</div> : null}

              <label htmlFor="dni">
                DNI
                <Field name="dni" type="number" id="dni" />
              </label>
              <ErrorMessage
                name="dni"
                component={() => <div>{errors.dni}</div>}
              />

              <button type="submit">Crear</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default CreateEmployee;
