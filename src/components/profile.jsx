import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: (
      <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
        logout
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
        change password
      </a>
    ),
    key: '1',
  },
 
];
export default function Profile(){
    return(
        <header className=" bg-zinc-300 w-[20%] text-center leading-11">
              <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        mohamed_ahmed@gmail.com
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
        </header>


    );
}





