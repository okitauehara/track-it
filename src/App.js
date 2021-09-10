import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Today from './components/Today';
import Habits from './components/Habits';
import History from './components/History';

export default function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<Login />
				</Route>
				<Route path='/cadastro' exact>
					<SignUp />
				</Route>
				<Route path='/hoje' exact>
					<Today />
				</Route>
				<Route path='/habitos' exact>
					<Habits />
				</Route>
				<Route path='/historico' exact>
					<History />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

