// import { useEffect } from 'react';

import axios from 'axios';
import { getAllItemApi } from '../../config/api/items/itemApi';
import { Col, Row } from 'antd';
import ItemList from '../items/ItemList';
// import { useEffect, useState } from 'react';

function Itempage() {
	const { data, isLoading } = getAllItemApi();

	console.log(data?.data);

	return (
		<div>
			<Row>
				{data?.data.map((item: any) => (
					<Col xs={24} lg={6} md={12} sm={6}>
						<ItemList item={item} />
					</Col>
				))}
			</Row>
		</div>
	);
}

export default Itempage;
