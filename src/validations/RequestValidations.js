export default function RequestValidate(values) {
    let errors = {};
    // Register Validation
  
    if (!values.patient_id) {
      errors.patient_id = "Patient ID is required";
    } else if (!values.patient_name) {
        errors.patient_name = "Patient name is required";
    } else if (!values.blood_group) {
        errors.blood_group = "Blood Group is required";
    } 
  
    return errors;
  }
  