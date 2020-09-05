import React, { useState, useEffect } from 'react';
import TakeForm from './TakeForm';
import TakeList from './TakeList';
import TakeValidate from '../../validations/TakeValidations';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getTakes,
  addTake,
  deleteTake,
  updateTake,
} from '../../actions/takeActions';
import { getRequests, updateRequest } from '../../actions/requestActions';
import {
  getInventories,
  updateInventory,
} from '../../actions/inventoryActions';

const initialValues = {
  id: null,
  patient_id: '',
  plasma: '',
  platelet: '',
  rbc: '',
  whole_blood: '',
};

function Take(props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [edit, setEdit] = useState(false);

  const {
    takes,
    deleteTake,
    getTakes,
    addTake,
    updateTake,
    getRequests,
    getInventories,
    updateInventory,
    requests,
    inventories,
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
      plasma: e.plasma,
      platelet: e.platelet,
      rbc: e.rbc,
      whole_blood: e.whole_blood,
    });
    setEdit(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(TakeValidate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    getTakes();
    getRequests();
    getInventories();
  }, []);

  const validatePlasma = () => {
    const plasma =
      values.plasma &&
      inventories.find((inv) => {
        return inv.bag === values.plasma;
      });
    const newPlasmaValue = {
      id: plasma.id,
      blood_component: plasma.blood_component,
      status: 'Issued',
      bag: plasma.bag,
      blood_group: plasma.blood_group,
      donor: plasma.donor,
      hb: plasma.hb,
      unit: plasma.unit,
    };
    values.plasma && updateInventory(newPlasmaValue);

    const requestPlasma =
      values.plasma &&
      requests.find((req) => {
        return req.id === parseInt(values.patient_id);
      });
    const newRequestPlasma = {
      id: requestPlasma.id,
      patient_id: requestPlasma.patient_id,
      patient_name: requestPlasma.patient_name,
      plasma: parseInt(requestPlasma.plasma) - 1,
      platelet: requestPlasma.platelet,
      rbc: requestPlasma.rbc,
      whole_blood: requestPlasma.whole_blood,
      blood_group: requestPlasma.blood_group,
    };
    values.plasma && updateRequest(newRequestPlasma);
  };

  const validatePlatelet = () => {
    const platelet =
      values.platelet &&
      inventories.find((inv) => {
        return inv.bag === values.platelet;
      });
    const newPlateletValue = {
      id: platelet.id,
      blood_component: platelet.blood_component,
      status: 'Issued',
      bag: platelet.bag,
      blood_group: platelet.blood_group,
      donor: platelet.donor,
      hb: platelet.hb,
      unit: platelet.unit,
    };
    values.platelet && updateInventory(newPlateletValue);

    const requestPlatelet =
      values.platelet &&
      requests.find((req) => {
        return req.id === parseInt(values.patient_id);
      });
    const newRequestPlatelet = {
      id: requestPlatelet.id,
      patient_id: requestPlatelet.patient_id,
      patient_name: requestPlatelet.patient_name,
      plasma: requestPlatelet.plasma,
      platelet: parseInt(requestPlatelet.platelet) - 1,
      rbc: requestPlatelet.rbc,
      whole_blood: requestPlatelet.whole_blood,
      blood_group: requestPlatelet.blood_group,
    };
    values.platelet && updateRequest(newRequestPlatelet);
  };

  const validateRBC = () => {
    const rbc =
      values.rbc &&
      inventories.find((inv) => {
        return inv.bag === values.rbc;
      });
    const newRBCValue = {
      id: rbc.id,
      blood_component: rbc.blood_component,
      status: 'Issued',
      bag: rbc.bag,
      blood_group: rbc.blood_group,
      donor: rbc.donor,
      hb: rbc.hb,
      unit: rbc.unit,
    };
    values.rbc && updateInventory(newRBCValue);

    const requestRBC =
      values.rbc &&
      requests.find((req) => {
        return req.id === parseInt(values.patient_id);
      });
    const newRequestRBC = {
      id: requestRBC.id,
      patient_id: requestRBC.patient_id,
      patient_name: requestRBC.patient_name,
      plasma: requestRBC.plasma,
      platelet: requestRBC.platelet,
      rbc: parseInt(requestRBC.rbc) - 1,
      whole_blood: requestRBC.whole_blood,
      blood_group: requestRBC.blood_group,
    };
    values.rbc && updateRequest(newRequestRBC);
  };

  const validateWholeBlood = () => {
    const whole_blood =
      values.whole_blood &&
      inventories.find((inv) => {
        return inv.bag === values.whole_blood;
      });
    const newWholeBloodValue = {
      id: whole_blood.id,
      blood_component: whole_blood.blood_component,
      status: 'Issued',
      bag: whole_blood.bag,
      blood_group: whole_blood.blood_group,
      donor: whole_blood.donor,
      hb: whole_blood.hb,
      unit: whole_blood.unit,
    };
    values.whole_blood && updateInventory(newWholeBloodValue);

    const requestWholeBlood =
      values.whole_blood &&
      requests.find((req) => {
        return req.id === parseInt(values.patient_id);
      });
    const newRequestWholeBlood = {
      id: requestWholeBlood.id,
      patient_id: requestWholeBlood.patient_id,
      patient_name: requestWholeBlood.patient_name,
      plasma: requestWholeBlood.plasma,
      platelet: requestWholeBlood.platelet,
      rbc: requestWholeBlood.rbc,
      whole_blood: parseInt(requestWholeBlood.whole_blood) - 1,
      blood_group: requestWholeBlood.blood_group,
    };
    values.whole_blood && updateRequest(newRequestWholeBlood);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // related to plasma
      validatePlasma();

      // related to platelet
      validatePlatelet();

      // related to RBC
      validateRBC();

      // related to WholeBlood
      validateWholeBlood();

      edit ? updateTake(values) : addTake(values);

      setEdit(false);
      setValues({
        ...values,
        patient_id: '',
        plasma: '',
        platelet: '',
        rbc: '',
        whole_blood: '',
      });
    }
  }, [errors]);
  const patientIdToName = (id) =>
    requests && requests.map((req) => req.id === id && req.patient_id);
  return (
    <div className='row pt-4'>
      <div className='col-md-4'>
        <TakeForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          values={values}
          requests={requests}
          inventories={inventories}
        />
      </div>
      <div className='col-md-8'>
        <TakeList
          handleUpdate={handleUpdate}
          deleteTake={deleteTake}
          takes={takes}
          patientIdToName={patientIdToName}
        />
      </div>
    </div>
  );
}

Take.propTypes = {
  getTakes: PropTypes.func.isRequired,
  getRequests: PropTypes.func.isRequired,
  getInventories: PropTypes.func.isRequired,
  addTake: PropTypes.func.isRequired,
  deleteTake: PropTypes.func.isRequired,
  updateTake: PropTypes.func.isRequired,
  updateInventory: PropTypes.func.isRequired,
  updateRequest: PropTypes.func.isRequired,
  takes: PropTypes.array.isRequired,
  requests: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  takes: state.takes.takes,
  requests: state.requests.requests,
  inventories: state.inventories.inventories,
});

export default connect(mapStateToProps, {
  getTakes,
  addTake,
  updateTake,
  deleteTake,
  getRequests,
  getInventories,
  updateInventory,
  updateRequest,
})(Take);
