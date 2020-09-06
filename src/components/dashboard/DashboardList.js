import React from 'react';

const DashboardList = ({ inventories_filter }) => {
  const totalPlasma =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_component === 'Plasma';
    });
  const totalPlatelet =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_component === 'Platelet';
    });
  const totalRBC =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_component === 'RBC';
    });
  const totalWholeBlood =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_component === 'Whole Blood';
    });

  // Display Blood Groups
  const totalAPlus =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_group === 'A+';
    });
  const totalAMinus =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_group === 'A-';
    });
  const totalBPlus =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_group === 'B+';
    });
  const totalBMinus =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_group === 'B-';
    });
  const totalABPlus =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_group === 'AB+';
    });
  const totalABMinus =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_group === 'AB-';
    });
  const totalOPlus =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_group === 'O+';
    });
  const totalOMinus =
    inventories_filter &&
    inventories_filter.filter((inv) => {
      return inv.blood_group === 'O-';
    });

  return (
    <div>
      {/* <h3 className='text-center form-title mb-4'>Dashboard Charts</h3> */}
      <hr />

      <div className='row mb-5'>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>Plasma</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalPlasma && totalPlasma.length}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>Platelet</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalPlatelet && totalPlatelet.length}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>RBC</div>
            <div className='card-body'>
              <p className='btn btn-primary'>{totalRBC && totalRBC.length}</p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>Whole Blood</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalWholeBlood && totalWholeBlood.length}
              </p>
            </div>
          </div>
        </div>

        {/* Blood Group */}
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>A+</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalAPlus && totalAPlus.length}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>B+</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalBPlus && totalBPlus.length}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>AB+</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalABPlus && totalABPlus.length}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>O+</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalOPlus && totalOPlus.length}
              </p>
            </div>
          </div>
        </div>

        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>A-</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalAMinus && totalAMinus.length}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>B-</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalBMinus && totalBMinus.length}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>AB-</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalABMinus && totalABMinus.length}
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-3 py-1'>
          <div className='card text-center shadow-lg'>
            <div className='card-header light-blue'>O-</div>
            <div className='card-body'>
              <p className='btn btn-primary'>
                {totalOMinus && totalOMinus.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardList;
