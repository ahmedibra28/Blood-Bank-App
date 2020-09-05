export default function DashboardValidate(values) {
  let errors = {};

  if (!values.from) {
    errors.from = 'Start Date is required';
  } else if (!values.to) {
    errors.to = 'End Date is required';
  } else if (values.from > values.to) {
    errors.to =
      'Please ensure that the End Date is greater than or equal to the Start Date.';
  }
  return errors;
}
