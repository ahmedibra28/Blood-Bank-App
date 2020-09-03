import React, { useState, useEffect } from "react";
import RequestForm from './RequestForm'
import RequestList from './RequestList'
import RequestValidate from "../../validations/RequestValidations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getRequests,
  addRequest,
  deleteRequest,
  updateRequest,
} from "../../actions/requestActions"

const initialValues = {
    id: null,
    patient_id: "",
    patient_name: "",
    blood_group: '',
    plasma: '',
    platelet: '',
    rbc: '',
    whole_blood: ''
}

function Request(props) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSebmitting] = useState(false);
    const [edit, setEdit] = useState(false);


    const {
      requests,
      deleteRequest,
      getRequests,
      addRequest,
      updateRequest,
    } = props;

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      const handleUpdate = (e) => {
        setValues({
          ...values,
          id: e.id,
          patient_id: e.patient_id,
          patient_name: e.patient_name,
          blood_group: e.blood_group,
          plasma: e.plasma,
          platelet: e.platelet,
          rbc: e.rbc,
          whole_blood: e.whole_blood
          
        });
        setEdit(true);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(RequestValidate(values));
        setIsSebmitting(true);
      }; 

      useEffect(() => {
        getRequests()
      }, [])


      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {

          edit ? updateRequest(values) : addRequest(values);
          console.log(values)
          setEdit(false);
          setValues({
            ...values,
            patient_id: "",
            patient_name: "",
            blood_group: '',
            plasma: '',
            platelet: '',
            rbc: '',
            whole_blood: ''
          });
        }
      }, [errors]);

      
    return (
        <div className="row pt-4">
            <div className="col-md-4">
                <RequestForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                values={values}
                />
            </div>
            <div className="col-md-8">
                <RequestList
                handleUpdate={handleUpdate}
                deleteRequest={deleteRequest}
                requests={requests}
                />
            </div>
        </div>
    )
}

Request.propTypes = {
  getRequests: PropTypes.func.isRequired,
  addRequest: PropTypes.func.isRequired,
  deleteRequest: PropTypes.func.isRequired,
  updateRequest: PropTypes.func.isRequired,
  requests: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  requests: state.requests.requests
});

export default connect(mapStateToProps, {
  getRequests,
  addRequest,
  updateRequest,
  deleteRequest
})(Request);

