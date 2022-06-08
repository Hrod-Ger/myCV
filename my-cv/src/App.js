import {Component} from 'react'
import Productos from './components/productos'
import Layout from './components/layout'
import Title from './components/title'

class App extends Component {
  state = {
    productos: [
      { name: 'Tomate', price: 15, img: '/productos/tomate.jpg'},
      { name: 'Cebolla', price: 10, img: '/productos/cebolla.jpg'},
      { name: 'Platano', price: 5, img: '/productos/platano.jpg'}
    ]
  }
  render() {
    return (
      <div>
      <Layout>
        <Title/>
        <Productos
          agregarAlCarro={ () => console.log("Hey")}
          productos={ this.state.productos }
        />
      </Layout>
      </div>
    )
  }
}

export default App;
