import React from "react"
import styled from "@emotion/styled"
import { useTable } from "react-table"
import { EditIcon, RemoveIcon } from "../../assets/icon"
import InputNumber from "../InputNumber"

const ContainerStyled = styled.div`

  table {
    width: 95%;
    border-spacing: 0;
    border-bottom: 1px solid #CCCCCC;
    margin-top: 29px;
    margin-right: 54px;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th {
      padding-bottom: 13px;
    }

    td {
      padding-top: 31px;
      padding-bottom: 31px;
      vertical-align: top;
    }

    th,
    td {
      text-align: left;
      margin: 0;
      border-bottom: 1px solid #CCCCCC;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// @ts-ignore
function TableContainer({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

const Table: React.FC = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "สินค้า",
        accessor: "product",
        Cell: ({ value }: any) => {
          return (
            <div className="flex">
              <img src={value?.pic} alt="" />
              <span className="mt-1">{value.name}</span>
            </div>
          )
        },
      },
      {
        Header: "ราคา",
        accessor: "price",
      },
      {
        Header: "จำนวน",
        accessor: "total",
        Cell: () => {
          return (
            <InputNumber />
          )
        }
      },
      {
        Header: "ยอดรวม",
        accessor: "priceTotal",
        Cell: ({ value }: any) => {
          return (
            <div className="flex">
              <div className="flex-auto w-20">
                {value}
              </div>
              <div>
                <EditIcon />
                <RemoveIcon />
              </div>
            </div>
          )
        }
      },
    ],
    []
  )

  const data = React.useMemo(
    () => [
      {
        product: {
          name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
          pic: require('../../assets/images/book.png'),
        },
        price: "THB499.00",
        total: "",
        priceTotal: "THB499.00",
      },
      {
        product: {
          name: "รสชาติของผลไม้ที่ยังไม่สุกงอม",
          pic: require('../../assets/images/book.png'),
        },
        price: "THB499.00",
        total: "",
        priceTotal: "THB499.00",
      },
    ],
    []
  )
  return (
    <ContainerStyled className="font-kanit">
      <TableContainer columns={columns} data={data} />
    </ContainerStyled>
  )
}

export default Table
