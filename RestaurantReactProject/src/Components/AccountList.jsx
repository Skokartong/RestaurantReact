import React from "react";

const AccountList = ({ accounts }) => {
  return (
    <div className="container mt-5">
      <h1>Accounts</h1>
      <table className="table table-striped table-responsive">
        <thead className="table-light">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.firstName}</td>
              <td>{account.lastName}</td>
              <td>{account.email}</td>
              <td>{account.phone}</td>
              <td>{account.address}</td>
              <td>
                <a
                  href={`/view-account/${account.id}`}
                  className="btn btn-info"
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;
