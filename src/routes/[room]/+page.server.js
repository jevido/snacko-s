import { redirect } from '@sveltejs/kit';
import db from '$lib/db';

const rooms = await db.collection('rooms');

export async function load({ params }) {
	let room = await rooms.findOne({ name: params.room });

	if (!room) {
		return {
			success: false,
			reason: 'does not exist'
		};
	}

	return {
		success: true,
		room: room.name
	};
}

export const actions = {
	createRoom: async ({ request }) => {
		const formData = await request.formData();
		const name = formData.get('name');
		const existingRoom = await rooms.findOne({name});

		if (existingRoom === null) {
			await rooms.insertOne({ name });
		}

		throw redirect(307, `/${name}`);
	}
};
