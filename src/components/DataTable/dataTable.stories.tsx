import { Meta, StoryObj } from '@storybook/react';

import DataTable from './dataTable';

const meta: Meta<typeof DataTable> = {
    title: 'DataTable',
    component: DataTable,
};

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
    args: {
        rows: [
            { id: 1, name: 'tag1', count: 10 },
            { id: 2, name: 'tag2', count: 20 },
            { id: 3, name: 'tag3', count: 30 },
            { id: 4, name: 'tag4', count: 40 },
            { id: 5, name: 'tag5', count: 50 },

        ],
        paginationModel: {
            pageSize: 5,
            page: 0
        },
        setPaginationModel: () => { },
    }
}