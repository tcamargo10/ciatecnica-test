export default function FormClientErrors(values) {
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

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.cel) {
    errors.cel = "Required";
  }

  if (values.expire && !values.expireDate) {
    errors.expireDate = "Required";
  }

  if (!values.status) {
    errors.status = "Required";
  }

  return errors;
}
