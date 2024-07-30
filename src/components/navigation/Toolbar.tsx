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
        'z-10 sticky top-0 h-16 flex items-center gap-2 px-4',
        className,
      )}
      {...rest}
    >
      <Button
        type="primary"
        className="md:hidden"
        icon={isDrawerOpen ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      {children}
    </div>
  )
}
