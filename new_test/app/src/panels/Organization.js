import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import organization from '../img/organization.png';
import './Organization.css';

const Organization = ({ id, go, reg, transaction, fetchedUser }) => (
	<Panel id={props.id}>
		<PanelHeader
			before={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			Организация
		</PanelHeader>
		<img className="Organization" src={organization} alt="Organization"/>
		<Div>

			<Button stretched size="l" mode="secondary" onClick={transaction}
					className="Button">
				Кнопка 1
			</Button>
			<Button stretched size="l" mode="secondary" onClick={transaction}
					className="Button">
				Кнопка 2
			</Button>

		</Div>
	</Panel>
);

Organization.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Organization;
