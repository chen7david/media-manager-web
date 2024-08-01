import { Button, Input, Form } from 'antd'
import { PageContainer } from '../../components/layout/PageContainer'
import { Toolbar } from '../../components/navigation/Toolbar'
import { SearchOutlined, UserAddOutlined } from '@ant-design/icons'

export const Home = () => {
  const cards = Array.from({ length: 200 })
  return (
    <>
      <Toolbar className="bg-blue-600">
        <Form layout="inline">
          <Form.Item>
            <Input
              size="large"
              allowClear
              prefix={<SearchOutlined />}
              style={{ width: 200 }}
            />
          </Form.Item>
          <Form.Item>
            <Button size="large" type="primary">
              Search
            </Button>
          </Form.Item>
        </Form>

        <div id="actions" className="flex-1 flex justify-end">
          <div className="">
            <Button
              size="large"
              type="primary"
              className=""
              icon={<UserAddOutlined />}
            ></Button>
          </div>
        </div>
      </Toolbar>
      <PageContainer className="flex flex-col gap-2">
        {cards.map((_, index) => (
          <div className="bg-white rounded p-5">
            <h1>{index}</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            reiciendis nostrum quas doloremque a provident iure rerum aperiam
            eligendi quae quam quod rem, optio amet architecto dolorum
            voluptatem. Fugit assumenda error, sunt fuga dicta consequuntur
            eveniet ipsam at eaque autem.
          </div>
        ))}
      </PageContainer>
    </>
  )
}
