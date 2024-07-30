import { Drawer } from './components/navigation/Drawer'
import { AppContainer } from './components/layout/AppContainer'
import { MainContainer } from './components/layout/MainContainer'
import { Router } from './pages/router/Router'
import { useAtom } from 'jotai'
import { drawerOpenAtom } from './store/navigation.store'
import { Home } from './pages/home/Home'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useAtom(drawerOpenAtom)
  return (
    <AppContainer className="bg-orange-500">
      <Drawer
        show={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        className="bg-red-300"
      ></Drawer>
      <MainContainer>
        <Router />
      </MainContainer>
    </AppContainer>
  )
}

export default App
