import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  selectUserAddress,
  selectUserOrderHistory
} from '../../redux/user-info/user-info.selectors';
import Loader from '../../components/loader/loader';
import './user-page.scss';
import HistoryItems from '../../components/history-items/history-items';
import AddAddressForm from '../../components/add-address-form/add-address-form';
const UserPage = ({ currentUser, userAddress, userOrderHistory }) => {
  const [isShow, setisShow] = useState(false);
  const handleToggleShow = () => {
    setisShow(!isShow);
  };
  return currentUser ? (
    <div className="user-page">
      <div className="head">
        <h3>My Account</h3>
      </div>
      <div className="body">
        <div className="user-activity">
          <h3>Order History</h3>
          <div className="info">
            {userOrderHistory ? (
              userOrderHistory.map(hist => (
                <HistoryItems key={hist.orderId} histori={hist} />
              ))
            ) : (
              <p>You haven't placed any orders yet.</p>
            )}
          </div>
        </div>
        <div className="address">
          <h3>Address</h3>
          <h4>{userAddress ? userAddress.firstName: null}</h4>
          <div className="info">
            {userAddress ? (
              <div className="add">
                <p>
                  {userAddress.address} <br />
                  {userAddress.city}, {userAddress.region},{' '}
                  {userAddress.country}
                </p>
                <br />
                <p>
                  <span>Phone:</span> {userAddress.phone}
                </p>
                <p>
                  <span>Email:</span> {userAddress.email}
                </p>
                <br />
              </div>
            ) : (
              <p>No Address Added Yet.</p>
            )}
          </div>
          {userAddress ? null : (
            <button className="btn" onClick={handleToggleShow}>
              +
            </button>
          )}
        </div>
        {isShow ? (
          <div className="overlay">
            <AddAddressForm  handleToggleShow={handleToggleShow}/>
          </div>
        ) : null}
      </div>
    </div>
  ) : (
    <Loader />
  );
};
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  userAddress: selectUserAddress,
  userOrderHistory: selectUserOrderHistory
});
export default connect(mapStateToProps)(UserPage);
