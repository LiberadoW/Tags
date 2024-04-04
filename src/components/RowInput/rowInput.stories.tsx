import { Meta, StoryObj } from '@storybook/react';

import RowInput from './rowInput.tsx';

const meta: Meta<typeof RowInput> = {
    title: 'RowInput',
    component: RowInput,
};

export default meta

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        numberOfTags: 30,
        paginationModel: {
            pageSize: 5,
            page: 0
        },
        setPaginationModel: () => { },
    }
}