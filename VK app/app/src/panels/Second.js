import React from 'react';
import PropTypes from 'prop-types';
import './Second.css';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Second = ({ id, go, reg, transaction, fetchedUser }) => (
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
				<Button stretched size="l" mode="secondary" onClick={go} data-to="organization" 
						className="Button">
					Организация
				</Button>

				<Button stretched size="l" mode="secondary" onClick={go} data-to="school"
						className="Button">
					Школа
				</Button>

				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik"
						className="Button">
					Студент
				</Button>

				<Button stretched size="l" mode="secondary" onClick={transaction}
						className="Button">
					Транзакция
				</Button>

			</Div>
		</Group>
	</Panel>
);

Second.propTypes = {
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

export default Second;
