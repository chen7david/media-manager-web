import { Toolbar } from '../../components/navigation/Toolbar'

export const Home = () => {
  const cards = Array.from({ length: 200 })
  return (
    <>
      <Toolbar className="bg-blue-600" />
      <div className="space-y-1">
        {cards.map(() => (
          <div className="bg-white rounded">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            reiciendis nostrum quas doloremque a provident iure rerum aperiam
            eligendi quae quam quod rem, optio amet architecto dolorum
            voluptatem. Fugit assumenda error, sunt fuga dicta consequuntur
            eveniet ipsam at eaque autem.
          </div>
        ))}
      </div>
    </>
  )
}
