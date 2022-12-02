import { User } from "@/models";
import { Field, Form, Formik } from "formik";
import React from "react";
import "../CreateEmployee/styles/Forms.scss";
export interface CompletePerfilInterface {}

const CompletePerfil: React.FC<CompletePerfilInterface> = () => {
  const create = (values: User) => {
    console.log(values);
  };

  return (
    <div>
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
        onSubmit={create}
      >
        <div className="formContainer">
          <Form className="form">
            <label htmlFor="name">
              Nombre
              <Field name="name" type="text" id="name" />
            </label>

            <label htmlFor="lastname">
              Apellido
              <Field name="lastname" type="text" id="lastname" />
            </label>

            <label htmlFor="email">
              Email
              <Field name="mail" type="email" id="mail" />
            </label>

            <label htmlFor="dni">
              DNI
              <Field name="dni" type="text" id="dni" />
            </label>

            <label htmlFor="user">
              User
              <Field name="user" type="text" id="user" />
            </label>

            <label htmlFor="password">
              Password
              <Field name="password" type="password" id="password" />
            </label>

            <label htmlFor="rol">
              Rol
              <Field name="rol" as="select" id="rol">
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </Field>
            </label>

            <label htmlFor="birth">
              Fecha De Nacimiento
              <Field name="birth" type="text" id="birth" />
            </label>

            <label htmlFor="adress">
              Dirección
              <Field name="address" type="text" id="address" />
            </label>

            <label htmlFor="phone">
              Número Celular
              <Field name="phone" type="text" id="phone" />
            </label>

            <label htmlFor="vaccinated">
              Vacunación
              <Field name="vaccinated" as="select" id="vaccinated">
                <option value="true">Vacunado</option>
                <option value="false">No vacunado</option>
              </Field>
            </label>

            <label htmlFor="typeOfVaccine">
              Tipo de vacuna
              <Field name="typeOfVaccine" as="select" id="typeOfVaccine">
                <option value="Sputnik">Sputnik</option>
                <option value="AstraZeneca">AstraZeneca</option>
                <option value="Pfizer">Pfizer</option>
                <option value="Jhonson&Jhonson">Jhonson&Jhonson</option>
              </Field>
            </label>

            <label htmlFor="date">
              Fecha de vacunación
              <Field name="date" type="text" id="date" />
            </label>

            <label htmlFor="dosis">
              Numero de dosis
              <Field name="dosis" type="text" id="dosis" />
            </label>
            <button type="submit">Crear</button>
          </Form>
        </div>
      </Formik>
    </div>
  );
};

export default CompletePerfil;
