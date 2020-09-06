import React from 'react';

function DashboardForm({ handleChange, handleSubmit, values, errors }) {
  return (
    <form onSubmit={handleSubmit} autoComplete='off'>
      <div className='row gy-2'>
        <h3 className='text-center form-title mb-4'>Dashboard</h3>

        <div className='row'>
          <div className='col-md-5'>
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
              <input
                name='from'
                onChange={handleChange}
                type='date'
                value={values.from}
                className='form-control py-2'
                placeholder='Enter from name'
              />
            </div>
            {errors.from && (
              <div className='form-text text-danger text-right'>
                {errors.from}
              </div>
            )}
          </div>

          <div className='col-md-5'>
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
              <input
                name='to'
                onChange={handleChange}
                type='date'
                value={values.to}
                className='form-control py-2'
                placeholder='Enter to name'
              />
            </div>
            {errors.to && (
              <div className='form-text text-danger text-right'>
                {errors.to}
              </div>
            )}
          </div>

          <div className='col-md-2 text-right'>
            <button type='submit' className='btn btn-primary shadow searchBtn'>
              <svg
                viewBox='0 0 20 20'
                fill='currentColor'
                className='search w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default DashboardForm;
