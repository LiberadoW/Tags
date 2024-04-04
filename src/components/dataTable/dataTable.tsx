import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { Row } from '../../types';

const COLUMNS: GridColDef[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'count', headerName: 'Count', flex: 1 },

];

interface PropsData {
    rows: Row[],
    paginationModel: {
        pageSize: number,
        page: number
    },
    setPaginationModel: React.Dispatch<React.SetStateAction<{
        pageSize: number,
        page: number
    }>>
}

const DataTable = ({ rows, paginationModel, setPaginationModel }: PropsData) => {

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={COLUMNS}
                aria-label='tags'
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                paginationModel={paginationModel}
                onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
                disableColumnMenu={true}
                pageSizeOptions={[]}
                disableColumnResize={true}
                disableRowSelectionOnClick={true}
            />
        </Box>
    );
}

export default DataTable;