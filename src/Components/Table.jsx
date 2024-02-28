import { DataGrid } from '@mui/x-data-grid';

const Table = ({rows, columns}) => {
  return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
    sx={{
        background: "white",
        border: "1px solid #cacaca"
    }}
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>
  )
}

export default Table