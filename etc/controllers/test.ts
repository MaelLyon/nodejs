/** etc/controllers/test.ts */
import connection from "../shared/db-connect";
import { OkPacket } from "mysql2";

const getTests = async () => {
	return new Promise((resolve, reject) => {
		connection.query<OkPacket>('SELECT \'available\' as connectionState;', (err, res) => {
			if (err) reject(err);
			else resolve(res);
		});
	});
};

export default { getTests };