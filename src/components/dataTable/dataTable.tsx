import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, TextField, Container } from '@mui/material';
import { Tags } from '../../types';


import { useState } from 'react';

const COLUMNS: GridColDef[] = [
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'count', headerName: 'Count', width: 200 },
];

interface propsData {
    tagsData: Tags
}

const DataTable = ({ tagsData }: propsData) => {

    console.log(tagsData)

    const numberOfTags = tagsData.items ? tagsData.items.length : 0;

    const rows = tagsData.items ? tagsData.items.map((tag, index) => {
        return {
            name: tag.name,
            count: tag.count,
            id: index
        }
    }) : [];

    const [paginationModel, setPaginationModel] = useState({
        pageSize: 5,
        page: 0,
    });

    console.log(paginationModel)

    return (
        <Container>

            <TextField
                type="text"
                inputProps={{ inputmode: 'numeric', pattern: '[0-9]*', min: 1, max: numberOfTags }}
                label="Rows per page"
                fullWidth
                onChange={(e) => setPaginationModel({ ...paginationModel, pageSize: Number(e.target.value) })}
            />

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
                    disableColumnResize={true}
                />
            </Box>
        </Container>
    );
}

export default DataTable;