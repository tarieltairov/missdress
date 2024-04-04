import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { ConfigProvider, MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';
import styles from './productCategories.module.scss';

type Props = {
    items: any;
    bgColor?: string;
    width?: number | string;
};

const rootSubmenuKeys = ['sub1'];

const ProductCategories = ({
    items,
    bgColor = 'inherit',
    width = 256,
}: Props) => {
    const [openKeys, setOpenKeys] = useState(['']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#E5A66E',
                    colorBgLayout: 'orange',
                },
            }}
        >
            <Menu
                mode='inline'
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                className={styles.custom_menu}
                style={{
                    width: width,
                    backgroundColor: bgColor,
                    border: 'none',
                    color: 'black',
                }}
                expandIcon={(icon) =>
                    icon.isOpen ? (
                        <CaretUpOutlined
                            style={{
                                fontSize: '16px',
                                color: '#E5A66E',
                            }}
                        />
                    ) : (
                        <CaretDownOutlined
                            style={{
                                fontSize: '16px',
                                color: '#000',
                            }}
                        />
                    )
                }
                items={items}
            />
        </ConfigProvider>
    );
};

export default ProductCategories;
