import { createElement, useState } from "react"
import './tailwind.css'
import Button from "./components/Button"
import Tab from "./components/Tab"

function Profile() {
	console.log('profil tabına geldin!')
	return (
		<div>
			burası profile tabı
		</div>
	)
}

function App() {

	const name = 'Tayfun'
  const todos = ['todo1', 'todo2', 'todo3']

	const [activeTab, setActiveTab] = useState(1)

	/*
  const h1 = createElement('h1', null, 'prototurk.com')
  const ul = createElement('ul', null, todos.map(todo => createElement('li', null, todo)))
	const button = createElement(Button, {
		text: 'Buton Texti'
	}, null)
  return createElement('main', {
    className: 'test',
    id: 'main'
  }, h1, ul, button)
	 */

	const searchFunction = () => {
		alert('hello!')
	}

  return (
    <>

			<div style={{padding: 20}}>
				<button onClick={() => setActiveTab(2)}>
					Aktif Tabı Değiştir
				</button>
				<Tab activeTab={activeTab} onChange={tabIndex => setActiveTab(tabIndex)}>
					<Tab.Panel title="Profil"><Profile /></Tab.Panel>
					<Tab.Panel title="Hakkında">2. tab</Tab.Panel>
					<Tab.Panel title="Ayarlar">3. tab</Tab.Panel>
				</Tab>
				{activeTab === 2 && (
					<div>
						burası da eksta bir alan!
					</div>
				)}
			</div>

			<div style={{padding: 20}}>
				<Button>
					Buton Örneği
				</Button>
				<Button variant="success">
					Buton Örneği
				</Button>
				<Button variant="danger">
					Buton Örneği
				</Button>
				<Button variant="warning">
					Buton Örneği
				</Button>
			</div>
      <h1 tabIndex="3" style={{color: 'red', backgroundColor: 'yellow'}}>prototurk.com</h1>
      <label htmlFor="search" tabIndex="2" onClick={() => alert('merhaba')}>Arama</label>
      <input type="text" id="search" tabIndex="1" />
      <ul>
				{todos.map((todo, index) => (
					<li key={index}>
						{todo}
					</li>
				))}
      </ul>
    </>
  );
}

export default App;
