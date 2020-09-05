import React from 'react';

const DashboardList = ({ inventories, deleteInventory }) => {
  return (
    <div>
      {/* <h3 className='text-center form-title mb-4'>Dashboard Charts</h3> */}
      <hr />

      <div className='row mb-5'>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>Plasma</div>
            <div className='card-body'>
              <p className='btn btn-primary'>6,234</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>Platelet</div>
            <div className='card-body'>
              <p className='btn btn-primary'>5,323</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>RBC</div>
            <div className='card-body'>
              <p className='btn btn-primary'>1,898</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>Whole Blood</div>
            <div className='card-body'>
              <p className='btn btn-primary'>12,734</p>
            </div>
          </div>
        </div>

        {/* Blood Group */}
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>A+</div>
            <div className='card-body'>
              <p className='btn btn-primary'>6,234</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>B+</div>
            <div className='card-body'>
              <p className='btn btn-primary'>5,323</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>AB+</div>
            <div className='card-body'>
              <p className='btn btn-primary'>1,898</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>O+</div>
            <div className='card-body'>
              <p className='btn btn-primary'>12,734</p>
            </div>
          </div>
        </div>

        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>A-</div>
            <div className='card-body'>
              <p className='btn btn-primary'>6,234</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>B-</div>
            <div className='card-body'>
              <p className='btn btn-primary'>5,323</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>AB-</div>
            <div className='card-body'>
              <p className='btn btn-primary'>1,898</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>O-</div>
            <div className='card-body'>
              <p className='btn btn-primary'>12,734</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardList;
