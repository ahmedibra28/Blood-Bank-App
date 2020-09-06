import React, { useState, useEffect } from 'react';
import DashboardForm from './DashboardForm';
import DashboardList from './DashboardList';
import DashboardValidate from '../../validations/DashboardValidations';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getInventoriesDashboard } from '../../actions/inventoryActions';

const initialValues = {
  from: '',
  to: '',
};

function Dashboard(props) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [edit, setEdit] = useState(false);

  const { inventories_filter, getInventoriesDashboard } = props;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(DashboardValidate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    getInventoriesDashboard(values.from, values.to);
  }, []);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // Search if everything is okay
      getInventoriesDashboard(values.from, values.to);

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
        <DashboardList inventories_filter={inventories_filter} />
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  getInventoriesDashboard: PropTypes.func.isRequired,
  inventories_filter: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  inventories_filter: state.inventories.inventories_filter,
});

export default connect(mapStateToProps, {
  getInventoriesDashboard,
})(Dashboard);
