import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';
import organization from '../img/line.png';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, reg, transaction_1,
	transaction_2,
	transaction_3,
	transaction_4,
	transaction_5,
	transaction_6,
	transaction_7,
	transaction_8,
	transaction_9,
	fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Аттестат</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Пользователь</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				subtitle={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header className="Title" level="1" mode="secondary">
			Добро пожаловать, выберите соответствующий раздел
		</Header>}>
			<Div>

				<Button stretched size="l" mode="primary" onClick={reg}
						className="Button">
					Регистрация
				</Button>

				<Button stretched size="l" mode="secondary" onClick={transaction_1}  
						className="Button">
					Добавить информацию о пользователе
				</Button>

				<Button stretched size="l" mode="secondary" onClick={transaction_2}
						className="Button">
					Посмотреть инфомрацию о пользователе
				</Button>

				<Button stretched size="l" mode="secondary" onClick={transaction_3} 
						className="Button">
					Создать курс
				</Button>

				<Button stretched size="l" mode="secondary" onClick={transaction_4} 
						className="Button">
					Управление курсами
				</Button>

				<Button stretched size="l" mode="secondary" onClick={transaction_5}  
						className="Button">
					Посмотреть информацию о курсе
				</Button>

				<Button stretched size="l" mode="primary" onClick={transaction_6} 
						className="Button">
					Проверить владельца документа
				</Button>

				<Button stretched size="l" mode="primary" onClick={transaction_7} 
						className="Button">
					Документы пользователя
				</Button>

				<Button stretched size="l" mode="primary" onClick={transaction_8} 
						className="Button">
					Выпустить сертификат
				</Button>

				<Button stretched size="l" mode="primary" onClick={transaction_9} 
						className="Button">
					Выдать сертификат
				</Button>

				<Button stretched size="l" mode="tertiary" onClick={go} data-to="persik" 
						className="Button">
					Мои сертификаты
				</Button>
				

			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;