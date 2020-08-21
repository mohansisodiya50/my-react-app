import React from 'react'
import EditableTable from '../../shared/Table';

const originData = [
	{
	  id: "0",
	  itemName: "Item 1",
	  itemQuantity: "2",
	},
	{
	  id: "2",
	  itemName: "Item 2",
	  itemQuantity: "3",
	},

  ];

  const columnData = [
	{
		title: "Item Id",
		dataIndex: "id",
		width: "25%",
		editable: false
	  },
	  {
		title: "Item Name",
		dataIndex: "itemName",
		width: "15%",
		editable: true
	  },
	  {
		title: "Item Quantity",
		dataIndex: "itemQuantity",
		width: "40%",
		editable: true
	  },
  ];

export default function Items() {
	return (
		<>
			<EditableTable originData={originData} columnData={columnData} />
		</>
	)
}
