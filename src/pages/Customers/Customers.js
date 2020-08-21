import React from 'react'
import EditableTable from '../../shared/Table';

  const originData = [
	{
	  id: "0",
	  firstName: "Mohan",
	  lastName: "Sisodiya",
	  contactNumber: "9827455555",
	  emailId: "ms@gmail.com"
	},
	{
	  id: "1",
	  firstName: "Sohan",
	  lastName: "Sisodiya",
	  contactNumber: "926055555",
	  emailId: "SSSS@gmail.com"
	},
  ];

  const columnData = [
	{
		title: "Id",
		dataIndex: "id",
		width: "25%",
		editable: false
	  },
	  {
		title: "First Name",
		dataIndex: "firstName",
		width: "15%",
		editable: true
	  },
	  {
		title: "Last Name",
		dataIndex: "lastName",
		width: "40%",
		editable: true
	  },
	  {
		title: "Contact Number",
		dataIndex: "contactNumber",
		width: "15%",
		editable: true
	  },
	  {
		title: "Email",
		dataIndex: "emailId",
		width: "40%",
		editable: true
	  },
  ];

export default function Customers() {
	return (
		<div>
			<EditableTable originData={originData} columnData={columnData} />
		</div>
	)
}
