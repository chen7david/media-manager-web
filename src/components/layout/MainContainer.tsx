import cn from 'classnames'
import { useAtom } from 'jotai'
import { drawerOpenAtom } from '../../store/navigation.store'

export const MainContainer = ({
  className,
  children,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [isDrawerOpen] = useAtom(drawerOpenAtom)
  return (
    <div
      className={cn(
        'flex ml-0 flex-col flex-1 overflow-y-auto',
        className,
        'transform transition-all duration-300 ease-in-out',
        {
          'md:-ml-60': !isDrawerOpen,
          'md:ml-0': isDrawerOpen,
        },
      )}
      {...restProps}
    >
      {children}
    </div>
  )
}
