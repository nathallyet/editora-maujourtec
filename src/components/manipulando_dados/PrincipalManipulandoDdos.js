// Antes de virar um componente baseado em classe e obter o objeto state
// import React from "react";

// import Home from "./Home";

// const Principal = (props) => {

//   const tituloPagina = "Últimos lançamentos";
//   // const isbn = "978-85-7522-xxx-x";
//   // const titulo = "React";
//   // const autor = "Maujor";
//   const dados = [
//     { isbn: "978-85-75-22-xxx-x", titulo: "React", autor: "Maujor" },
//     { isbn: "978-85-75-22-776-3", titulo: "Design UX", autor: "Will" },
//     { isbn: "978-85-75-22-550-9", titulo: "Laravel para Ninjas", autor: "Jack" }
//   ]

//   return (
//     <main className="principal">
//       <Home
//         tituloPagina={tituloPagina}
//         // isbn={isbn}
//         // titudo={titulo}
//         // autor={autor} 
//         dados={dados}
//         >
//         <h3>Esse conteúdo é acessado através de props.children</h3>
//       </Home>
//     </main>
//   );
// };

// export default Principal;

import React, { Component } from "react";

import Home from "./HomeManipulandoDados";

class Principal extends Component {

  state = {
    tituloPagina: "Últimos lançamentos",
    dados: { isbn: "978-85-75-22-xxx-x", titulo: "React", autor: "Maujor" }
  }
  
  handleAlterarTitulo = () => {
    let titulo = "";
    this.state.tituloPagina === "Últimos lançamentos"
      ? (titulo = "Categoria Programação")
      : (titulo = "Últimos lançamentos");
    this.setState({ tituloPagina: titulo })
  }

  render() {
    return (
      <main className="principal">
      <Home
        tituloPagina={this.state.tituloPagina}
        dados={this.state.dados}
        onAlterarTitulo={this.handleAlterarTitulo}
        >
        <h3>Esse conteúdo é acessado através de props.children</h3>
      </Home>
    </main>
    );
  }
};

export default Principal;