import React from "react";
import ReactDOM from "react-dom";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Modal";
import styled from "styled-components";

class ModalFull extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: "",
      modalInputName: "",
      modalInputDate: "",
      modalInputNotes: "",
    };
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const date = target.date;
    const notes = target.notes;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(e) {
    this.setState({
      name: this.state.modalInputName,
      date: this.state.modalInputDate,
      notes: this.state.modalInputNotes,
    });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false,
    });
  }

  render() {
    return (
      <div>
        <ButtonStyle href="javascript:;" onClick={(e) => this.modalOpen(e)}>
          Neuen Eintrag hinzufügen
        </ButtonStyle>
        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
      
          <div className="form-group">
            <label>Stimmung:</label>
            <input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={(e) => this.handleChange(e)}
            
            />
            <label>Datum:</label>
            <input
              type="date"
              value={this.state.modalInputDate}
              name="modalInputDate"
              pattern='(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}'
              onChange={(e) => this.handleChange(e)}
            
            />
            <label>Notizen:</label>
            <input
              type="text"
              value={this.state.modalInputNotes}
              name="modalInputNotes"
              onChange={(e) => this.handleChange(e)}
             
            />
          </div>
          <div className="form-group">
            <button onClick={(e) => this.handleSubmit(e)} type="button">
              Speichern
            </button>
          </div>
        </Modal>
        <FullCardContent>
          <CardTitle>{this.state.name}</CardTitle>
          <CardTitle> {this.state.date}</CardTitle>
          <p>{this.state.notes}</p>
        </FullCardContent>
      </div>
    );
  }
}

export default ModalFull;

const ButtonStyle = styled.a`
  background: #f5f9f9;
  color: #509b9b;
  text-decoration: none;
  padding-top: 2.5rem;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 2.5rem;
  border: none;
  font-weight: bold;
  border-radius: 15px;

  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  height: 5rem;
`;

const FullCardContent = styled.div`
  border-radius: 15px;
  box-shadow: 0px 0px 8px #ccc;
  background: #f6f5fb;
  color: #4b417a;
  margin: 1rem;
  margin-top: 3rem;
  padding-top: 0.5rem;
  padding-bottom: 0.1rem;
`;

const CardTitle = styled.p`
  color: #4b417a;
  font-size: 14;
  margin: 8px 0 0 0;
  font-weight: 600;
`;
