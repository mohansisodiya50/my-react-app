import React from 'react'
import EditableTable from '../../shared/Table';

  const originData = [
	{
	  id: "0",
	  dealName: "deal 1",
	  dealDescription: "deal description 1",
	},
	{
	  id: "1",
	  dealName: "deal 2",
	  dealDescription: "deal description 2",
	},
  ];

  const columnData = [
	{
		title: "Deal Id",
		dataIndex: "id",
		width: "25%",
		editable: false
	  },
	  {
		title: "Deal Name",
		dataIndex: "dealName",
		width: "15%",
		editable: true
	  },
	  {
		title: "Description",
		dataIndex: "dealDescription",
		width: "40%",
		editable: true
	  },
  ];

export default function Deals() {
	return (
		<div>
			<EditableTable originData={originData} columnData={columnData} />
		</div>
	)
}
