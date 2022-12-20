import db from '$lib/db';

export async function load({ params }) {
	let room = await db.collection('rooms').findOne({ name: params.room });
	if (!room) {
		return {
			success: false,
			reason: 'does not exist'
		};
	}

	return {
		success: true,
		room: room.name,
		expires: room.expires_at
	};
}
