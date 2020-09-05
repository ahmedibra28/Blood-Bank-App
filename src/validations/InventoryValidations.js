export default function InventoryValidate(values) {
  let errors = {};
  // Register Validation

  if (!values.donor) {
    errors.donor = 'Donor is required';
  } else if (!values.hb) {
    errors.hb = 'HB is required';
  } else if (values.hb < 12.5) {
    errors.hb = 'Minimum value is 12';
  } else if (!/^[0-9.]*$/.test(values.hb)) {
    errors.hb = 'HB must be number only';
  } else if (!values.blood_group) {
    errors.blood_group = 'Blood Group is required';
  } else if (!values.blood_component) {
    errors.blood_component = 'Blood Component is required';
  } else if (!values.unit) {
    errors.unit = 'Unit is required';
  } else if (!/^[0-9]*$/.test(values.unit)) {
    errors.unit = 'Unit must be number only';
  } else if (values.unit < 250 || values.unit > 1000) {
    errors.unit = 'Unit must between 250mL and 1000mL';
  } else if (!values.bag) {
    errors.bag = 'Bag Number is required';
  }

  return errors;
}
