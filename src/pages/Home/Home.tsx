import { Botton, Navbar } from "@/components";
import { AppStore } from "@/redux/store";
import { HomeLayout } from "@/styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardEmployee } from "./components";
export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  const userLogin = useSelector((store: AppStore) => store.employeLogin);
  return (
    <>
      <Navbar name={userLogin[0].name} />
      <HomeLayout>
			<h2 style={{color: "tomato" }}>✨Datos del usuario!!</h2>

        <CardEmployee
          id={userLogin[0].id}
          name={userLogin[0].name}
          lastname={userLogin[0].lastname}
          dni={userLogin[0].dni}
          mail={userLogin[0].mail}
          user={userLogin[0].user}
          password={userLogin[0].password}
          rol={userLogin[0].rol}
          birth={userLogin[0].birth}
          address={userLogin[0].address}
          phone={userLogin[0].phone}
          vaccinated={userLogin[0].vaccinated}
          typeOfVaccine={userLogin[0].typeOfVaccine}
          date={userLogin[0].date}
          dosis={userLogin[0].dosis}
        />
				<Link to={"/completePerfil"}>
				<Botton name="Editar Usuario"/>
				</Link>
      </HomeLayout>
    </>
  );
};

export default Home;
