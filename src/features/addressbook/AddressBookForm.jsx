import React, { Component } from "react";
import { Segment, Form, Button, Header } from "semantic-ui-react";
import { create, update, deletee } from "../actions";
import cuid from "cuid";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../app/common/form/TextInput";
import { isRequired, combineValidators } from "revalidate";

const mapState = (state, ownProps) => {
  const addressId = ownProps.match.params.id;
  let address = {};
  if (addressId && state.test.length > 0) {
    address = state.test.filter(addr => addr.id === addressId)[0];
  }
  return {
    initialValues: address
  };
};

const actions = {
  create,
  update,
  deletee
};
const validate = combineValidators({
  fName: isRequired({ message: "First Name is required" }),
  lName: isRequired({ message: "Last Name is required" })
});

class AddressBookForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.update(values);
      //this.props.history.goBack();
      this.props.history.push("/");
    } else {
      const newAddress = {
        ...values,
        id: cuid()
      };
      this.props.create(newAddress);
      //this.props.history.goBack();
      this.props.history.push("/");
    }
  };
  handleDlete = () => {
    const id = this.props.initialValues.id;
    this.props.deletee(id);
    this.props.history.push("/");
  };
  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <Segment>
        <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
          <Header sub color="teal" content="Details" />
          <Field
            name="fName"
            type="text"
            component={TextInput}
            placeholder="Give your First a name"
          />
          <Field
            name="lName"
            type="text"
            component={TextInput}
            placeholder="Give your Last a name"
          />

          <Button
            positive
            type="submit"
            disabled={invalid || submitting || pristine}
          >
            Submit
          </Button>
          <Button
            onClick={this.handleDlete}
            type="button"
            disabled={invalid || submitting}
            content="Delete"
            color="red"
          />
        </Form>
      </Segment>
    );
  }
}
export default connect(
  mapState,
  actions
)(
  reduxForm({ form: "addressBookForm", enableReinitialize: true, validate })(
    AddressBookForm
  )
);
