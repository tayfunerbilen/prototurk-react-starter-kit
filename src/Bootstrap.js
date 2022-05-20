import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Tabs, Tab } from 'react-bootstrap';

function Bootstrap() {
	return (
		<div>
			<h3>Bootstrap komponentleri</h3>
			<Button>Button</Button>
			<Button variant="success">Button</Button>
			<Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
				<Tab eventKey="home" title="Home">
					<div>home</div>
				</Tab>
				<Tab eventKey="profile" title="Profile">
					<div>profile</div>
				</Tab>
				<Tab eventKey="contact" title="Contact" disabled>
					<div>contact</div>
				</Tab>
			</Tabs>
		</div>
	)
}

export default Bootstrap
