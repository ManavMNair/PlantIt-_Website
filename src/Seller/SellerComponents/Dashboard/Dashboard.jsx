import React, { useState } from 'react';
import './Dashboard.css';
import NavbarSeller from '../../SellerComponents/NavbarSeller/NavbarSeller';
import Sidebar from '../Sidebar/Sidebar';
import AddProduct from '../AddProduct/AddProduct';
import ListProduct from '../ListProduct/ListProduct';
import EditProfile from '../EditProfile/EditProfile'
import OrderDetails from '../OrderDetails/OrderDetails'

const Dashboard = () => {
  // const [showAddProduct, setShowAddProduct] = useState(false);

  // const handleAddProductClick = () => {
  //   setShowAddProduct(true);
  // };
    const [selectedComponent,setSelectedComponent] = useState(null);

    const handleAddProductClick=()=>{
      setSelectedComponent('AddProduct');
    }

    const handleListProductClick = ()=>{
      setSelectedComponent('ListProduct');
    }
    const handleEditProfileClick = ()=>{
      setSelectedComponent('EditProfile');
    }
    const handleOrderDetailsClick = ()=>{
      setSelectedComponent('OrderDetails');
    }

  return (
    <div>
      <NavbarSeller />
      <div className="dashboard-main">
        <Sidebar onAddProductclick={handleAddProductClick} onListProductClick={handleListProductClick} onEditProfileclick= {handleEditProfileClick} onOrderDetailsClick={handleOrderDetailsClick}/>
        <div className="main-items">
          {selectedComponent === 'AddProduct' && <AddProduct/>}
          {selectedComponent === 'ListProduct' && <ListProduct/>}
          {selectedComponent === 'EditProfile' && <EditProfile/>}
          {selectedComponent === 'OrderDetails' && <OrderDetails/>}
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
