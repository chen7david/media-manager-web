import { Drawer } from './components/navigation/Drawer'
import { AppContainer } from './components/layout/AppContainer'
import { MainContainer } from './components/layout/MainContainer'
import { Router } from './pages/router/Router'
import { useAtom } from 'jotai'
import { drawerOpenAtom } from './store/navigation.store'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(drawerOpenAtom)
  return (
    <AppContainer>
      <Drawer
        show={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="bg-red-300"
      />
      <MainContainer className="bg-purple-500">
        <Router />
      </MainContainer>
    </AppContainer>
  )
}

export default App
