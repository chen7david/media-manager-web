import { Button } from 'antd'
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
        'bg-white h-20 sticky top-0 left-0 right-0 flex flex-col justify-center',
        className,
      )}
      {...rest}
    >
      <Button
        type="text"
        icon={isDrawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        style={{
          color: 'white',
        }}
      />
      {children}
    </div>
  )
}
