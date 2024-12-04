import type { FC } from 'react';
import React from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export const Loader: FC = () => {
    return (
        <Spin
            indicator={
                <LoadingOutlined
                    style={{ fontSize: 70, color: '#000000' }}
                    spin
                />
            }
        />
    );
};
