import { Box, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
    numberOfTags: number,
    paginationModel: {
        pageSize: number,
        page: number
    },
    setPaginationModel: React.Dispatch<React.SetStateAction<{
        pageSize: number,
        page: number
    }>>
}

const RowInput = ({ numberOfTags, paginationModel, setPaginationModel }: Props) => {

    const [error, setError] = useState<boolean | undefined>();

    const handlePageSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const pageSize = Math.round(Number(event.target.value));

        let newPageSize = pageSize;
        if (pageSize > numberOfTags) {
            newPageSize = numberOfTags;
            setError(true);
        } else if (pageSize < 1) {
            newPageSize = 1;
            setError(true);
        } else {
            setError(false);
        }

        setPaginationModel({ ...paginationModel, pageSize: newPageSize });
    };

    return (
        <Box sx={{ width: '100%' }}>
            <TextField
                type="number"
                error={error}
                inputProps={{ min: 1, max: numberOfTags }}
                defaultValue={5}
                label="Rows per page"
                onChange={handlePageSizeChange}
                helperText={error && `Enter a number between 1 and ${numberOfTags}`}
                sx={{ height: 80 }}
                InputLabelProps={{ shrink: true }}
                fullWidth

            />
        </Box>
    );
}

export default RowInput;