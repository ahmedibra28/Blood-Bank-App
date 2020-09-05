import React from 'react';

function TakeForm({
  handleChange,
  handleSubmit,
  values,
  errors,
  requests,
  inventories,
}) {
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className='row gy-2'>
        <h3 className='text-center form-title mb-4'>Taking</h3>
        <hr className='mt-0' />

        <div className='input-group'>
          <span className='input-group-text' id='basic-addon1'>
            <svg
              viewBox='0 0 20 20'
              fill='currentColor'
              className='identification w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
          </span>

          <select
            name='patient_id'
            onChange={handleChange}
            value={values.patient_id}
            className='form-control py-2'
          >
            <option value='' disabled>
              Patient ID...
            </option>
            {requests &&
              requests.map((request) => {
                if (
                  request.plasma > 0 ||
                  request.platelet > 0 ||
                  request.rbc > 0 ||
                  request.whole_blood > 0
                ) {
                  return (
                    <option key={request.id} value={request.id}>
                      {request.patient_id}
                    </option>
                  );
                }
              })}
          </select>
        </div>
        {errors.patient_id && (
          <div className='form-text text-danger text-right'>
            {errors.patient_id}
          </div>
        )}

        {requests &&
          requests.map((request) => {
            if (
              request.plasma > 0 &&
              request.id === parseInt(values.patient_id)
            ) {
              return (
                <div className='input-group' key={request.id}>
                  <span className='input-group-text' id='basic-addon1'>
                    <svg
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='hashtag w-6 h-6'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  <select
                    name='plasma'
                    onChange={handleChange}
                    value={values.plasma}
                    className='form-control py-2'
                  >
                    <option value='' disabled>
                      Plasma...
                    </option>
                    {inventories &&
                      inventories.map((inventory) => {
                        if (
                          inventory.blood_component === 'Plasma' &&
                          inventory.status === 'Stock'
                        ) {
                          return (
                            <option key={inventory.id} value={inventory.bag}>
                              {inventory.bag}
                            </option>
                          );
                        }
                      })}
                  </select>
                </div>
              );
            }
          })}

        {requests &&
          requests.map((request) => {
            if (
              request.platelet > 0 &&
              request.id === parseInt(values.patient_id)
            ) {
              return (
                <div className='input-group' key={request.id}>
                  <span className='input-group-text' id='basic-addon1'>
                    <svg
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='hashtag w-6 h-6'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  <select
                    name='platelet'
                    onChange={handleChange}
                    value={values.platelet}
                    className='form-control py-2'
                  >
                    <option value='' disabled>
                      Platelet...
                    </option>
                    {inventories &&
                      inventories.map((inventory) => {
                        if (
                          inventory.blood_component === 'Platelet' &&
                          inventory.status === 'Stock'
                        ) {
                          return (
                            <option key={inventory.id} value={inventory.bag}>
                              {inventory.bag}
                            </option>
                          );
                        }
                      })}
                  </select>
                </div>
              );
            }
          })}

        {requests &&
          requests.map((request) => {
            if (request.rbc > 0 && request.id === parseInt(values.patient_id)) {
              return (
                <div className='input-group' key={request.id}>
                  <span className='input-group-text' id='basic-addon1'>
                    <svg
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='hashtag w-6 h-6'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  <select
                    name='rbc'
                    onChange={handleChange}
                    value={values.rbc}
                    className='form-control py-2'
                  >
                    <option value='' disabled>
                      RBC...
                    </option>
                    {inventories &&
                      inventories.map((inventory) => {
                        if (
                          inventory.blood_component === 'RBC' &&
                          inventory.status === 'Stock'
                        ) {
                          return (
                            <option key={inventory.id} value={inventory.bag}>
                              {inventory.bag}
                            </option>
                          );
                        }
                      })}
                  </select>
                </div>
              );
            }
          })}

        {requests &&
          requests.map((request) => {
            if (
              request.whole_blood > 0 &&
              request.id === parseInt(values.patient_id)
            ) {
              return (
                <div className='input-group' key={request.id}>
                  <span className='input-group-text' id='basic-addon1'>
                    <svg
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='hashtag w-6 h-6'
                    >
                      <path
                        fillRule='evenodd'
                        d='M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </span>
                  <select
                    name='whole_blood'
                    onChange={handleChange}
                    value={values.whole_blood}
                    className='form-control py-2'
                  >
                    <option value='' disabled>
                      Whole Blood...
                    </option>
                    {inventories &&
                      inventories.map((inventory) => {
                        if (
                          inventory.blood_component === 'Whole Blood' &&
                          inventory.status === 'Stock'
                        ) {
                          return (
                            <option key={inventory.id} value={inventory.bag}>
                              {inventory.bag}
                            </option>
                          );
                        }
                      })}
                  </select>
                </div>
              );
            }
          })}

        <div className='input-group mx-auto d-block text-right mt-2'>
          <button
            type='submit'
            className='btn-submit btn btn-primary shadow p-2 px-4'
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default TakeForm;
