export default function FormClientProfileErrors(values) {
  const errors = {};

  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.firstname) {
    errors.firstname = "Required";
  }

  if (!values.lastname) {
    errors.lastname = "Required";
  }

  return errors;
}
