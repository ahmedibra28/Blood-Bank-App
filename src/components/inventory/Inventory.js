import React, { useState, useEffect } from "react";
import InventoryForm from './InventoryForm'
import InventoryList from './InventoryList'
import InventoryValidate from "../../validations/InventoryValidations";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getInventories,
  addInventory,
  deleteInventory,
  updateInventory,
} from "../../actions/inventoryActions"

const initialValues = {
    id: null,
    donor: "",
    hb: '',
    blood_group: '',
    blood_component: '',
    unit: '',
    bag: ''
}

function Inventory(props) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSebmitting] = useState(false);
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
    
      const handleUpdate = (e) => {
        setValues({
          ...values,
          id: e.id,
          donor: e.donor,
          hb: e.hb,
          blood_group: e.blood_group,
          blood_component: e.blood_component,
          unit: e.unit,
          bag: e.bag
          
        });
        setEdit(true);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(InventoryValidate(values));
        setIsSebmitting(true);
      }; 

      useEffect(() => {
        getInventories()
      }, [])


      useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {

          // const newValues = {
          //   id: values.id,
          //   donor: values.donor,
          //   hb: values.hb,
          //   blood_group: values.blood_group,
          //   blood_component: values.blood_component,
          //   unit: values.unit,
          //   bag:values.bag,
          // }

          edit ? updateInventory(values) : addInventory(values);
          console.log(values)
          setEdit(false);
          setValues({
            ...values,
            donor: "",
            hb: '',
            blood_group: '',
            blood_component: '',
            unit: '',
            bag: ''
          });
        }
      }, [errors]);

      
    return (
        <div className="row pt-4">
            <div className="col-md-4">
                <InventoryForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                errors={errors}
                values={values}
                />
            </div>
            <div className="col-md-8">
                <InventoryList
                handleUpdate={handleUpdate}
                deleteInventory={deleteInventory}
                inventories={inventories}
                />
            </div>
        </div>
    )
}

Inventory.propTypes = {
  getInventories: PropTypes.func.isRequired,
  addInventory: PropTypes.func.isRequired,
  deleteInventory: PropTypes.func.isRequired,
  updateInventory: PropTypes.func.isRequired,
  inventories: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  inventories: state.inventories.inventories
});

export default connect(mapStateToProps, {
  getInventories,
  addInventory,
  updateInventory,
  deleteInventory
})(Inventory);

