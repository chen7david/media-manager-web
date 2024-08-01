import { Button, Form } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import cn from 'classnames'
import { useAtom } from 'jotai'
import { drawerOpenAtom } from '../../store/navigation.store'

export const Toolbar = ({
  children,
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(drawerOpenAtom)
  return (
    <div
      className={cn(
        'z-10 flex items-center sticky top-0 h-16 md:pr-4 md:pl-0 px-4',
        className,
      )}
      {...rest}
    >
      <Form layout="inline">
        <Form.Item>
          <Button
            className="md:hidden"
            size="large"
            type="primary"
            icon={isDrawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          />
        </Form.Item>
      </Form>
      {children}
    </div>
  )
}
