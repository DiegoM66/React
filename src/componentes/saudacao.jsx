import React, {Component} from 'react';
export default class saudacao extends Component{
        state = {
            tipo : this.props.tipo,
            nome : this.props.nome
        };
        setTipo(e) {this.setState({tipo: e.target.value})};
        setNome(e) {this.setState({tipo: e.target.value})};

        render(){
            const { tipo, nome } = this.state
        return <div>
            <h1>{tipo} {nome}</h1>
            <br></br>
            <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}></input>
            <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}></input>
        </div>
    }
}