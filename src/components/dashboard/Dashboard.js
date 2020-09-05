import React, { useState, useEffect } from 'react';
import DashboardForm from './DashboardForm';
import DashboardList from './DashboardList';
import DashboardValidate from '../../validations/DashboardValidations';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  getInventories,
  addInventory,
  deleteInventory,
  updateInventory,
} from '../../actions/inventoryActions';

const initialValues = {
  from: '',
  to: '',
};

function Dashboard(props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [edit, setEdit] = useState(false);

  const {
    inventories,
    deleteInventory,
    getInventories,
    addInventory,
    updateInventory,
  } = props;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(DashboardValidate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    getInventories();
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // Search if everything is okay
      console.log(values);
    }
  }, [errors]);

  return (
    <div className='row pt-4'>
      <div className='col-md-12'>
        <DashboardForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
          values={values}
        />
      </div>
      <div className='col-md-12'>
        <DashboardList
          deleteInventory={deleteInventory}
          inventories={inventories}
        />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  getInventories: PropTypes.func.isRequired,
  addInventory: PropTypes.func.isRequired,
  deleteInventory: PropTypes.func.isRequired,
  updateInventory: PropTypes.func.isRequired,
  inventories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  inventories: state.inventories.inventories,
});

export default connect(mapStateToProps, {
  getInventories,
  addInventory,
  updateInventory,
  deleteInventory,
})(Dashboard);
