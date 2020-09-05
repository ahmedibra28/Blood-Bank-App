export default function TakeValidate(values) {
  let errors = {};
  // Register Validation

  if (!values.patient_id) {
    errors.patient_id = 'Patient ID is required';
  }

  return errors;
}
